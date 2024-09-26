// pages/roles/Employees.js
import React, { useState, useEffect } from 'react';
import { Button, Container, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Collapse, IconButton, TextField } from '@mui/material';
import AddManagerModal from '../../components/AddManagerModal';
import { observer } from "mobx-react-lite";
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import useFetchUser from '../../stores/hooks/useFetchUser';
import store from './../../stores/userStore';

const Employees = () => {
    const [open, setOpen] = useState(false);
    const [employees, setEmployees] = useState([]);
    const [filteredEmployees, setFilteredEmployees] = useState([]); // Отфильтрованные сотрудники
    const [expanded, setExpanded] = useState({});
    const [searchTerm, setSearchTerm] = useState(''); // Строка поиска
    const { user } = useFetchUser();

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        if (user) {
            fetchEmployees();
        }
    }, [user]);

    const fetchEmployees = async () => {
        const response = await fetch('/api/admin/getUsers');
        const data = await response.json();

        if (user.role === 'manager') {
            const filteredEmployees = data.filter(emp => emp?.assignedTo?._id === user._id);
            for (const emp of filteredEmployees) {
                const investorResponse = await fetch(`/api/admin/getInvestors?employeeId=${emp._id}`);
                const investors = await investorResponse.json();
                emp.assignedInvestors = investors;
            }
            setEmployees(filteredEmployees);
            setFilteredEmployees(filteredEmployees); // По умолчанию отображаем всех
        } else if (user.role === 'admin') {
            const employeesList = data.filter(emp => emp.role === 'employee');
            setEmployees(employeesList);
            setFilteredEmployees(employeesList); // По умолчанию отображаем всех
        }
    };

    const handleExpandClick = (id) => {
        setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const handleSearch = () => {
        if (searchTerm.trim() === '') {
            setFilteredEmployees(employees); // Если строка поиска пуста, показать всех сотрудников
            return;
        }

        const lowerSearchTerm = searchTerm.toLowerCase();
        const filtered = employees.filter(employee =>
            employee.firstName.toLowerCase().includes(lowerSearchTerm) ||
            employee.lastName.toLowerCase().includes(lowerSearchTerm) ||
            employee.email.toLowerCase().includes(lowerSearchTerm) ||
            employee.phoneNumber.includes(searchTerm)
        );
        setFilteredEmployees(filtered);
    };

    if (store.isAdedRole) {
        store.isAdedRole = !store.isAdedRole;
        fetchEmployees();
    }

    return (
        <Container sx={{ mt: '6rem', marginLeft: 'auto', marginRight: 'auto', maxWidth: '800px', flexGrow: 1 }}>
            <Typography variant="h6" align="center" gutterBottom>
                Employees
            </Typography>
            <Box>
                {/* Добавление поля поиска */}
                <Box display="flex" justifyContent="center" my={2}>
                    <TextField
                        label="Search by Name, Email, or Phone"
                        variant="outlined"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        sx={{ marginRight: '1rem', width: '300px' }}
                    />
                    <Button variant="contained" color="primary" onClick={handleSearch}>
                        Search
                    </Button>
                    <Button variant="outlined" color="secondary" onClick={() => setFilteredEmployees(employees)} sx={{ marginLeft: '1rem' }}>
                        Reset
                    </Button>
                </Box>

                <AddManagerModal open={open} handleClose={handleClose} />

                <Box mt={4}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>First Name</TableCell>
                                    <TableCell>Last Name</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Phone Number</TableCell>
                                    <TableCell>Investors</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredEmployees.map(employee => (
                                    <React.Fragment key={employee._id}>
                                        <TableRow>
                                            <TableCell>{employee.firstName}</TableCell>
                                            <TableCell>{employee.lastName}</TableCell>
                                            <TableCell>{employee.email}</TableCell>
                                            <TableCell>{employee.phoneNumber}</TableCell>
                                            <TableCell>
                                                <IconButton onClick={() => handleExpandClick(employee._id)}>
                                                    {expanded[employee._id] ? <ExpandLess /> : <ExpandMore />}
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell colSpan={5}>
                                                <Collapse in={expanded[employee._id]} timeout="auto" unmountOnExit>
                                                    <Box margin={1}>
                                                        <Typography variant="h6" gutterBottom component="div">
                                                            Investors
                                                        </Typography>
                                                        <Table size="small" aria-label="investors">
                                                            <TableHead>
                                                                <TableRow>
                                                                    <TableCell>ID</TableCell>
                                                                    <TableCell>First Name</TableCell>
                                                                    <TableCell>Last Name</TableCell>
                                                                    <TableCell>Email</TableCell>
                                                                    <TableCell>Phone Number</TableCell>
                                                                    <TableCell>Email Verified</TableCell>
                                                                    <TableCell>Phone Verified</TableCell>
                                                                </TableRow>
                                                            </TableHead>
                                                            <TableBody>
                                                                {employee.assignedInvestors?.map(investor => (
                                                                    <TableRow key={investor._id}>
                                                                        <TableCell>{investor._id}</TableCell>
                                                                        <TableCell>{investor.firstName}</TableCell>
                                                                        <TableCell>{investor.lastName}</TableCell>
                                                                        <TableCell>{investor.email}</TableCell>
                                                                        <TableCell>{investor.phoneNumber}</TableCell>
                                                                        <TableCell>{investor.emailVerified ? 'Verified' : 'Not Verified'}</TableCell>
                                                                        <TableCell>{investor.phoneVerified ? 'Verified' : 'Not Verified'}</TableCell>
                                                                    </TableRow>
                                                                ))}
                                                            </TableBody>
                                                        </Table>
                                                    </Box>
                                                </Collapse>
                                            </TableCell>
                                        </TableRow>
                                    </React.Fragment>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </Container>
    );
};

export default observer(Employees);

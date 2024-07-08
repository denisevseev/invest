// pages/roles/Employees.js
import React, { useState, useEffect } from 'react';
import { Button, Container, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Collapse, IconButton } from '@mui/material';
import AddManagerModal from '../../components/AddManagerModal';
import { observer } from "mobx-react-lite";
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import useFetchUser from '../../stores/hooks/useFetchUser';
import store from './../../stores/userStore';

const Employees = () => {
    const [open, setOpen] = useState(false);
    const [employees, setEmployees] = useState([]);
    const [expanded, setExpanded] = useState({});
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
            // debugger
            // data.map(employee => {console.log(employee?.assignedTo?._id)})
            setEmployees(data.filter(emp => emp?.assignedTo?._id === user._id));
        } else if (user.role === 'admin') {
            setEmployees(data.filter(emp => emp.role === 'employee'));
        }
    };

    const handleExpandClick = (id) => {
        setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
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
                <Button variant="contained" color="primary" onClick={handleOpen}>
                    Add Employee
                </Button>
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
                                {employees.map(employee => (
                                    <>
                                        <TableRow key={employee._id}>
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
                                                                    <TableCell>First Name</TableCell>
                                                                    <TableCell>Last Name</TableCell>
                                                                </TableRow>
                                                            </TableHead>
                                                            <TableBody>
                                                                {employee.assignedInvestors?.map(investor => (
                                                                    <TableRow key={investor._id}>
                                                                        <TableCell>{investor.firstName}</TableCell>
                                                                        <TableCell>{investor.lastName}</TableCell>
                                                                    </TableRow>
                                                                ))}
                                                            </TableBody>
                                                        </Table>
                                                    </Box>
                                                </Collapse>
                                            </TableCell>
                                        </TableRow>
                                    </>
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


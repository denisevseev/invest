import React, { useState, useEffect } from 'react';
import { Button, Container, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import AddManagerModal from '../../components/AddManagerModal';
import store from "../../stores/userStore";
import {observer} from "mobx-react-lite";

const Employees = ({role}) => {
    const [open, setOpen] = useState(false);
    const [managers, setManagers] = useState([]);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        fetchManagers();
    }, []);

    const fetchManagers = async () => {
        const response = await fetch('/api/admin/getUsers');
        const data = await response.json();
        setManagers(data.filter(user => user.role === 'employee'));
    };
    if(store.isAdedRole){
        store.isAdedRole = !store.isAdedRole;
        fetchManagers()
    }

    return (
        <Container sx={{ mt: '6rem', marginLeft: 'auto', marginRight: 'auto', maxWidth: '800px', flexGrow: 1 }}>
            <Typography variant="h6" align="center" gutterBottom>
                Employees
            </Typography>
            <Box>
                <Button variant="contained" color="primary" onClick={handleOpen}>
                    Add employee
                </Button>
                <AddManagerModal open={open} handleClose={handleClose}  />
                <Box mt={4}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>First Name</TableCell>
                                    <TableCell>Last Name</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Phone Number</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {managers.map(manager => (
                                    <TableRow key={manager._id}>
                                        <TableCell>{manager.firstName}</TableCell>
                                        <TableCell>{manager.lastName}</TableCell>
                                        <TableCell>{manager.email}</TableCell>
                                        <TableCell>{manager.phoneNumber}</TableCell>
                                    </TableRow>
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

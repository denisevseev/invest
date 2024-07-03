import React, { useState, useEffect } from 'react';
import { Button, Container, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import AddManagerModal from '../components/AddManagerModal';
import store from '../stores/userStore';


const AdminDashboard = () => {
  const [open, setOpen] = useState(false);
  const [managers, setManagers] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    fetchManagers();
    store.roleTitle = 'Admin'
  }, []);

  const fetchManagers = async () => {
    const response = await fetch('/api/admin/getUsers');
    const data = await response.json();
    setManagers(data.filter(user => user.role === 'manager'));
  };

  return (
    <Container sx={{ maxWidth: '100%', width: '100%', mt: '12rem' }}>
      <Box>
        {/* <Typography variant="h4" gutterBottom>Admin Dashboard</Typography> */}
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Add Manager
        </Button>
        <AddManagerModal open={open} handleClose={handleClose} />
        <Box mt={4}>
          <Typography variant="h6">Managers List</Typography>
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

export default AdminDashboard;

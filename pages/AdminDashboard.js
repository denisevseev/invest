import React, { useState, useEffect } from 'react';
import { Button, Container, Typography, Box } from '@mui/material';
import AddManagerModal from './../components/AddManagerModal';

const AdminDashboard = () => {
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
    setManagers(data.filter(user => user.role === 'manager'));
  };

  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h4">Admin Dashboard</Typography>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Add Manager
        </Button>
        <AddManagerModal open={open} handleClose={handleClose} />
        <Box mt={4}>
          <Typography variant="h6">Managers List</Typography>
          {managers.map(manager => (
            <Box key={manager._id} mb={2}>
              <Typography>{manager.firstName} {manager.lastName} - {manager.email}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default AdminDashboard;

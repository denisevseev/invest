import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';

const AddManagerModal = ({ open, handleClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/admin/addManager', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, phoneNumber, firstName, lastName })
    });

    if (response.ok) {
      alert('Manager added successfully');
      handleClose();
    } else {
      alert('Error adding manager');
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{ p: 4, backgroundColor: 'white', borderRadius: 2, boxShadow: 24 }}>
        <Typography variant="h6" gutterBottom>Add Manager</Typography>
        <form onSubmit={handleSubmit}>
          <TextField label="First Name" fullWidth value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
          <TextField label="Last Name" fullWidth value={lastName} onChange={(e) => setLastName(e.target.value)} required />
          <TextField label="Email" type="email" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} required />
          <TextField label="Password" type="password" fullWidth value={password} onChange={(e) => setPassword(e.target.value)} required />
          <TextField label="Phone Number" fullWidth value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
          <Box mt={2} display="flex" justifyContent="space-between">
            <Button type="submit" variant="contained" color="primary">Save</Button>
            <Button onClick={handleClose} variant="outlined">Cancel</Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default AddManagerModal;

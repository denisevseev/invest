import React, { useState, useEffect } from 'react';
import { Button, Container, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Collapse, IconButton, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { ExpandMore, ExpandLess, Edit, Delete, VpnKey } from '@mui/icons-material';
import AddManagerModal from '../../components/AddManagerModal';
import { observer } from "mobx-react-lite";
import store from "../../stores/userStore";

const AdminDashboard = () => {
  const [open, setOpen] = useState(false);
  const [managers, setManagers] = useState([]);
  const [expanded, setExpanded] = useState({});
  const [expandedEmployee, setExpandedEmployee] = useState({});
  const [searchTerm, setSearchTerm] = useState(''); // Поисковая строка

  // Для модальных окон редактирования и удаления
  const [editingManager, setEditingManager] = useState(null);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [deletingManager, setDeletingManager] = useState(null);

  const [openPasswordDialog, setOpenPasswordDialog] = useState(false);
  const [passwordManager, setPasswordManager] = useState(null);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handlePasswordChangeClick = (manager) => {
    setPasswordManager(manager);
    setOpenPasswordDialog(true);
  };


  useEffect(() => {
    fetchManagers();
  }, []);

  const fetchManagers = async () => {
    const response = await fetch('/api/admin/getUsers');
    const data = await response.json();
    setManagers(data.filter(user => user.role === 'manager'));
  };

  const handleExpandClick = (id) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleEmployeeExpandClick = (id) => {
    setExpandedEmployee(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSearch = async () => {
    try {
      // Если строка поиска пустая, загружаем всех менеджеров
      if (searchTerm.trim() === '') {
        fetchManagers();
        return;
      }

      // Выполнение поиска по введенному запросу
      const response = await fetch(`/api/admin/searchUsers?searchTerm=${searchTerm}`);
      const filteredManagers = await response.json();
      setManagers(filteredManagers);
    } catch (error) {
      console.error('Error searching users:', error);
    }
  };

  // Функция для редактирования менеджера
  const handleEditClick = (manager) => {
    setEditingManager(manager);
    setOpenEditDialog(true);
  };

  const handleSaveEdit = async () => {
    try {
      const response = await fetch(`/api/admin/userHandler?userId=${editingManager._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: editingManager.firstName,
          lastName: editingManager.lastName,
          email: editingManager.email,
          phoneNumber: editingManager.phoneNumber,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update manager');
      }

      // Обновляем состояние менеджеров после успешного обновления
      setManagers(prevManagers =>
          prevManagers.map(manager =>
              manager._id === editingManager._id ? editingManager : manager
          )
      );
      setOpenEditDialog(false);
    } catch (error) {
      console.error('Error updating manager:', error);
    }
  };


  const handleSavePasswordChange = async () => {
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await fetch(`/api/admin/userHandler?userId=${passwordManager._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newPassword }),
      });

      if (!response.ok) {
        throw new Error('Failed to change password');
      }

      setOpenPasswordDialog(false);
      setNewPassword('');
      setConfirmPassword('');
    } catch (error) {
      console.error('Error changing password:', error);
    }
  };



  // Функция для удаления менеджера
  const handleDeleteClick = (manager) => {
    setDeletingManager(manager);
    setOpenDeleteDialog(true);
  };

  const handleDeleteManager = async () => {
    try {
      const response = await fetch(`/api/admin/userHandler?userId=${deletingManager._id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete manager');
      }

      // Удаляем менеджера из состояния
      setManagers(prevManagers => prevManagers.filter(manager => manager._id !== deletingManager._id));
      setOpenDeleteDialog(false);
    } catch (error) {
      console.error('Error deleting manager:', error);
    }
  };


  if (store.isAdedRole) {
    store.isAdedRole = !store.isAdedRole;
    fetchManagers();
  }

  return (
      <Container sx={{ mt: '6rem', marginLeft: 'auto', marginRight: 'auto', maxWidth: '800px', flexGrow: 1 }}>
        <Typography variant="h6" align="center" gutterBottom>
          Managers
        </Typography>
        <Box>
          <Button color="primary" onClick={handleOpen}>
            Add Manager
          </Button>
          <AddManagerModal open={open} handleClose={handleClose} />

          {/* Поле поиска */}
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
            {/* Кнопка сброса фильтра */}
            <Button variant="outlined" color="secondary" onClick={fetchManagers} sx={{ marginLeft: '1rem' }}>
              Reset
            </Button>
          </Box>

          <Box mt={4}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone Number</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {managers.map(manager => (
                      <React.Fragment key={manager._id}>
                        <TableRow>
                          <TableCell>{manager.firstName}</TableCell>
                          <TableCell>{manager.lastName}</TableCell>
                          <TableCell>{manager.email}</TableCell>
                          <TableCell>{manager.phoneNumber}</TableCell>
                          <TableCell>
                            <Box display="flex" justifyContent="space-between" alignItems="center">
                              <IconButton onClick={() => handleEditClick(manager)}>
                                <Edit />
                              </IconButton>
                              <IconButton onClick={() => handleDeleteClick(manager)}>
                                <Delete />
                              </IconButton>
                              <IconButton onClick={() => handlePasswordChangeClick(manager)}>
                                <VpnKey /> {/* Иконка ключа для смены пароля */}
                              </IconButton>
                              <IconButton onClick={() => handleExpandClick(manager._id)}>
                                {expanded[manager._id] ? <ExpandLess /> : <ExpandMore />}
                              </IconButton>
                            </Box>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell colSpan={5}>
                            <Collapse in={expanded[manager._id]} timeout="auto" unmountOnExit>
                              <Box margin={1}>
                                <Typography variant="h6" gutterBottom component="div">
                                  Employees
                                </Typography>
                                <Table size="small" aria-label="employees">
                                  <TableHead>
                                    <TableRow>
                                      <TableCell>First Name</TableCell>
                                      <TableCell>Last Name</TableCell>
                                      <TableCell>Investors</TableCell>
                                    </TableRow>
                                  </TableHead>
                                  <TableBody>
                                    {manager.assignedEmployees.map(employee => (
                                        <React.Fragment key={employee._id}>
                                          <TableRow>
                                            <TableCell>{employee.firstName}</TableCell>
                                            <TableCell>{employee.lastName}</TableCell>
                                            <TableCell>
                                              <IconButton onClick={() => handleEmployeeExpandClick(employee._id)}>
                                                {expandedEmployee[employee._id] ? <ExpandLess /> : <ExpandMore />}
                                              </IconButton>
                                            </TableCell>
                                          </TableRow>
                                          <TableRow>
                                            <TableCell colSpan={3}>
                                              <Collapse in={expandedEmployee[employee._id]} timeout="auto" unmountOnExit>
                                                <Box margin={1}>
                                                  <Typography variant="h6" gutterBottom component="div">
                                                    Investors
                                                  </Typography>
                                                  <Table size="small" aria-label="investors">
                                                    <TableHead>
                                                      <TableRow>
                                                        <TableCell>First Name</TableCell>
                                                        <TableCell>Last Name</TableCell>
                                                        <TableCell>Email</TableCell>
                                                        <TableCell>Phone Number</TableCell>
                                                      </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                      {(employee.assignedInvestors || []).map(investor => (
                                                          <TableRow key={investor._id}>
                                                            <TableCell>{investor.firstName}</TableCell>
                                                            <TableCell>{investor.lastName}</TableCell>
                                                            <TableCell>{investor.email}</TableCell>
                                                            <TableCell>{investor.phoneNumber}</TableCell>
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

        {/* Модальное окно для редактирования */}
        <Dialog open={openEditDialog} onClose={() => setOpenEditDialog(false)}>
          <DialogTitle>Edit Manager</DialogTitle>
          <DialogContent>
            <TextField
                margin="dense"
                label="First Name"
                type="text"
                fullWidth
                value={editingManager?.firstName || ''}
                onChange={(e) => setEditingManager({ ...editingManager, firstName: e.target.value })}
            />
            <TextField
                margin="dense"
                label="Last Name"
                type="text"
                fullWidth
                value={editingManager?.lastName || ''}
                onChange={(e) => setEditingManager({ ...editingManager, lastName: e.target.value })}
            />
            <TextField
                margin="dense"
                label="Email"
                type="email"
                fullWidth
                value={editingManager?.email || ''}
                onChange={(e) => setEditingManager({ ...editingManager, email: e.target.value })}
            />
            <TextField
                margin="dense"
                label="Phone Number"
                type="text"
                fullWidth
                value={editingManager?.phoneNumber || ''}
                onChange={(e) => setEditingManager({ ...editingManager, phoneNumber: e.target.value })}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenEditDialog(false)} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleSaveEdit} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>

        {/*смена пароля окно */}

        <Dialog open={openPasswordDialog} onClose={() => setOpenPasswordDialog(false)}>
          <DialogTitle>Change Password for {passwordManager?.firstName}</DialogTitle>
          <DialogContent>
            <TextField
                margin="dense"
                label="New Password"
                type="password"
                fullWidth
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
            />
            <TextField
                margin="dense"
                label="Confirm New Password"
                type="password"
                fullWidth
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenPasswordDialog(false)} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleSavePasswordChange} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>


        {/* Модальное окно для подтверждения удаления */}
        <Dialog open={openDeleteDialog} onClose={() => setOpenDeleteDialog(false)}>
          <DialogTitle>Delete Manager</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete this manager?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDeleteDialog(false)} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleDeleteManager} color="primary">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
  );
};

export default observer(AdminDashboard);

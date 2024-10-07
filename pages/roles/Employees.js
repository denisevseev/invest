import React, { useState, useEffect } from 'react';
import { Button, Container, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Collapse, IconButton, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { ExpandMore, ExpandLess, Edit, Delete, VpnKey } from '@mui/icons-material';
import AddManagerModal from '../../components/AddManagerModal';
import { observer } from "mobx-react-lite";
import useFetchUser from '../../stores/hooks/useFetchUser';
import store from './../../stores/userStore';

const Employees = () => {
    const [open, setOpen] = useState(false);
    const [employees, setEmployees] = useState([]);
    const [filteredEmployees, setFilteredEmployees] = useState([]); // Отфильтрованные сотрудники
    const [expanded, setExpanded] = useState({});
    const [searchTerm, setSearchTerm] = useState(''); // Строка поиска
    const { user } = useFetchUser();

    // Для модального окна редактирования и удаления
    const [editingEmployee, setEditingEmployee] = useState(null);
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [deletingEmployee, setDeletingEmployee] = useState(null);

    // Для модального окна смены пароля
    const [openPasswordDialog, setOpenPasswordDialog] = useState(false);
    const [passwordEmployee, setPasswordEmployee] = useState(null); // Сотрудник, для которого меняется пароль
    const [newPassword, setNewPassword] = useState(''); // Новый пароль
    const [confirmPassword, setConfirmPassword] = useState(''); // Подтверждение пароля


    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        if (user) {
            fetchEmployees();
        }
    }, [user]);
    const handlePasswordChangeClick = (employee) => {
        setPasswordEmployee(employee);
        setOpenPasswordDialog(true);
    };

    const handleSavePasswordChange = async () => {
        if (newPassword !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const response = await fetch(`/api/admin/userHandler?userId=${passwordEmployee._id}`, {
                method: 'POST', // Используем POST для смены пароля
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


    const fetchEmployees = async () => {
        const response = await fetch('/api/admin/getUsers');
        const data = await response.json();

        if (user.role === 'manager') {
            // Фильтруем сотрудников, назначенных текущему менеджеру
            const filteredEmployees = data.filter(emp => emp?.assignedTo?._id === user._id && emp.role === 'employee'); // Добавляем проверку роли 'employee'

            // Загружаем инвесторов для каждого сотрудника
            for (const emp of filteredEmployees) {
                const investorResponse = await fetch(`/api/admin/getInvestors?employeeId=${emp._id}`);
                const investors = await investorResponse.json();
                emp.assignedInvestors = investors;
            }

            setEmployees(filteredEmployees);
            setFilteredEmployees(filteredEmployees); // Отображаем всех отфильтрованных сотрудников
        } else if (user.role === 'admin') {
            const employeesList = data.filter(emp => emp.role === 'employee');
            setEmployees(employeesList);
            setFilteredEmployees(employeesList); // Отображаем всех сотрудников
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

    // Функция для редактирования сотрудника
    const handleEditClick = (employee) => {
        setEditingEmployee(employee);
        setOpenEditDialog(true);
    };

    const handleSaveEdit = async () => {
        try {
            const response = await fetch(`/api/admin/userHandler?userId=${editingEmployee._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName: editingEmployee.firstName,
                    lastName: editingEmployee.lastName,
                    email: editingEmployee.email,
                    phoneNumber: editingEmployee.phoneNumber
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to update employee');
            }

            const { updatedUser } = await response.json();

            // Обновляем состояние сотрудников после успешного обновления
            setEmployees(prevEmployees => {
                const updatedEmployees = prevEmployees.map(emp =>
                    emp._id === updatedUser._id ? updatedUser : emp
                );
                setFilteredEmployees(updatedEmployees); // Обновляем отфильтрованное состояние
                return updatedEmployees;
            });
            setOpenEditDialog(false);
        } catch (error) {
            console.error('Error updating employee:', error);
        }
    };



    // Функция для удаления сотрудника
    const handleDeleteClick = (employee) => {
        setDeletingEmployee(employee);
        setOpenDeleteDialog(true);
    };

    const handleDeleteEmployee = async () => {
        try {
            const response = await fetch(`/api/admin/userHandler?userId=${deletingEmployee._id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete employee');
            }

            // Удаляем сотрудника из состояния
            setEmployees(prevEmployees => {
                const updatedEmployees = prevEmployees.filter(emp => emp._id !== deletingEmployee._id);
                setFilteredEmployees(updatedEmployees); // Обновляем отфильтрованное состояние
                return updatedEmployees;
            });
            setOpenDeleteDialog(false);
        } catch (error) {
            console.error('Error deleting employee:', error);
        }
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
                                    <TableCell>Actions</TableCell>
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
                                                <Box display="flex" justifyContent="space-between" alignItems="center">
                                                    <IconButton onClick={() => handleEditClick(employee)}>
                                                        <Edit />
                                                    </IconButton>
                                                    <IconButton onClick={() => handleDeleteClick(employee)}>
                                                        <Delete />
                                                    </IconButton>
                                                    <IconButton onClick={() => handlePasswordChangeClick(employee)}>
                                                        <VpnKey /> {/* Иконка ключа для смены пароля */}
                                                    </IconButton>

                                                    <IconButton onClick={() => handleExpandClick(employee._id)}>
                                                        {expanded[employee._id] ? <ExpandLess /> : <ExpandMore />}
                                                    </IconButton>
                                                </Box>
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

            {/* Модальное окно для смены пароля */}
            <Dialog open={openPasswordDialog} onClose={() => setOpenPasswordDialog(false)}>
                <DialogTitle>Change Password for {passwordEmployee?.firstName}</DialogTitle>
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


            {/* Модальное окно для редактирования */}
            <Dialog open={openEditDialog} onClose={() => setOpenEditDialog(false)}>
                <DialogTitle>Edit Employee</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        label="First Name"
                        type="text"
                        fullWidth
                        value={editingEmployee?.firstName || ''}
                        onChange={(e) => setEditingEmployee({ ...editingEmployee, firstName: e.target.value })}
                    />
                    <TextField
                        margin="dense"
                        label="Last Name"
                        type="text"
                        fullWidth
                        value={editingEmployee?.lastName || ''}
                        onChange={(e) => setEditingEmployee({ ...editingEmployee, lastName: e.target.value })}
                    />
                    <TextField
                        margin="dense"
                        label="Email"
                        type="email"
                        fullWidth
                        value={editingEmployee?.email || ''}
                        onChange={(e) => setEditingEmployee({ ...editingEmployee, email: e.target.value })}
                    />
                    <TextField
                        margin="dense"
                        label="Phone Number"
                        type="text"
                        fullWidth
                        value={editingEmployee?.phoneNumber || ''}
                        onChange={(e) => setEditingEmployee({ ...editingEmployee, phoneNumber: e.target.value })}
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

            {/* Модальное окно для подтверждения удаления */}
            <Dialog open={openDeleteDialog} onClose={() => setOpenDeleteDialog(false)}>
                <DialogTitle>Delete Employee</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete this employee?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenDeleteDialog(false)} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={handleDeleteEmployee} color="primary">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default observer(Employees);

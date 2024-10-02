import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Switch, Collapse, TextField, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { ExpandMore, ExpandLess, Edit, Delete, VpnKey } from '@mui/icons-material';
import useFetchUser from '../../stores/hooks/useFetchUser';
import { observer } from "mobx-react-lite";

const Investors = () => {
    const [investors, setInvestors] = useState([]); // Хранение данных инвесторов
    const [filteredInvestors, setFilteredInvestors] = useState([]); // Отфильтрованные инвесторы
    const [expanded, setExpanded] = useState({}); // Для управления раскрытием списка файлов инвесторов
    const [searchTerm, setSearchTerm] = useState(''); // Поисковая строка
    const { user } = useFetchUser(); // Получение информации о пользователе

    // Состояния для редактирования и удаления
    const [editingInvestor, setEditingInvestor] = useState(null); // Инвестор для редактирования
    const [openEditDialog, setOpenEditDialog] = useState(false); // Управление модальным окном редактирования
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false); // Управление модальным окном удаления
    const [deletingInvestor, setDeletingInvestor] = useState(null); // Инвестор для удаления

    const [openPasswordDialog, setOpenPasswordDialog] = useState(false);
    const [passwordInvestor, setPasswordInvestor] = useState(null); // Инвестор для смены пароля
    const [newPassword, setNewPassword] = useState(''); // Новый пароль
    const [confirmPassword, setConfirmPassword] = useState(''); // Подтверждение пароля


    // Функция для управления раскрытием файлов инвестора
    const handleExpandClick = (id) => {
        setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const handlePasswordChangeClick = (investor) => {
        setPasswordInvestor(investor);
        setOpenPasswordDialog(true);
    };


    // Загрузка списка инвесторов при рендере компонента
    useEffect(() => {
        if (user && user.role === 'admin') { // Проверяем, что пользователь администратор
            fetchInvestors(); // Загружаем данные инвесторов
        }
    }, [user]);

    const handleSavePasswordChange = async () => {
        if (newPassword !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const response = await fetch(`/api/admin/userHandler?userId=${passwordInvestor._id}`, {
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


    // Функция для получения данных инвесторов с сервера
    const fetchInvestors = async () => {
        try {
            const response = await fetch('/api/admin/getAllInvestorFiles'); // API-запрос для получения инвесторов
            if (!response.ok) {
                throw new Error('Failed to fetch investors');
            }
            const data = await response.json(); // Преобразуем ответ в JSON
            setInvestors(data); // Сохраняем данные инвесторов
            setFilteredInvestors(data); // Изначально показываем всех инвесторов
        } catch (error) {
            console.error('Error fetching investors:', error);
        }
    };

    // Функция для обработки переключения статуса одобрения файла (паспорт или адрес)
    const handleFileApprovalToggle = async (investorId, fileId, newStatus) => {
        try {
            const response = await fetch('/api/admin/updateDocumentStatus', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    investorId,
                    fileId,
                    approved: newStatus
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to update file status');
            }

            // Обновляем состояние инвесторов после успешного обновления статуса
            setInvestors(prevInvestors => prevInvestors.map(investor =>
                investor._id === investorId
                    ? {
                        ...investor,
                        files: investor.files.map(file =>
                            file._id === fileId
                                ? { ...file, approved: newStatus }
                                : file
                        )
                    }
                    : investor
            ));
        } catch (error) {
            console.error('Error updating file status:', error);
        }
    };

    // Функция для редактирования инвестора
    const handleEditClick = (investor) => {
        setEditingInvestor(investor);
        setOpenEditDialog(true);
    };

    const handleSaveEdit = async () => {
        try {
            const response = await fetch(`/api/admin/userHandler?userId=${editingInvestor._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editingInvestor),
            });

            if (!response.ok) {
                throw new Error('Failed to update investor');
            }

            const { updatedUser } = await response.json();
            debugger

            // Обновляем состояние инвесторов после успешного обновления
            setInvestors(prevInvestors => {
                const updatedInvestors = prevInvestors.map(investor =>
                    investor._id === updatedUser._id ? updatedUser : investor
                );
                setFilteredInvestors(updatedInvestors); // Обновляем отфильтрованное состояние
                return updatedInvestors;
            });
            setOpenEditDialog(false);
        } catch (error) {
            console.error('Error updating investor:', error);
        }
    };

    // Функция для удаления инвестора
    const handleDeleteClick = (investor) => {
        setDeletingInvestor(investor);
        setOpenDeleteDialog(true);
    };

    const handleDeleteInvestor = async () => {
        try {
            const response = await fetch(`/api/admin/userHandler?userId=${deletingInvestor._id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete investor');
            }

            // Удаляем инвестора из состояния
            setInvestors(prevInvestors => {
                const updatedInvestors = prevInvestors.filter(investor => investor._id !== deletingInvestor._id);
                setFilteredInvestors(updatedInvestors); // Обновляем отфильтрованное состояние
                return updatedInvestors;
            });
            setOpenDeleteDialog(false);
        } catch (error) {
            console.error('Error deleting investor:', error);
        }
    };

    // Функция для поиска инвесторов
    const handleSearch = () => {
        if (searchTerm.trim() === '') {
            setFilteredInvestors(investors); // Если строка поиска пуста, показать всех инвесторов
            return;
        }

        const lowerSearchTerm = searchTerm.toLowerCase();
        const filtered = investors.filter(investor =>
            (investor.firstName && investor.firstName.toLowerCase().includes(lowerSearchTerm)) || // Проверка на наличие firstName
            (investor.lastName && investor.lastName.toLowerCase().includes(lowerSearchTerm)) || // Проверка на наличие lastName
            (investor.email && investor.email.toLowerCase().includes(lowerSearchTerm)) || // Проверка на наличие email
            (investor.phoneNumber && investor.phoneNumber.includes(searchTerm)) // Проверка на наличие phoneNumber
        );
        setFilteredInvestors(filtered);
    };

    return (
        <Container sx={{ mt: '6rem', ml: '-2%', maxWidth: '800px', flexGrow: 1 }}>
            <Typography variant="h6" align="center" gutterBottom>
                Investors
            </Typography>

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
                <Button variant="outlined" color="secondary" onClick={() => setFilteredInvestors(investors)} sx={{ marginLeft: '1rem' }}>
                    Reset
                </Button>
            </Box>

                <Box width="107%" ml={-4}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>First Name</TableCell>
                                    <TableCell>Last Name</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Phone Number</TableCell>
                                    <TableCell>Email Verified</TableCell> {/* Устанавливаем минимальную ширину */}
                                    <TableCell>Phone Verified</TableCell> {/* Устанавливаем минимальную ширину */}
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {filteredInvestors?.map(investor => (
                                    <React.Fragment key={investor._id}>
                                        <TableRow>
                                            <TableCell>{investor.firstName}</TableCell>
                                            <TableCell>{investor.lastName}</TableCell>
                                            <TableCell>{investor.email}</TableCell>
                                            <TableCell>{investor.phoneNumber}</TableCell>
                                            <TableCell>{investor.emailVerified ? 'Verified' : 'Not Verified'}</TableCell>
                                            <TableCell>{investor.phoneVerified ? 'Verified' : 'Not Verified'}</TableCell>
                                            <TableCell>
                                                <Box display="flex" justifyContent="space-between" alignItems="center">
                                                    <IconButton onClick={() => handleEditClick(investor)}>
                                                        <Edit />
                                                    </IconButton>
                                                    <IconButton onClick={() => handleDeleteClick(investor)}>
                                                        <Delete />
                                                    </IconButton>

                                                    <IconButton onClick={() => handlePasswordChangeClick(investor)}>
                                                        <VpnKey /> {/* Иконка ключа для смены пароля */}
                                                    </IconButton>


                                                    <IconButton onClick={() => handleExpandClick(investor._id)}>
                                                        {expanded[investor._id] ? <ExpandLess /> : <ExpandMore />}
                                                    </IconButton>
                                                </Box>
                                            </TableCell>

                                        </TableRow>
                                        <TableRow>
                                            <TableCell colSpan={8}>
                                                <Collapse in={expanded[investor._id]} timeout="auto" unmountOnExit>
                                                    <Box margin={1}>
                                                        <Typography variant="h6" gutterBottom component="div">
                                                            Files
                                                        </Typography>
                                                        <Table size="small" aria-label="files">
                                                            <TableHead>
                                                                <TableRow>
                                                                    <TableCell>Filename</TableCell>
                                                                    <TableCell>Type</TableCell>
                                                                    <TableCell>Preview</TableCell>
                                                                    <TableCell>Approved</TableCell>
                                                                </TableRow>
                                                            </TableHead>
                                                            <TableBody>
                                                                {(investor.files && Array.isArray(investor.files)) ? (
                                                                    investor.files.map(file => (
                                                                        <TableRow key={file._id}>
                                                                            <TableCell>{file.filename}</TableCell>
                                                                            <TableCell>{file.metadata?.type}</TableCell>
                                                                            <TableCell>
                                                                                <a href={`/api/getFile?filename=${file.filename}`} target="_blank" rel="noopener noreferrer">
                                                                                    View
                                                                                </a>
                                                                            </TableCell>
                                                                            <TableCell>
                                                                                <Switch
                                                                                    checked={file.approved || false}
                                                                                    onChange={() => handleFileApprovalToggle(investor._id, file._id, !file.approved)}
                                                                                    name="approved"
                                                                                    inputProps={{ 'aria-label': 'file approval toggle' }}
                                                                                />
                                                                            </TableCell>
                                                                        </TableRow>
                                                                    ))
                                                                ) : (
                                                                    <TableRow>
                                                                        <TableCell colSpan={4}>No files available</TableCell>
                                                                    </TableRow>
                                                                )}
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

            {/* Модальное окно для смены пароля */}
            <Dialog open={openPasswordDialog} onClose={() => setOpenPasswordDialog(false)}>
                <DialogTitle>Change Password for {passwordInvestor?.firstName}</DialogTitle>
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
                <DialogTitle>Edit Investor</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        label="First Name"
                        type="text"
                        fullWidth
                        value={editingInvestor?.firstName || ''}
                        onChange={(e) => setEditingInvestor({ ...editingInvestor, firstName: e.target.value })}
                    />
                    <TextField
                        margin="dense"
                        label="Last Name"
                        type="text"
                        fullWidth
                        value={editingInvestor?.lastName || ''}
                        onChange={(e) => setEditingInvestor({ ...editingInvestor, lastName: e.target.value })}
                    />
                    <TextField
                        margin="dense"
                        label="Email"
                        type="email"
                        fullWidth
                        value={editingInvestor?.email || ''}
                        onChange={(e) => setEditingInvestor({ ...editingInvestor, email: e.target.value })}
                    />
                    <TextField
                        margin="dense"
                        label="Phone Number"
                        type="text"
                        fullWidth
                        value={editingInvestor?.phoneNumber || ''}
                        onChange={(e) => setEditingInvestor({ ...editingInvestor, phoneNumber: e.target.value })}
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
                <DialogTitle>Delete Investor</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete this investor?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenDeleteDialog(false)} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={handleDeleteInvestor} color="primary">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default observer(Investors);

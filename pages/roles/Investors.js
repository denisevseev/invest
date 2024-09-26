import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Switch, Collapse, TextField, Button } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import useFetchUser from '../../stores/hooks/useFetchUser';
import { observer } from "mobx-react-lite";

const Investors = () => {
    const [investors, setInvestors] = useState([]); // Хранение данных инвесторов
    const [filteredInvestors, setFilteredInvestors] = useState([]); // Отфильтрованные инвесторы
    const [expanded, setExpanded] = useState({}); // Для управления раскрытием списка файлов инвесторов
    const [searchTerm, setSearchTerm] = useState(''); // Поисковая строка
    const { user } = useFetchUser(); // Получение информации о пользователе

    // Функция для управления раскрытием файлов инвестора
    const handleExpandClick = (id) => {
        setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
    };

    // Загрузка списка инвесторов при рендере компонента
    useEffect(() => {
        if (user && user.role === 'admin') { // Проверяем, что пользователь администратор
            fetchInvestors(); // Загружаем данные инвесторов
        }
    }, [user]);

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

    // Функция для проверки, все ли файлы одобрены
    const areAllFilesApproved = (files) => {
        return files.every(file => file.approved); // Если все файлы одобрены, вернется true
    };

    // Функция для поиска инвесторов
    const handleSearch = () => {
        if (searchTerm.trim() === '') {
            setFilteredInvestors(investors); // Если строка поиска пуста, показать всех инвесторов
            return;
        }

        const lowerSearchTerm = searchTerm.toLowerCase();
        const filtered = investors.filter(investor =>
            investor.firstName.toLowerCase().includes(lowerSearchTerm) ||
            investor.lastName.toLowerCase().includes(lowerSearchTerm) ||
            investor.email.toLowerCase().includes(lowerSearchTerm) ||
            investor.phoneNumber.includes(searchTerm)
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

            <Box>
                <Box mt={4} ml={-3}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>First Name</TableCell>
                                    <TableCell>Last Name</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Phone Number</TableCell>
                                    <TableCell>Email Verified</TableCell>
                                    <TableCell>Phone Verified</TableCell>
                                    <TableCell>Files</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredInvestors?.map(investor => (
                                    <React.Fragment key={investor._id}>
                                        <TableRow>
                                            <TableCell>{investor._id}</TableCell>
                                            <TableCell>{investor.firstName}</TableCell>
                                            <TableCell>{investor.lastName}</TableCell>
                                            <TableCell>{investor.email}</TableCell>
                                            <TableCell>{investor.phoneNumber}</TableCell>
                                            <TableCell>{investor.emailVerified ? 'Verified' : 'Not Verified'}</TableCell>
                                            <TableCell>{investor.phoneVerified ? 'Verified' : 'Not Verified'}</TableCell>
                                            <TableCell>
                                                <IconButton onClick={() => handleExpandClick(investor._id)}>
                                                    {expanded[investor._id] ? <ExpandLess /> : <ExpandMore />}
                                                </IconButton>
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
                                                                {investor.files.map(file => (
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
                                                                ))}
                                                                {/* Если все файлы одобрены, показываем сообщение */}
                                                                {areAllFilesApproved(investor.files) && (
                                                                    <TableRow>
                                                                        <TableCell colSpan={4}>
                                                                            <Typography color="success" variant="body1">
                                                                                All files approved
                                                                            </Typography>
                                                                        </TableCell>
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
            </Box>
        </Container>
    );
};

export default observer(Investors);

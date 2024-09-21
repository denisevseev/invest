import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Switch, Collapse } from '@mui/material';
import { observer } from "mobx-react-lite";
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import useFetchUser from '../../stores/hooks/useFetchUser';

const Investors = () => {
    const [investors, setInvestors] = useState([]);
    const [expanded, setExpanded] = useState({});
    const { user } = useFetchUser();

    const handleExpandClick = (id) => {
        setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
    };

    useEffect(() => {
        if (user && user.role === 'admin') { // Проверяем, что пользователь с ролью admin
            fetchInvestors();
        }
    }, [user]);

    const fetchInvestors = async () => {
        try {
            const response = await fetch('/api/admin/getAllInvestorFiles');
            if (!response.ok) {
                throw new Error('Failed to fetch investors');
            }
            const data = await response.json();
            setInvestors(data);
        } catch (error) {
            console.error('Error fetching investors:', error);
        }
    };

    return (
        <Container sx={{ mt: '6rem', ml: '-2%', maxWidth: '800px', flexGrow: 1 }}>
            <Typography variant="h6" align="center" gutterBottom>
                Investors
            </Typography>
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
                                {investors?.map(investor => (
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
                                                                                onChange={() => handleFileApprovalToggle(investor._id, file.metadata?.type, !file.approved)}
                                                                                name="approved"
                                                                                inputProps={{ 'aria-label': 'file approval toggle' }}
                                                                            />
                                                                        </TableCell>
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

const handleFileApprovalToggle = async (investorId, type, newStatus) => {
    try {
        const response = await fetch('/api/admin/updateDocumentStatus', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                investorId,
                type,
                approved: newStatus
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to update file status');
        }

        // Handle response (maybe trigger a state update or refetch data)
    } catch (error) {
        console.error('Error updating file status:', error);
    }
};

export default observer(Investors);

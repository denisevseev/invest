// pages/roles/Investors.js
import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Collapse } from '@mui/material';
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
        if (user && user.role === 'admin') {
            fetchInvestors();
        }
    }, [user]);

    const fetchInvestors = async () => {
        const response = await fetch('/api/admin/getAllInvestorFiles');
        const data = await response.json();
        console.log('Fetched investors:', data);
        if (Array.isArray(data)) {
            setInvestors(data);
        } else {
            setInvestors([]);
        }
    };

    return (
        <Container sx={{ mt: '6rem', marginLeft: 'auto', marginRight: 'auto', maxWidth: '800px', flexGrow: 1 }}>
            <Typography variant="h6" align="center" gutterBottom>
                Investors
            </Typography>
            <Box>
                <Box mt={4}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>First Name</TableCell>
                                    <TableCell>Last Name</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Phone Number</TableCell>
                                    <TableCell>Files</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {investors?.map(investor => (
                                    <React.Fragment key={investor._id}>
                                        <TableRow>
                                            <TableCell>{investor.firstName || 'N/A'}</TableCell>
                                            <TableCell>{investor.lastName || 'N/A'}</TableCell>
                                            <TableCell>{investor.email || 'N/A'}</TableCell>
                                            <TableCell>{investor.phoneNumber || 'N/A'}</TableCell>
                                            <TableCell>
                                                <IconButton onClick={() => handleExpandClick(investor._id)}>
                                                    {expanded[investor._id] ? <ExpandLess /> : <ExpandMore />}
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell colSpan={5}>
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
                                                                </TableRow>
                                                            </TableHead>
                                                            <TableBody>
                                                                {investor.files?.map(file => (
                                                                    <TableRow key={file._id}>
                                                                        <TableCell>{file.filename}</TableCell>
                                                                        <TableCell>{file.metadata?.type || 'N/A'}</TableCell>
                                                                        <TableCell>
                                                                            <a href={`/api/getFile?filename=${file.filename}`} target="_blank" rel="noopener noreferrer">
                                                                                View
                                                                            </a>
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

export default observer(Investors);

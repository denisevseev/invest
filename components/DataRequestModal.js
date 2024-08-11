import React, { useState } from 'react';
import { Modal, Box, Typography, Button, Grid } from '@mui/material';

const DataRequestModal = ({ open, onClose, onProvideMoreData }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '90%',
                    maxWidth: 500,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 2,
                }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h6" align="center" gutterBottom>
                            Eingeschränkte Funktionalität
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1" align="center">
                            Um die volle Funktionalität zu gewährleisten, benötigen wir mehr Daten von Ihnen.
                            Bitte stellen Sie weitere Informationen bereit, um fortzufahren.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={onProvideMoreData}
                        >
                            Weitere Daten bereitstellen
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Button
                            variant="outlined"
                            color="secondary"
                            fullWidth
                            onClick={onClose}
                        >
                            Schließen
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    );
};

export default DataRequestModal;

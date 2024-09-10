import React, { useState } from 'react';
import { Alert, AlertTitle, Link, Typography, Container, useTheme, useMediaQuery, Grid, Modal, Box, Button } from '@mui/material';
import useFetchUser from './../stores/hooks/useFetchUser';
import VerificationModal from './../components/VerificationModal';

const Notification = ({ user }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const [modalOpen, setModalOpen] = useState(false);
    const [confirmationType, setConfirmationType] = useState('');
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

    const handleOpenModal = (type) => {
        if (type === 'payment') {
            setIsPaymentModalOpen(true);
        } else {
            setConfirmationType(type);
            setModalOpen(true);
        }
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setIsPaymentModalOpen(false);
    };

    return (
        <Container >
            <VerificationModal
                open={modalOpen}
                handleClose={handleCloseModal}
                confirmationText={confirmationType}
                user={user}
            />
            <Grid container spacing={2}>
                {!user.emailVerified && (
                    <Grid item xs={12} md={12}>
                        <Alert severity="warning" sx={{ fontSize: !isMobile ? '1rem' : '1rem', mb: 2 }}>
                            <AlertTitle sx={{ fontSize: 'inherit' }}>
                                Ihre E-Mail-Adresse ist noch nicht bestätigt!
                                Ihre E-Mail-Adresse <span style={{ fontWeight: 'bold' }}>{user?.email}</span> wurde noch nicht bestätigt.{' '}
                                <Link href="#" onClick={() => handleOpenModal('email')}>
                                    Bestätigen Sie diese bitte hier
                                </Link>
                                .
                            </AlertTitle>
                        </Alert>
                    </Grid>
                )}
                {!user.phoneVerified && (
                    <Grid item xs={12} md={12}>
                        <Alert severity="warning" sx={{ fontSize: !isMobile ? '1rem' : '1rem', mb: 2 }}>
                            <AlertTitle sx={{ fontSize: 'inherit' }}>
                                Ihre Telefonnummer ist noch nicht bestätigt!
                                Ihre Telefonnummer <span style={{ fontWeight: 'bold' }}>{user?.phoneNumber}</span> wurde noch nicht bestätigt.{' '}
                                <Link href="#" onClick={() => handleOpenModal('phone')}>
                                    Bestätigen Sie diese bitte hier
                                </Link>
                                .
                            </AlertTitle>
                        </Alert>
                    </Grid>
                )}

                <Grid item xs={12} md={12}>
                    <Alert severity="warning" sx={{ fontSize: !isMobile ? '1rem' : '1rem', mb: 2 }}>
                        <AlertTitle sx={{ fontSize: 'inherit' }}>
                            Schon bald werden Sie Investor! Dies ist ein wichtiger Schritt. Sie müssen den zuvor im Rechner angegebenen Betrag auf unser Konto überweisen.
                            Bitte <Link href="#" onClick={() => handleOpenModal('payment')}>Zahlungshinweise</Link> hier abrufen.
                        </AlertTitle>
                    </Alert>
                </Grid>

                {!user.profileApproved && (
                    <Grid item xs={12}>
                        <Alert severity="warning" sx={{ fontSize: !isMobile ? '1rem' : '1rem', mb: 2 }}>
                            <AlertTitle sx={{ fontSize: 'inherit' }}>
                                Ihr Profil ist noch nicht vollständig
                                Daher sind einige Funktionen eingeschränkt.{' '}
                                <Link href="/">Klicken Sie hier, um zu sehen, was genau fehlt</Link>
                                .
                            </AlertTitle>
                        </Alert>
                    </Grid>
                )}
            </Grid>

            {isPaymentModalOpen && (
                <Modal
                    open={isPaymentModalOpen}
                    onClose={handleCloseModal}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Box
                        sx={{
                            width: isMobile ? '90%' : '500px',
                            bgcolor: 'background.paper',
                            borderRadius: '12px',
                            p: 4,
                            boxShadow: 24,
                            textAlign: 'left',
                        }}
                    >
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
                            Sehr geehrter Investor,
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 3 }}>
                            Mit der Durchführung und Überwachung dieses Vertrages wurde als Treuhänder beauftragt:
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 3 }}>
                            <strong>Swiss Finance Group AG</strong><br />
                            Dr. Michael Rau<br />
                            Bahnhofplatz 10<br />
                            CH-9100 Herisau
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 3 }}>
                            Bitte transferieren Sie die in diesem Vertrag vereinbarte Summe und nutzen Sie die folgende Bankverbindung:
                        </Typography>
                        <Box
                            sx={{
                                p: 2,
                                borderRadius: '8px',
                                bgcolor: '#f5f5f5',
                                mb: 3,
                            }}
                        >
                            <Typography variant="body2" sx={{ mb: 1 }}>
                                <strong>Kontoinhaber:</strong> Swiss Finance Group AG
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 1 }}>
                                <strong>IBAN:</strong> BE75 9671 1118 0251
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 1 }}>
                                <strong>BIC:</strong> TRWIBEB1
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 1 }}>
                                <strong>Bankinstitut:</strong> Wise Europe SA
                            </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ mb: 3 }}>
                            Sobald wir Ihre Zahlung erhalten haben, wird Ihr Investorenkonto aktiviert, und Sie können mit dem Investieren beginnen.
                        </Typography>
                        <Box sx={{ textAlign: 'center' }}>
                            <Button onClick={handleCloseModal}  color="primary" sx={{ minWidth: '150px' }}>
                                Schließen
                            </Button>
                        </Box>
                    </Box>
                </Modal>
            )}

        </Container>
    );
};

const Notifications = () => {
    const { user, loading } = useFetchUser();

    if (!user) {
        return null;
    }

    return <Notification user={user} />;
};

export default Notifications;

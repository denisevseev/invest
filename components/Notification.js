import React, { useState } from 'react';
import { Alert, AlertTitle, Link, Typography, Container, useTheme, useMediaQuery, Grid, Modal, Box, Button } from '@mui/material';
import useFetchUser from './../stores/hooks/useFetchUser';
import VerificationModal from './../components/VerificationModal';

const Notification = ({ user }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
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
        <Container sx={{ width: '100%', mt: 4, ml: 15 }}>
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
                            width: isMobile ? '90%' : '400px',
                            bgcolor: 'background.paper',
                            borderRadius: '8px',
                            p: 4,
                            textAlign: 'center',
                        }}
                    >
                        <Typography variant="h6" gutterBottom>
                            Sehr geehrter Investor,
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 2 }}>
                            Um mit Ihrer Investition zu beginnen, überweisen Sie bitte den im Rechner angegebenen Betrag auf die folgenden Kontodaten.
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 2 }}>
                            Kontoinhaber: [Ihr Firmenname]<br/>
                            IBAN: [Ihre IBAN]<br/>
                            BIC: [Ihre BIC]<br/>
                            Bank: [Name der Bank]<br/>
                            Verwendungszweck: [Verwendungszweck für die Überweisung]
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 2 }}>
                            Sobald wir Ihre Zahlung erhalten haben, wird Ihr Investorenkonto aktiviert, und Sie können mit dem Investieren beginnen.
                        </Typography>
                        <Button onClick={handleCloseModal} variant="contained" color="primary">
                            Schließen
                        </Button>
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

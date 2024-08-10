// /src/components/Notifications.js
import React, { useState } from 'react';
import { Alert, AlertTitle, Link, Typography, Container, useTheme, useMediaQuery, Grid } from '@mui/material';
import useFetchUser from './../stores/hooks/useFetchUser';
import VerificationModal from './../components/VerificationModal';

const Notification = ({ user }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmationType, setConfirmationType] = useState('');

  const handleOpenModal = (type) => {
    setConfirmationType(type);
    setModalOpen(true);
  };

  const handleCloseModal = () => setModalOpen(false);

  return (
      <Container sx={{ width: '100%', mt: 4, ml:  15 }}>
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
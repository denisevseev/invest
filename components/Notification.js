// /src/components/Notifications.js
import React, { useState } from 'react';
import { Alert, AlertTitle, Link, Typography, Container, useTheme, useMediaQuery } from '@mui/material';
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
      <Container sx={{ width: isMobile ? '100%' : '120%', mt: 4, ml: 20}}>
        <VerificationModal
            open={modalOpen}
            handleClose={handleCloseModal}
            confirmationText={confirmationType}
            user={user}
        />
        {!user.emailVerified && (
            <Alert severity="warning" sx={{ fontSize:  !isMobile ?  '1rem' : '1rem', mb: 2 }}>
              <AlertTitle sx={{ fontSize: 'inherit' }}>Ihre E-Mail-Adresse ist noch nicht bestätigt!
                Ihre E-Mail-Adresse <span style={{ fontWeight: 'bold' }}>{user?.email}</span> wurde noch nicht bestätigt. <Link href="#" onClick={() => handleOpenModal('email')}>Bestätigen Sie diese bitte hier</Link>.
              </AlertTitle>
            </Alert>
        )}
        {!user.phoneVerified && (
            <Alert severity="warning" sx={{ fontSize:  !isMobile ?  '1rem' : '1rem', mb: 2 }}>
              <AlertTitle sx={{ fontSize: 'inherit' }}>Ihre Telefonnummer ist noch nicht bestätigt!
                Ihre Telefonnummer <span style={{ fontWeight: 'bold' }}>{user?.phoneNumber}</span> wurde noch nicht bestätigt. <Link href="#" onClick={() => handleOpenModal('phone')}>Bestätigen Sie diese bitte hier</Link>.
              </AlertTitle>
            </Alert>
        )}
        {!user.profileApproved && (
            <Alert severity="warning" sx={{ fontSize:  !isMobile ?  '1rem' : '1rem', mb: 2 }}>
              <AlertTitle sx={{ fontSize: 'inherit' }}>
                Ihr Profil ist noch nicht vollständig
                Daher sind einige Funktionen eingeschränkt. <Link href="/">Klicken Sie hier, um zu sehen, was genau fehlt</Link>.
              </AlertTitle>
            </Alert>
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

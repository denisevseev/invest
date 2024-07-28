// /src/components/Notifications.js
import React, { useState } from 'react';
import {Alert, AlertTitle, Link, Typography, Container, useTheme, useMediaQuery} from '@mui/material';
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
    <Container   sx={{ mt: 15, width: isMobile ?  '100%' : '60%'}}>
      <VerificationModal
        open={modalOpen}
        handleClose={handleCloseModal}
        confirmationText={confirmationType}
        user={user}
      />
      {!user.emailVerified && (
        <Alert severity="warning" sx={{ fontSize: '1rem', mb: 2 }}>
          <AlertTitle sx={{ fontSize: 'inherit' }}>Your email is not verified</AlertTitle>
          <Typography sx={{ fontSize: 'inherit' }}>
            Your email address <span style={{ fontWeight: 'bold' }}>{user?.email}</span> has not yet been verified. <Link href="#" onClick={() => handleOpenModal('email')}>Verify now</Link>
          </Typography>
        </Alert>
      )}
      {!user.phoneVerified && (
        <Alert severity="warning" sx={{ fontSize: '1rem', mb: 2 }}>
          <AlertTitle sx={{ fontSize: 'inherit' }}>Your phone is not verified</AlertTitle>
          <Typography sx={{ fontSize: 'inherit' }}>
            Your phone <span style={{ fontWeight: 'bold' }}>{user?.phoneNumber}</span> has not been verified yet. <Link href="#" onClick={() => handleOpenModal('phone')}>Verify now</Link>
          </Typography>
        </Alert>
      )}
      {!user.profileApproved && (
        <Alert severity="warning" sx={{ fontSize: '1rem', mb: 2 }}>
          <AlertTitle sx={{ fontSize: 'inherit' }}>Your profile has been pre-approved</AlertTitle>
          <Typography sx={{ fontSize: 'inherit' }}>
            Therefore, some functionalities may be limited. <Link href="/">Click here to see what exactly is missing</Link>
          </Typography>
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

// /src/components/Notifications.js
import React from 'react';
import { Alert, AlertTitle, Link, Typography, Container } from '@mui/material';
import useFetchUser from './../stores/hooks/useFetchUser';

const Notification = ({ user }) => {
  return (
    <Container sx={{ mt: 15 }}>
      {!user.emailVerified && (
        <Alert severity="warning" sx={{ fontSize: '1.5rem', mb: 2 }}>
          <AlertTitle sx={{ fontSize: 'inherit' }}>Your email is not verified</AlertTitle>
          <Typography sx={{ fontSize: 'inherit' }}>
            Your email address <span style={{ fontWeight: 'bold' }}>{user?.email}</span> has not yet been verified. <Link href="/">Verify now</Link>
          </Typography>
        </Alert>
      )}
      {!user.phoneVerified && (
        <Alert severity="warning" sx={{ fontSize: '1.5rem', mb: 2 }}>
          <AlertTitle sx={{ fontSize: 'inherit' }}>Your phone is not verified</AlertTitle>
          <Typography sx={{ fontSize: 'inherit' }}>
            Your phone <span style={{ fontWeight: 'bold' }}>{user?.phoneNumber}</span> has not been verified yet. <Link href="/">Verify now</Link>
          </Typography>
        </Alert>
      )}
      {!user.profileApproved && (
        <Alert severity="warning" sx={{ fontSize: '1.5rem', mb: 2 }}>
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

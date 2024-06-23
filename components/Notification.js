// /src/components/Notifications.js
import React from 'react';
import { Alert, AlertTitle, Link, Container } from '@mui/material';
import useFetchUser from './../stores/hooks/useFetchUser';

const Notification = ({ user }) => {
    debugger
  return (
    <Container sx={{mt: 15}}>
      {!user.emailVerified && (
        <Alert severity="warning">
          <AlertTitle>Your email is not verified</AlertTitle>
          Your email address <span style={{fontWeight: 'bold'}}>{user?.email}</span>  has not yet been verified. <Link href="/verify-email">Verify now</Link>
        </Alert>
      )}
      {!user.phoneVerified && (
        <Alert severity="warning">
          <AlertTitle>Your phone is not verified</AlertTitle>
          Your phone <span style={{fontWeight: 'bold'}}>{user?.phoneNumber} </span>  has not been verified yet. <Link href="/verify-phone">Verify now</Link>
        </Alert>
      )}
      {!user.profileApproved && (
        <Alert severity="warning">
          <AlertTitle>Your profile has been pre-approved</AlertTitle>
          Therefore, some functionalities may be limited. <Link href="/profile-status">Click here to see what exactly is missing</Link>
        </Alert>
      )}
    </Container>
  );
};

const Notifications = () => {
  const { user, loading } = useFetchUser();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return null;
  }

  return <Notification user={user} />;
};

export default Notifications;

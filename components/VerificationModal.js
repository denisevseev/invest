// /src/components/VerificationModal.js
import React, { useState, useEffect } from 'react';
import { Modal, Box, Typography, TextField, Button, CircularProgress, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/system';
import { useRouter } from 'next/router';

const StyledModal = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: theme.palette.background.paper,
  border: '2px solid #000',
  boxShadow: 24,
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  marginBottom: theme.spacing(2),
}));

const VerificationModal = ({ open, handleClose, confirmationText, user }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState(0);
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let timerInterval;
    if (timer > 0) {
      timerInterval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      clearInterval(timerInterval);
    }
    return () => clearInterval(timerInterval);
  }, [timer]);

  const handleSendCode = async () => {
    setIsLoading(true);
    setError('');
    try {
      const response = await fetch('/api/sendVerificationCode', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: user.email,
          phoneNumber: user.phoneNumber,
          type: confirmationText,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error);
      } else {
        setIsCodeSent(true);
        setTimer(60); // Установить таймер на 60 секунд
      }
    } catch (error) {
      setError('Failed to send verification code. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmitCode = async () => {
    try {
      const response = await fetch('/api/verifyCode', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: user.email,
          phoneNumber: user.phoneNumber,
          verificationCode: code,
          type: confirmationText,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error);
      } else {
        setIsVerified(true);
      }
    } catch (error) {
      setError('Failed to verify code. Please try again.');
    }
  };

  const handleModalClose = () => {
    setIsCodeSent(false);
    setTimer(0);
    setCode('');
    setError('');
    setIsVerified(false);
    handleClose();
    if (isVerified) {
      router.push('/');
    }
  };

  return (
    <Modal open={open} onClose={handleModalClose}>
      <StyledModal>
        <Header>
          <Typography variant="h6">
            Verify your {confirmationText}
          </Typography>
          <IconButton onClick={handleModalClose}>
            <CloseIcon />
          </IconButton>
        </Header>
        {isVerified ? (
          <Typography variant="h6" color="success.main">
            Verification successful!
          </Typography>
        ) : (
          <>
            {isCodeSent ? (
              <>
                <Typography variant="subtitle1" color="textSecondary">
                  Please enter the verification code sent to your {confirmationText}. Resend code in {timer} seconds.
                </Typography>
                <TextField
                  label="Verification Code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  fullWidth
                  margin="normal"
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmitCode}
                  sx={{ mt: 2 }}
                >
                  Submit Code
                </Button>
              </>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={handleSendCode}
                disabled={isLoading}
                sx={{ mt: 2 }}
              >
                {isLoading ? <CircularProgress size={24} /> : 'Send Verification Code'}
              </Button>
            )}
            {error && (
              <Typography color="error" variant="body2" sx={{ mt: 2 }}>
                {error}
              </Typography>
            )}
          </>
        )}
      </StyledModal>
    </Modal>
  );
};

export default VerificationModal;

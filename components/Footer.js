import { Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Container component="footer" maxWidth="xxl" sx={{
      backgroundColor: '#f0f0f0',
      padding: '0rem',
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      textAlign: 'center',
      zIndex: 9999
    }}>
      {/*<Typography variant="body2" align="center" color="textSecondary">*/}
      {/*  © All rights reserved. 2024 Victorum Capital Inc.*/}
      {/*</Typography>*/}
    </Container>
  );
};

export default Footer;

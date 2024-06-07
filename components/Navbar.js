// import React from 'react';
// import { AppBar, Toolbar, IconButton, Typography, Button, Box } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { signIn, signOut, useSession } from 'next-auth/react';
// import Link from 'next/link';
//
// const Navbar = ({ toggleSidebar }) => {
//     const { data: session } = useSession();
//
//     return (
//         <Box sx={{ display: 'flex', justifyContent: 'right', width: '100%' }}>
//             <AppBar position="static" sx={{ width: '85%' }}>
//                 <Toolbar>
//                     <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleSidebar}>
//                         <MenuIcon />
//                     </IconButton>
//                     <Typography variant="h6" style={{ flexGrow: 1 }}>
//                         Victorum Market1
//                     </Typography>
//                     {session ? (
//                         <Button color="inherit" onClick={() => signOut()}>Logout</Button>
//                     ) : (
//                         <>
//                             <Button color="inherit" onClick={() => signIn()}>Login</Button>
//                             <Link href="/signup" passHref>
//                                 <Button color="inherit">Sign Up</Button>
//                             </Link>
//                         </>
//                     )}
//                 </Toolbar>
//             </AppBar>
//         </Box>
//     );
// };
//
// export default Navbar;

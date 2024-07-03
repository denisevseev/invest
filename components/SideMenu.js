// // components/SideMenu.js
// import React, { useState } from 'react';
// import { List, ListItem, ListItemText, Drawer, Box, IconButton } from '@mui/material';
// import { useRouter } from 'next/router';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { useTheme } from '@mui/material/styles';

// const menuItems = {
//   admin: [
//     { text: 'Statistics', route: '/admin/statistics' },
//     { text: 'Managers', route: '/admin/managers' },
//     { text: 'Employees', route: '/admin/employees' },
//     { text: 'Investors', route: '/admin/investors' },
//   ],
//   manager: [
//     { text: 'Statistics', route: '/manager/statistics' },
//     { text: 'Employees', route: '/manager/employees' },
//     { text: 'Investors', route: '/manager/investors' },
//     { text: 'Link Generator', route: '/manager/link-generator' },
//   ],
//   employee: [
//     { text: 'Statistics', route: '/employee/statistics' },
//     { text: 'Investors', route: '/employee/investors' },
//     { text: 'Link Generator', route: '/employee/link-generator' },
//   ],
// };

// const SideMenu = ({ role, side }) => {
//   const router = useRouter();
//   const items = menuItems[role];
  
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const [open, setOpen] = useState(false);

//   const handleDrawerToggle = () => {
//     setOpen(!open);
//   };
 

//   return (
//     <>
//       {isMobile && (
//         <IconButton
//           color="inherit"
//           aria-label="open drawer"
//           edge="start"
//           onClick={handleDrawerToggle}
//           sx={{ position: 'fixed', top: '1rem', left: '1rem' }}
//         >
//           <MenuIcon />
//         </IconButton>
//       )}
//       <Drawer
//         variant={isMobile ? 'temporary' : 'permanent'}
//         open={isMobile ? open : true}
//         onClose={handleDrawerToggle}
//         ModalProps={{
//           keepMounted: true, // Better open performance on mobile.
//         }}
//         sx={{
//           width: 240,
//           flexShrink: 0,
//           '& .MuiDrawer-paper': {
//             width: 240,
//             boxSizing: 'border-box',
//             mt: isMobile ? '4rem' : '12rem',
//           },
//         }}
//       >
//         {isMobile && (
//           <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
//             <IconButton onClick={handleDrawerToggle}>
//               <CloseIcon />
//             </IconButton>
//           </Box>
//         )}
//         <Box sx={{ overflow: 'auto' }}>
//           <List>
//             {items?.map((item, index) => (
//               <ListItem button key={index} onClick={() => router.push(item.route)}>
//                 <ListItemText primary={item.text} />
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       </Drawer>
//     </>
//   );
// };

// export default SideMenu;

// components/SideMenu.js
import React from 'react';
import { List, ListItem, ListItemText, Drawer, Box } from '@mui/material';
import { useRouter } from 'next/router';

const menuItems = {
  admin: [
    { text: 'Statistics', route: '/admin/statistics' },
    { text: 'Managers', route: '/admin/managers' },
    { text: 'Employees', route: '/admin/employees' },
    { text: 'Investors', route: '/admin/investors' },
  ],
  manager: [
    { text: 'Statistics', route: '/manager/statistics' },
    { text: 'Employees', route: '/manager/employees' },
    { text: 'Investors', route: '/manager/investors' },
    { text: 'Link Generator', route: '/manager/link-generator' },
  ],
  employee: [
    { text: 'Statistics', route: '/employee/statistics' },
    { text: 'Investors', route: '/employee/investors' },
    { text: 'Link Generator', route: '/employee/link-generator' },
  ],
};

const SideMenu = ({ role }) => {
  const router = useRouter();
  const items = menuItems[role];

  return (
    <Box sx={{ width: 240 }}>
      <List>
        {items.map((item, index) => (
          <ListItem button key={index} onClick={() => router.push(item.route)}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SideMenu;

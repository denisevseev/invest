import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Drawer, Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import GroupIcon from '@mui/icons-material/Group';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LinkIcon from '@mui/icons-material/Link';

const menuItems = {
  admin: [
    { text: 'Statistics', route: '/admin/statistics', icon: <HomeIcon /> },
    { text: 'Managers', route: '/admin/managers', icon: <PeopleIcon /> },
    { text: 'Employees', route: '/admin/employees', icon: <GroupIcon /> },
    { text: 'Investors', route: '/admin/investors', icon: <AttachMoneyIcon /> },
  ],
  manager: [
    { text: 'Statistics', route: '/manager/statistics', icon: <HomeIcon /> },
    { text: 'Employees', route: '/manager/employees', icon: <GroupIcon /> },
    { text: 'Investors', route: '/manager/investors', icon: <AttachMoneyIcon /> },
    { text: 'Link Generator', route: '/manager/link-generator', icon: <LinkIcon /> },
  ],
  employee: [
    { text: 'Statistics', route: '/employee/statistics', icon: <HomeIcon /> },
    { text: 'Investors', route: '/employee/investors', icon: <AttachMoneyIcon /> },
    { text: 'Link Generator', route: '/employee/link-generator', icon: <LinkIcon /> },
  ],
};

const SideMenu = ({ role }) => {
  const router = useRouter();
  const items = menuItems[role];

  return (
    <Box sx={{ width: 240,  }}>
      <List>
        {items.map((item, index) => (
          <ListItem 
            button 
            key={index} 
            onClick={() => router.push(item.route)} 
            sx={{ 
              mb: 1, 
              '&.Mui-selected': {
                backgroundColor: 'primary.main',
                color: 'white',
                '& .MuiListItemIcon-root': {
                  color: 'white',
                },
              },
              '&:hover': {
                backgroundColor: 'primary.light',
                color: 'white',
                '& .MuiListItemIcon-root': {
                  color: 'white',
                },
              },
              transition: 'background-color 0.3s ease',
            }}
            selected={router.pathname === item.route}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={<Typography variant="body1">{item.text}</Typography>} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SideMenu;

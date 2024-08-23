import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import GroupIcon from '@mui/icons-material/Group';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LinkIcon from '@mui/icons-material/Link';
import { observer } from 'mobx-react-lite';
import store from "../stores/userStore"; // Подключение вашего MobX стора

const menuItems = {
  admin: [
    { text: 'Statistics', route: 'statistics', icon: <HomeIcon /> },
    { text: 'Managers', route: 'managers', icon: <PeopleIcon /> },
    { text: 'Employees', route: 'employees', icon: <GroupIcon /> },
    { text: 'Investors', route: 'investors', icon: <AttachMoneyIcon /> },
  ],
  manager: [
    { text: 'Statistics', route: 'statistics', icon: <HomeIcon /> },
    { text: 'Employees', route: 'employees', icon: <GroupIcon /> },
    { text: 'Investors', route: 'investors', icon: <AttachMoneyIcon /> },
    { text: 'Link Generator', route: 'link-generator', icon: <LinkIcon /> },
  ],
  employee: [
    { text: 'Statistics', route: 'statistics', icon: <HomeIcon /> },
    { text: 'Investors', route: 'investors', icon: <AttachMoneyIcon /> },
    { text: 'Link Generator', route: 'link-generator', icon: <LinkIcon /> },
  ],
};

const SideMenu = observer(({ role }) => {
  const items = menuItems[role];

  const handleRoute = (item) => {
    store.routeLink = item.route; // Сохраняем выбранный маршрут в глобальное состояние MobX
  };

  return (
      <Box sx={{ width: 240 }}>
        <List>
          {items?.map((item, index) => (
              <ListItem
                  button
                  key={index}
                  onClick={() => handleRoute(item)}
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
                  selected={store.routeLink === item.route}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={<Typography variant="body1">{item.text}</Typography>} />
              </ListItem>
          ))}
        </List>
      </Box>
  );
});

export default SideMenu;

import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Box, Typography } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import AttributionIcon from '@mui/icons-material/Attribution';
import GroupIcon from '@mui/icons-material/Group';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LinkIcon from '@mui/icons-material/Link';
import { observer } from 'mobx-react-lite';
import store from "../stores/userStore"; // Подключение вашего MobX стора

const menuItems = {
  admin: [
    { text: 'Statistics', route: 'statistics', icon: <StackedLineChartIcon /> },
    { text: 'Managers', route: 'managers', icon: <AttributionIcon /> },
    { text: 'Employees', route: 'employees', icon: <GroupIcon /> },
    { text: 'Investors', route: 'investors', icon: <AttachMoneyIcon /> },
    { text: 'brochure', route: 'brochure', icon: <AssignmentIcon /> },
  ],
  manager: [
    { text: 'Statistics', route: 'statistics', icon: <StackedLineChartIcon /> },
    { text: 'Employees', route: 'employees', icon: <GroupIcon /> },
    { text: 'Investors', route: 'investors', icon: <AttachMoneyIcon /> },
    { text: 'Link Generator', route: 'link-generator', icon: <LinkIcon /> },
    { text: 'brochure', route: 'brochure', icon: <AssignmentIcon /> },
  ],
  employee: [
    { text: 'Statistics', route: 'statistics', icon: <StackedLineChartIcon /> },
    { text: 'Investors', route: 'investors', icon: <AttachMoneyIcon /> },
    { text: 'Link Generator', route: 'link-generator', icon: <LinkIcon /> },
    { text: 'brochure', route: 'brochure', icon: <AssignmentIcon /> },
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

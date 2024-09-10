// pages/roles/AdminDashboard.js
import React, { useState, useEffect } from 'react';
import { Button, Container, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Collapse, IconButton } from '@mui/material';
import AddManagerModal from '../../components/AddManagerModal';
import { observer } from "mobx-react-lite";
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import store from "../../stores/userStore";

const AdminDashboard = () => {
  const [open, setOpen] = useState(false);
  const [managers, setManagers] = useState([]);
  const [expanded, setExpanded] = useState({});
  const [expandedEmployee, setExpandedEmployee] = useState({});

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    fetchManagers();
  }, []);

  const fetchManagers = async () => {
    const response = await fetch('/api/admin/getUsers');
    const data = await response.json();
    setManagers(data.filter(user => user.role === 'manager'));
  };

  const handleExpandClick = (id) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleEmployeeExpandClick = (id) => {
    setExpandedEmployee(prev => ({ ...prev, [id]: !prev[id] }));
  };

  if (store.isAdedRole) {
    store.isAdedRole = !store.isAdedRole;
    fetchManagers();
  }

  return (
      <Container sx={{ mt: '6rem', marginLeft: 'auto', marginRight: 'auto', maxWidth: '800px', flexGrow: 1 }}>
        <Typography variant="h6" align="center" gutterBottom>
          Managers
        </Typography>
        <Box>
          <Button  color="primary" onClick={handleOpen}>
            Add Manager
          </Button>
          <AddManagerModal open={open} handleClose={handleClose} />
          <Box mt={4}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone Number</TableCell>
                    <TableCell>Employees</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {managers.map(manager => (
                      <React.Fragment key={manager._id}>
                        <TableRow>
                          <TableCell>{manager.firstName}</TableCell>
                          <TableCell>{manager.lastName}</TableCell>
                          <TableCell>{manager.email}</TableCell>
                          <TableCell>{manager.phoneNumber}</TableCell>
                          <TableCell>
                            <IconButton onClick={() => handleExpandClick(manager._id)}>
                              {expanded[manager._id] ? <ExpandLess /> : <ExpandMore />}
                            </IconButton>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell colSpan={5}>
                            <Collapse in={expanded[manager._id]} timeout="auto" unmountOnExit>
                              <Box margin={1}>
                                <Typography variant="h6" gutterBottom component="div">
                                  Employees
                                </Typography>
                                <Table size="small" aria-label="employees">
                                  <TableHead>
                                    <TableRow>
                                      <TableCell>First Name</TableCell>
                                      <TableCell>Last Name</TableCell>
                                      <TableCell>Investors</TableCell>
                                    </TableRow>
                                  </TableHead>
                                  <TableBody>
                                    {manager.assignedEmployees.map(employee => (
                                        <React.Fragment key={employee._id}>
                                          <TableRow>
                                            <TableCell>{employee.firstName}</TableCell>
                                            <TableCell>{employee.lastName}</TableCell>
                                            <TableCell>
                                              <IconButton onClick={() => handleEmployeeExpandClick(employee._id)}>
                                                {expandedEmployee[employee._id] ? <ExpandLess /> : <ExpandMore />}
                                              </IconButton>
                                            </TableCell>
                                          </TableRow>
                                          <TableRow>
                                            <TableCell colSpan={3}>
                                              <Collapse in={expandedEmployee[employee._id]} timeout="auto" unmountOnExit>
                                                <Box margin={1}>
                                                  <Typography variant="h6" gutterBottom component="div">
                                                    Investors
                                                  </Typography>
                                                  <Table size="small" aria-label="investors">
                                                    <TableHead>
                                                      <TableRow>
                                                        <TableCell>First Name</TableCell>
                                                        <TableCell>Last Name</TableCell>
                                                        <TableCell>Email</TableCell>
                                                        <TableCell>Phone Number</TableCell>
                                                      </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                      {employee.assignedInvestors.map(investor => {
                                                        // alert(JSON.stringify(investor))
                                                        return(
                                                                <TableRow key={investor._id}>
                                                                  <TableCell>{investor.firstName}</TableCell>
                                                                  <TableCell>{investor.lastName}</TableCell>
                                                                  <TableCell>{investor.email}</TableCell>
                                                                  <TableCell>{investor.phoneNumber}</TableCell>
                                                                </TableRow>
                                                            )
                                                      })}
                                                    </TableBody>
                                                  </Table>
                                                </Box>
                                              </Collapse>
                                            </TableCell>
                                          </TableRow>
                                        </React.Fragment>
                                    ))}
                                  </TableBody>
                                </Table>
                              </Box>
                            </Collapse>
                          </TableCell>
                        </TableRow>
                      </React.Fragment>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Container>
  );
};

export default observer(AdminDashboard);

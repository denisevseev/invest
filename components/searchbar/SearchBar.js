import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchClick = () => {
        onSearch(searchTerm);
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" my={2}>
            <TextField
                label="Search by Phone, Email, First or Last Name"
                variant="outlined"
                value={searchTerm}
                onChange={handleInputChange}
                sx={{ marginRight: '1rem', width: '300px' }}
            />
            <Button variant="contained" color="primary" onClick={handleSearchClick}>
                Search
            </Button>
        </Box>
    );
};

export default SearchBar;

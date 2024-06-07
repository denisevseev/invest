import React, { useState } from 'react';
import { Box, Slider, TextField, Typography } from '@mui/material';
import { useSession } from 'next-auth/react';

const SliderWithInput = () => {
    const { data: session } = useSession();
    const [value, setValue] = useState(0);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleBlur = () => {
        if (value < 0) {
            setValue(0);
        } else if (value > 100000000) {
            setValue(100000000);
        }
    };

    if (!session) {
        return null;
    }

    return (
        <Box sx={{ width: { xs: '100%', md: '80%' }, mt: '20vh', mx: 'auto' }}>
            <Typography id="input-slider" gutterBottom>
                Amount ($)
            </Typography>
            <Slider
                value={typeof value === 'number' ? value : 0}
                onChange={handleSliderChange}
                aria-labelledby="input-slider"
                min={0}
                max={100000000}
                step={1000000} // Градация шагов ползунка (например, 1 млн)
            />
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                <TextField
                    value={value}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    inputProps={{
                        step: 1000000,
                        min: 0,
                        max: 100000000,
                        type: 'number',
                        'aria-labelledby': 'input-slider',
                    }}
                    sx={{ mr: 2 }}
                />
                <Typography>$</Typography>
            </Box>
        </Box>
    );
};

export default SliderWithInput;

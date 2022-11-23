import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const  CircularIndeterminate = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                position: 'relative',
                justifyContent: 'center',
                textAlign: 'center',
                marginTop: '25%',
        }}>
            <CircularProgress />
        </Box>
    );
}
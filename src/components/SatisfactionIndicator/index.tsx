import React from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';

const SatisfactionIndicator = ({ value }: { value: number }) => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h6" component="div" gutterBottom>
                Nível de Satisfação
            </Typography>
            <Box position="relative" display="inline-flex">
                <CircularProgress 
                    variant="determinate" 
                    value={value} 
                    size={100} 
                    thickness={5} 
                    color="primary" 
                />
                <Box
                    position="absolute"
                    top="50%"
                    left="50%"
                    sx={{
                        transform: 'translate(-50%, -50%)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="h4" component="div" color="textPrimary">
                        {`${Math.round(value)}%`}
                    </Typography>
                    <Typography variant="body2" component="div" color="textSecondary">
                        Satisfação
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default SatisfactionIndicator;

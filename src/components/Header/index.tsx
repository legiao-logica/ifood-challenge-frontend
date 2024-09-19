import React from 'react';
import { Box, Typography, Button, Select, MenuItem } from '@mui/material';

const Header = () => {
    return (
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
            <Typography variant="h4">Dashboard</Typography>
            <Box display="flex" alignItems="center">
                <Select defaultValue="Abril 2024">
                    <MenuItem value="Abril 2024">Abril 2024</MenuItem>
                    <MenuItem value="Março 2024">Março 2024</MenuItem>
                </Select>
                <Button variant="contained" color="primary" style={{ marginLeft: '16px' }}>
                    Exportar Relatório
                </Button>
            </Box>
        </Box>
    );
};

export default Header;

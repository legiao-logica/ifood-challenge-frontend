import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const ExpenseCard = () => {
    const totalExpenses = 1500; // Example value, you can replace this with dynamic data

    return (
        <Card>
            <CardContent>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Typography variant="h6" color="textSecondary" gutterBottom>
                        Total Despesas
                    </Typography>
                    <Typography variant="h4" color="textPrimary">
                        R$ {totalExpenses.toFixed(2)}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Último mês
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default ExpenseCard;

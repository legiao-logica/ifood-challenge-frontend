import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const TransactionCard = () => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h6">Transações</Typography>
                <Typography variant="h5">R$3,470.80</Typography>
                <Typography variant="body2">Última atualização: 01/04/2024</Typography>
            </CardContent>
        </Card>
    );
};

export default TransactionCard;
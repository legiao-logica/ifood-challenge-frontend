import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';

const transactions = [
    { id: 1, description: 'Pedido #9876', date: '20/04/2024', amount: 'R$870.00', status: 'Concluído' },
    { id: 2, description: 'Pedido #9877', date: '21/04/2024', amount: 'R$1230.00', status: 'Concluído' },
    // Add more transactions
];

const LatestTransactions = () => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h6">Últimas Transações</Typography>
                <List>
                    {transactions.map((transaction) => (
                        <ListItem key={transaction.id}>
                            <ListItemText primary={transaction.description} secondary={transaction.date} />
                            <Typography>{transaction.amount}</Typography>
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
};

export default LatestTransactions;
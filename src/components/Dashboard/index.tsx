import { Grid, Box } from '@mui/material';
import Sidebar from '../SideBar';
import Header from '../Header';
import TransactionCard from '../TransactionCard';
import ExpenseCard from '../Cards/ExpenseCard';
import TransferCard from '../Cards/TransferCard';
import MonthlyExpenseChart from '../Charts/MonthlyExpenseChart';
import CycleChart from '../Charts/CycleChart';
import MonthlyAnalysisChart from '../Charts/MonthlyAnalysisChart';
import SatisfactionIndicator from '../SatisfactionIndicator';
import LatestTransactions from '../LatestTransactions';

const Dashboard = () => {
    return (
        <Box display="flex">
            <Sidebar />
            <Box flex={1} p={3}>
                <Header />
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <TransactionCard />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <ExpenseCard />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TransferCard />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <MonthlyExpenseChart />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CycleChart />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <MonthlyAnalysisChart />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <SatisfactionIndicator value={75} />
                    </Grid>
                    <Grid item xs={12}>
                        <LatestTransactions />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Dashboard;

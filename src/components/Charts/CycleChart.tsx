import React, { useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { Chart, ArcElement, Tooltip, Legend, DoughnutController } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// Register necessary components for Doughnut chart
Chart.register(ArcElement, Tooltip, Legend, DoughnutController);

const CycleChart = () => {
    // Chart data
    const data = {
        labels: ['Enviado', 'Restante'],
        datasets: [
            {
                data: [32, 60 - 32], // For example, 32 minutes used out of 60
                backgroundColor: ['#FF0000', '#E0E0E0'], // Adjust the colors
                borderWidth: 0, // No border
            },
        ],
    };

    // Chart options
    const options = {
        responsive: true,
        cutout: '80%', // Makes it a doughnut chart with a large empty center
        plugins: {
            legend: {
                display: false, // Disable legend
            },
        },
    };

    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h6" component="div" gutterBottom>
                Ciclo do pedido
            </Typography>
            <Box position="relative" display="inline-flex">
                <Doughnut data={data} options={options} />
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
                        32 min
                    </Typography>
                    <Typography variant="body2" component="div" color="textSecondary">
                        Enviado
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default CycleChart;

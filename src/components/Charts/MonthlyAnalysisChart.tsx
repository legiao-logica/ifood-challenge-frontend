import React from 'react';
import { Line } from 'react-chartjs-2';
import { Box, Typography } from '@mui/material';
import 'chart.js/auto'; // Automatically register the Chart.js components

const MonthlyAnalysisChart = () => {
    // Sample data for the chart (you can replace this with real data)
    const data = {
        labels: ['Nov', 'Dez', 'Jan', 'Feb', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul'],
        datasets: [
            {
                label: 'Rendimentos',
                data: [2000, 2500, 1800, 2200, 2700, 3500, 2900, 3200, 3300],
                fill: false,
                borderColor: '#FF8A00', // Line color
                backgroundColor: '#FF8A00', // Point color
                tension: 0.4, // Curve between points
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Meses',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Valor (R$)',
                },
                beginAtZero: true,
            },
        },
        plugins: {
            legend: {
                display: false, // Hide legend
            },
        },
    };

    return (
        <Box>
            <Typography variant="h6" gutterBottom>
                Análise mensal de rendimentos
            </Typography>
            <Line data={data} options={options} />
        </Box>
    );
};

export default MonthlyAnalysisChart;

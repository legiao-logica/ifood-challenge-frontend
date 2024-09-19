import React, { useEffect, useRef } from 'react';
import { Chart, CategoryScale, LinearScale, LineController, LineElement, PointElement } from 'chart.js';

// Register necessary components
Chart.register(CategoryScale, LinearScale, LineController, LineElement, PointElement);

const MonthlyExpenseChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null); // Type the ref as HTMLCanvasElement or null
  const myChart = useRef<Chart<"line", number[], string> | null>(null); // Explicitly type as Chart or null

  useEffect(() => {
    if (chartRef.current) { // Only create chart if chartRef is not null
      const ctx = chartRef.current.getContext('2d');
      if (!ctx) return; // Handle case where context is null

      // Destroy any previous chart instance before creating a new one
      if (myChart.current) {
        myChart.current.destroy();
      }

      // Create a new chart
      myChart.current = new Chart(ctx, {
        type: 'line', // Example chart type
        data: {
          labels: ['January', 'February', 'March'],
          datasets: [
            {
              label: 'Expenses',
              data: [100, 200, 150],
              borderColor: 'rgba(75,192,192,1)',
              borderWidth: 2,
            },
          ],
        },
        options: {
          scales: {
            x: {
              type: 'category', // Ensure the 'category' scale is used properly
            },
            y: {
              type: 'linear',
            },
          },
        },
      });
    }

    return () => {
      // Cleanup the chart instance on component unmount
      if (myChart.current) {
        myChart.current.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef}></canvas>;
};

export default MonthlyExpenseChart;

// PerformanceChart Component

import React from 'react';
import { Line } from 'react-chartjs-2';
import colors from '../../../design-system/tokens/colors';
import spacing from '../../../design-system/tokens/spacing';

const PerformanceChart: React.FC = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Portfolio Performance',
        data: [1000000, 1050000, 1100000, 1150000, 1200000, 1250000],
        borderColor: colors.champagneGold,
        backgroundColor: 'rgba(198, 169, 114, 0.2)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
    },
  };

  return (
    <div
      style={{
        padding: spacing.large,
        backgroundColor: colors.ivoryWhite,
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2 style={{ marginBottom: spacing.medium }}>Performance Chart</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default PerformanceChart;
// AnalyticsDashboard Component

import React from 'react';
import colors from '../../../design-system/tokens/colors';
import spacing from '../../../design-system/tokens/spacing';

const AnalyticsDashboard: React.FC = () => {
  const analytics = [
    { label: 'Investor Geography', value: 'Global' },
    { label: 'Conversion Rates', value: '12%' },
    { label: 'Demand Heatmaps', value: 'High in UAE' },
  ];

  return (
    <div
      style={{
        padding: spacing.large,
        backgroundColor: colors.ivoryWhite,
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2 style={{ marginBottom: spacing.medium }}>Analytics Dashboard</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {analytics.map((item, index) => (
          <li
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: spacing.small,
              padding: spacing.small,
              borderBottom: `1px solid ${colors.midnightBlue}`,
            }}
          >
            <span>{item.label}</span>
            <span>{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnalyticsDashboard;
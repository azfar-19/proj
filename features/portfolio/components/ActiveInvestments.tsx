// ActiveInvestments Component

import React from 'react';
import colors from '../../../design-system/tokens/colors';
import typography from '../../../design-system/tokens/typography';
import spacing from '../../../design-system/tokens/spacing';

const ActiveInvestments: React.FC = () => {
  const investments = [
    { name: 'Luxury Villa in Dubai', value: '$500,000', yield: '8%' },
    { name: 'Downtown Apartment', value: '$250,000', yield: '6%' },
    { name: 'Beachfront Condo', value: '$500,000', yield: '7%' },
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
      <h2 style={{ fontFamily: typography.headlines, fontSize: '24px', marginBottom: spacing.medium }}>
        Active Investments
      </h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {investments.map((investment, index) => (
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
            <span style={{ fontFamily: typography.body }}>{investment.name}</span>
            <span style={{ fontFamily: typography.numbers }}>{investment.value}</span>
            <span style={{ fontFamily: typography.numbers }}>{investment.yield}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActiveInvestments;
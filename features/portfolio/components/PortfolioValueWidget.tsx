// PortfolioValueWidget Component

import React from 'react';
import colors from '../../../design-system/tokens/colors';
import typography from '../../../design-system/tokens/typography';
import spacing from '../../../design-system/tokens/spacing';

const PortfolioValueWidget: React.FC = () => {
  const portfolioValue = '$1,250,000'; // Placeholder value

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
        Portfolio Value
      </h2>
      <p style={{ fontFamily: typography.numbers, fontSize: '32px', color: colors.midnightBlue }}>
        {portfolioValue}
      </p>
    </div>
  );
};

export default PortfolioValueWidget;
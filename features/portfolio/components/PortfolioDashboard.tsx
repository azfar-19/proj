// PortfolioDashboard Component

import React from 'react';
import PortfolioValueWidget from './PortfolioValueWidget';
import PerformanceChart from './PerformanceChart';
import ActiveInvestments from './ActiveInvestments';
import spacing from '../../../design-system/tokens/spacing';

const PortfolioDashboard: React.FC = () => {
  return (
    <div style={{ padding: spacing.large }}>
      <h1 style={{ marginBottom: spacing.large }}>Portfolio Dashboard</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: spacing.large }}>
        <PortfolioValueWidget />
        <PerformanceChart />
      </div>
      <div style={{ marginTop: spacing.large }}>
        <ActiveInvestments />
      </div>
    </div>
  );
};

export default PortfolioDashboard;
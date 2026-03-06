// DeveloperPortal Component

import React from 'react';
import ProjectUpload from './ProjectUpload';
import OfferingCreation from './OfferingCreation';
import AnalyticsDashboard from './AnalyticsDashboard';
import spacing from '../../../design-system/tokens/spacing';

const DeveloperPortal: React.FC = () => {
  return (
    <div style={{ padding: spacing.large }}>
      <h1 style={{ marginBottom: spacing.large }}>Developer Portal</h1>
      <div style={{ marginBottom: spacing.large }}>
        <ProjectUpload />
      </div>
      <div style={{ marginBottom: spacing.large }}>
        <OfferingCreation />
      </div>
      <div>
        <AnalyticsDashboard />
      </div>
    </div>
  );
};

export default DeveloperPortal;
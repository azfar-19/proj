// AdminPanel Component

import React from 'react';
import UserManagement from './UserManagement';
import KYCApprovals from './KYCApprovals';
import ComplianceLogs from './ComplianceLogs';
import spacing from '../../../design-system/tokens/spacing';

const AdminPanel: React.FC = () => {
  return (
    <div style={{ padding: spacing.large }}>
      <h1 style={{ marginBottom: spacing.large }}>Admin Panel</h1>
      <div style={{ marginBottom: spacing.large }}>
        <UserManagement />
      </div>
      <div style={{ marginBottom: spacing.large }}>
        <KYCApprovals />
      </div>
      <div>
        <ComplianceLogs />
      </div>
    </div>
  );
};

export default AdminPanel;
// ComplianceLogs Component

import React from 'react';
import colors from '../../../design-system/tokens/colors';
import spacing from '../../../design-system/tokens/spacing';

const ComplianceLogs: React.FC = () => {
  const logs = [
    { id: 1, action: 'User Login', details: 'John Doe logged in', timestamp: '2026-03-06 10:00:00' },
    { id: 2, action: 'KYC Approved', details: 'Jane Smith KYC approved', timestamp: '2026-03-06 11:00:00' },
    { id: 3, action: 'Investment Created', details: 'Alice Johnson created an investment', timestamp: '2026-03-06 12:00:00' },
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
      <h2 style={{ marginBottom: spacing.medium }}>Compliance Logs</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {logs.map((log) => (
          <li
            key={log.id}
            style={{
              marginBottom: spacing.small,
              padding: spacing.small,
              borderBottom: `1px solid ${colors.midnightBlue}`,
            }}
          >
            <p style={{ margin: 0 }}><strong>Action:</strong> {log.action}</p>
            <p style={{ margin: 0 }}><strong>Details:</strong> {log.details}</p>
            <p style={{ margin: 0, color: 'gray' }}><strong>Timestamp:</strong> {log.timestamp}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ComplianceLogs;
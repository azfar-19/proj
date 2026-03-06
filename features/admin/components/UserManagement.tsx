// UserManagement Component

import React from 'react';
import colors from '../../../design-system/tokens/colors';
import spacing from '../../../design-system/tokens/spacing';

const UserManagement: React.FC = () => {
  const users = [
    { id: 1, name: 'John Doe', role: 'Investor' },
    { id: 2, name: 'Jane Smith', role: 'Developer' },
    { id: 3, name: 'Admin User', role: 'Admin' },
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
      <h2 style={{ marginBottom: spacing.medium }}>User Management</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {users.map((user) => (
          <li
            key={user.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: spacing.small,
              padding: spacing.small,
              borderBottom: `1px solid ${colors.midnightBlue}`,
            }}
          >
            <span>{user.name}</span>
            <span>{user.role}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
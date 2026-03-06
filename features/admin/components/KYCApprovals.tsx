// KYCApprovals Component

import React from 'react';
import colors from '../../../design-system/tokens/colors';
import spacing from '../../../design-system/tokens/spacing';

const KYCApprovals: React.FC = () => {
  const kycRequests = [
    { id: 1, name: 'John Doe', status: 'Pending' },
    { id: 2, name: 'Jane Smith', status: 'Approved' },
    { id: 3, name: 'Alice Johnson', status: 'Rejected' },
  ];

  const handleApprove = (id: number) => {
    console.log(`Approved KYC for user ID: ${id}`);
  };

  const handleReject = (id: number) => {
    console.log(`Rejected KYC for user ID: ${id}`);
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
      <h2 style={{ marginBottom: spacing.medium }}>KYC Approvals</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {kycRequests.map((request) => (
          <li
            key={request.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: spacing.small,
              padding: spacing.small,
              borderBottom: `1px solid ${colors.midnightBlue}`,
            }}
          >
            <span>{request.name}</span>
            <span>{request.status}</span>
            {request.status === 'Pending' && (
              <div>
                <button
                  onClick={() => handleApprove(request.id)}
                  style={{
                    marginRight: spacing.small,
                    padding: '4px 8px',
                    backgroundColor: colors.champagneGold,
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                  }}
                >
                  Approve
                </button>
                <button
                  onClick={() => handleReject(request.id)}
                  style={{
                    padding: '4px 8px',
                    backgroundColor: colors.midnightBlue,
                    color: colors.ivoryWhite,
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                  }}
                >
                  Reject
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KYCApprovals;
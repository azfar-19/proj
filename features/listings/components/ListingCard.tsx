// ListingCard Component

import React from 'react';
import colors from '../../../design-system/tokens/colors';
import typography from '../../../design-system/tokens/typography';
import spacing from '../../../design-system/tokens/spacing';

interface ListingCardProps {
  image: string;
  projectName: string;
  developer: string;
  location: string;
  minimumInvestment: string;
  targetYield: string;
  riskCategory: string;
  distributionFrequency: string;
  verified: boolean;
}

const ListingCard: React.FC<ListingCardProps> = ({
  image,
  projectName,
  developer,
  location,
  minimumInvestment,
  targetYield,
  riskCategory,
  distributionFrequency,
  verified,
}) => {
  return (
    <div
      style={{
        border: `1px solid ${colors.midnightBlue}`,
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.2)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
      }}
    >
      <img src={image} alt={projectName} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <div style={{ padding: spacing.medium }}>
        <h3 style={{ fontFamily: typography.headlines, fontSize: '18px', marginBottom: spacing.small }}>
          {projectName}
        </h3>
        <p style={{ fontFamily: typography.body, fontSize: '14px', color: colors.midnightBlue, marginBottom: spacing.small }}>
          {developer} - {location}
        </p>
        <p style={{ fontFamily: typography.body, fontSize: '14px', marginBottom: spacing.small }}>
          Minimum Investment: {minimumInvestment}
        </p>
        <p style={{ fontFamily: typography.body, fontSize: '14px', marginBottom: spacing.small }}>
          Target Yield: {targetYield}
        </p>
        <p style={{ fontFamily: typography.body, fontSize: '14px', marginBottom: spacing.small }}>
          Risk: {riskCategory}
        </p>
        <p style={{ fontFamily: typography.body, fontSize: '14px', marginBottom: spacing.small }}>
          Distribution: {distributionFrequency}
        </p>
        {verified && (
          <span
            style={{
              display: 'inline-block',
              padding: '4px 8px',
              backgroundColor: colors.champagneGold,
              color: colors.deepCharcoal,
              borderRadius: '4px',
              fontFamily: typography.body,
              fontSize: '12px',
            }}
          >
            Verified
          </span>
        )}
      </div>
    </div>
  );
};

export default ListingCard;
// PropertyDetailPage Component

import React from 'react';
import colors from '../../../design-system/tokens/colors';
import typography from '../../../design-system/tokens/typography';
import spacing from '../../../design-system/tokens/spacing';

interface PropertyDetailPageProps {
  heroImages: string[];
  projectName: string;
  developer: string;
  location: string;
  investmentMetrics: {
    minimumInvestment: string;
    projectedYield: string;
    irrEstimate: string;
    distributionFrequency: string;
    investmentTerm: string;
  };
  investmentThesis: string;
  propertyDescription: string;
  developerProfile: string;
  financialProjections: string;
  feeStructure: string;
  riskDisclosures: string;
  documents: { name: string; url: string }[];
}

const PropertyDetailPage: React.FC<PropertyDetailPageProps> = ({
  heroImages,
  projectName,
  developer,
  location,
  investmentMetrics,
  investmentThesis,
  propertyDescription,
  developerProfile,
  financialProjections,
  feeStructure,
  riskDisclosures,
  documents,
}) => {
  return (
    <div>
      {/* Hero Gallery */}
      <div style={{ display: 'flex', overflowX: 'scroll', gap: spacing.medium }}>
        {heroImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Hero ${index + 1}`}
            style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '8px' }}
          />
        ))}
      </div>

      {/* Project Info */}
      <div style={{ padding: spacing.large }}>
        <h1 style={{ fontFamily: typography.headlines, fontSize: '32px', marginBottom: spacing.medium }}>
          {projectName}
        </h1>
        <p style={{ fontFamily: typography.body, fontSize: '16px', color: colors.midnightBlue }}>
          {developer} - {location}
        </p>
      </div>

      {/* Investment Metrics */}
      <div style={{ padding: spacing.large, backgroundColor: colors.ivoryWhite, borderRadius: '8px' }}>
        <h2 style={{ fontFamily: typography.headlines, fontSize: '24px', marginBottom: spacing.medium }}>
          Investment Metrics
        </h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {Object.entries(investmentMetrics).map(([key, value]) => (
            <li key={key} style={{ marginBottom: spacing.small }}>
              <strong>{key.replace(/([A-Z])/g, ' $1')}: </strong>
              {value}
            </li>
          ))}
        </ul>
      </div>

      {/* Sections */}
      <div style={{ padding: spacing.large }}>
        <h2 style={{ fontFamily: typography.headlines, fontSize: '24px', marginBottom: spacing.medium }}>
          Investment Thesis
        </h2>
        <p style={{ fontFamily: typography.body, fontSize: '16px', marginBottom: spacing.large }}>
          {investmentThesis}
        </p>

        <h2 style={{ fontFamily: typography.headlines, fontSize: '24px', marginBottom: spacing.medium }}>
          Property Description
        </h2>
        <p style={{ fontFamily: typography.body, fontSize: '16px', marginBottom: spacing.large }}>
          {propertyDescription}
        </p>

        <h2 style={{ fontFamily: typography.headlines, fontSize: '24px', marginBottom: spacing.medium }}>
          Developer Profile
        </h2>
        <p style={{ fontFamily: typography.body, fontSize: '16px', marginBottom: spacing.large }}>
          {developerProfile}
        </p>

        <h2 style={{ fontFamily: typography.headlines, fontSize: '24px', marginBottom: spacing.medium }}>
          Financial Projections
        </h2>
        <p style={{ fontFamily: typography.body, fontSize: '16px', marginBottom: spacing.large }}>
          {financialProjections}
        </p>

        <h2 style={{ fontFamily: typography.headlines, fontSize: '24px', marginBottom: spacing.medium }}>
          Fee Structure
        </h2>
        <p style={{ fontFamily: typography.body, fontSize: '16px', marginBottom: spacing.large }}>
          {feeStructure}
        </p>

        <h2 style={{ fontFamily: typography.headlines, fontSize: '24px', marginBottom: spacing.medium }}>
          Risk Disclosures
        </h2>
        <p style={{ fontFamily: typography.body, fontSize: '16px', marginBottom: spacing.large }}>
          {riskDisclosures}
        </p>

        <h2 style={{ fontFamily: typography.headlines, fontSize: '24px', marginBottom: spacing.medium }}>
          Documents
        </h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {documents.map((doc, index) => (
            <li key={index} style={{ marginBottom: spacing.small }}>
              <a href={doc.url} target="_blank" rel="noopener noreferrer" style={{ color: colors.midnightBlue }}>
                {doc.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PropertyDetailPage;
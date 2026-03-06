// OfferingCreation Component

import React, { useState } from 'react';
import colors from '../../../design-system/tokens/colors';
import spacing from '../../../design-system/tokens/spacing';

const OfferingCreation: React.FC = () => {
  const [offeringName, setOfferingName] = useState('');
  const [totalUnits, setTotalUnits] = useState(0);
  const [pricePerUnit, setPricePerUnit] = useState(0);

  const handleCreate = () => {
    // Placeholder for creation logic
    console.log('Creating offering:', { offeringName, totalUnits, pricePerUnit });
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
      <h2 style={{ marginBottom: spacing.medium }}>Create New Offering</h2>
      <input
        type="text"
        placeholder="Offering Name"
        value={offeringName}
        onChange={(e) => setOfferingName(e.target.value)}
        style={{ marginBottom: spacing.small, padding: '8px', width: '100%' }}
      />
      <input
        type="number"
        placeholder="Total Units"
        value={totalUnits}
        onChange={(e) => setTotalUnits(Number(e.target.value))}
        style={{ marginBottom: spacing.small, padding: '8px', width: '100%' }}
      />
      <input
        type="number"
        placeholder="Price Per Unit"
        value={pricePerUnit}
        onChange={(e) => setPricePerUnit(Number(e.target.value))}
        style={{ marginBottom: spacing.small, padding: '8px', width: '100%' }}
      />
      <button
        onClick={handleCreate}
        style={{ padding: '8px 16px', backgroundColor: colors.champagneGold, border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        Create Offering
      </button>
    </div>
  );
};

export default OfferingCreation;
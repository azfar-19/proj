// FilterBar Component

import React from 'react';

interface FilterBarProps {
  filters: {
    location: string[];
    developer: string[];
    minInvestment: number;
    targetYield: number;
    riskTier: string[];
    propertyType: string[];
    distributionFrequency: string[];
  };
  onFilterChange: (filterName: string, value: any) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ filters, onFilterChange }) => {
  return (
    <div style={{ display: 'flex', gap: '16px', padding: '16px', borderBottom: '1px solid #ddd' }}>
      {Object.keys(filters).map((filterName) => (
        <div key={filterName}>
          <label style={{ display: 'block', marginBottom: '8px' }}>{filterName}</label>
          <select
            onChange={(e) => onFilterChange(filterName, e.target.value)}
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          >
            {filters[filterName as keyof typeof filters].map((option: any) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default FilterBar;
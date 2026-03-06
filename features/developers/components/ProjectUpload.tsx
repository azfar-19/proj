// ProjectUpload Component

import React, { useState } from 'react';
import colors from '../../../design-system/tokens/colors';
import spacing from '../../../design-system/tokens/spacing';

const ProjectUpload: React.FC = () => {
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');

  const handleUpload = () => {
    // Placeholder for upload logic
    console.log('Uploading project:', { projectName, description });
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
      <h2 style={{ marginBottom: spacing.medium }}>Upload New Project</h2>
      <input
        type="text"
        placeholder="Project Name"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        style={{ marginBottom: spacing.small, padding: '8px', width: '100%' }}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ marginBottom: spacing.small, padding: '8px', width: '100%' }}
      />
      <button
        onClick={handleUpload}
        style={{ padding: '8px 16px', backgroundColor: colors.champagneGold, border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        Upload
      </button>
    </div>
  );
};

export default ProjectUpload;
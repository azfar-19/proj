// Button Component

import React from 'react';
import colors from '../tokens/colors';
import typography from '../tokens/typography';

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary', disabled = false }) => {
  const baseStyles = {
    padding: '12px 24px',
    borderRadius: '8px',
    fontFamily: typography.body,
    fontWeight: 600,
    cursor: 'pointer',
    border: 'none',
  };

  const variants = {
    primary: {
      backgroundColor: colors.champagneGold,
      color: colors.deepCharcoal,
    },
    secondary: {
      backgroundColor: colors.midnightBlue,
      color: colors.ivoryWhite,
    },
  };

  const styles = {
    ...baseStyles,
    ...(variant === 'primary' ? variants.primary : variants.secondary),
    opacity: disabled ? 0.6 : 1,
  };

  return (
    <button style={styles} onClick={onClick} disabled={disabled} aria-disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
import React from 'react';
import { STATUS_COLORS } from '../../../constants';

const Badge = ({ status, customText, size = 'md' }) => {
  const colors = STATUS_COLORS[status] || { bg: '#f3f4f6', text: '#374151' };
  
  const sizeStyles = {
    sm: { padding: '0.125rem 0.375rem', fontSize: '0.7rem' },
    md: { padding: '0.25rem 0.5rem', fontSize: '0.75rem' },
    lg: { padding: '0.375rem 0.75rem', fontSize: '0.875rem' },
  };

  return (
    <span
      style={{
        backgroundColor: colors.bg,
        color: colors.text,
        ...sizeStyles[size],
        fontWeight: 600,
        borderRadius: '9999px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        whiteSpace: 'nowrap',
      }}
    >
      {customText || status}
    </span>
  );
};

export default Badge;

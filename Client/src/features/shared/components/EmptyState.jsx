import React from 'react';
import Button from './Button';

const EmptyState = ({ icon: Icon, title, description, actionText, onAction }) => {
  return (
    <div style={{
      backgroundColor: '#fff',
      borderRadius: '0.75rem',
      padding: '4rem 2rem',
      textAlign: 'center',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      {Icon && <Icon size={48} style={{ color: '#9ca3af', margin: '0 auto 1rem' }} />}
      <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#374151', margin: '0 0 0.5rem 0' }}>
        {title}
      </h3>
      <p style={{ color: '#6b7280', maxWidth: '400px', margin: '0 auto 1.5rem' }}>
        {description}
      </p>
      {actionText && onAction && (
        <Button variant="primary" onClick={onAction}>
          {actionText}
        </Button>
      )}
    </div>
  );
};

export default EmptyState;

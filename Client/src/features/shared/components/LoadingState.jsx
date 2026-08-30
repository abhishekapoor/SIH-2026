import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingState = ({ message = 'Loading...', fullScreen = false }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '3rem',
      minHeight: fullScreen ? '100vh' : '200px',
      color: '#6b7280'
    }}>
      <Loader2 size={40} className="animate-spin" style={{ marginBottom: '1rem', color: '#10b981' }} />
      <p style={{ margin: 0, fontWeight: 500 }}>{message}</p>
    </div>
  );
};

export default LoadingState;

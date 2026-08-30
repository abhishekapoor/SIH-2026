import { AlertCircle, CheckCircle2, Info, AlertTriangle, X } from 'lucide-react';

const Alert = ({ type = 'error', message, children, onClose }) => {
  const content = message || children;
  if (!content) return null;

  const iconMap = {
    error: <AlertCircle size={20} className="alert-icon" />,
    success: <CheckCircle2 size={20} className="alert-icon" />,
    info: <Info size={20} className="alert-icon" />,
    warning: <AlertTriangle size={20} className="alert-icon" />,
  };

  return (
    <div className={`alert-banner alert-${type}`} role="alert">
      <div className="alert-content-wrapper">
        {iconMap[type]}
        <div className="alert-text">{content}</div>
      </div>
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="alert-close-btn"
          aria-label="Dismiss alert"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
};

export default Alert;

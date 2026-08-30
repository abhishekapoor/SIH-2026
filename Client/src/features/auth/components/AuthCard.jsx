import { Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';

const AuthCard = ({ title, subtitle, children, footer }) => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        {/* Brand Header */}
        <div className="auth-header">
          <Link to="/" className="brand-logo-link">
            <div className="brand-badge">
              <Sprout size={24} className="brand-icon" />
            </div>
            <div className="brand-text">
              <span className="brand-title">KrishiConnect</span>
              <span className="brand-sub">SIH Agri-Marketplace</span>
            </div>
          </Link>
          <h1 className="auth-main-heading">{title}</h1>
          {subtitle && <p className="auth-sub-heading">{subtitle}</p>}
        </div>

        {/* Card Body */}
        <div className="auth-body">{children}</div>

        {/* Card Footer */}
        {footer && <div className="auth-footer">{footer}</div>}
      </div>
    </div>
  );
};

export default AuthCard;

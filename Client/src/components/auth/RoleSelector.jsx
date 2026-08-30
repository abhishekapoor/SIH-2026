import { Tractor, Building2, CheckCircle } from 'lucide-react';

const RoleSelector = ({ selectedRole, onSelectRole, disabled = false }) => {
  return (
    <div className="role-selector-container">
      <label className="form-label mb-2">
        Choose Your Account Type <span className="required-star">*</span>
      </label>
      <div className="role-grid">
        {/* Farmer Card */}
        <button
          type="button"
          onClick={() => onSelectRole('farmer')}
          disabled={disabled}
          className={`role-card ${selectedRole === 'farmer' ? 'is-selected' : ''}`}
        >
          <div className="role-icon-box role-icon-farmer">
            <Tractor size={26} />
          </div>
          <div className="role-info">
            <div className="role-title-row">
              <span className="role-name">Farmer (किसान)</span>
              {selectedRole === 'farmer' && <CheckCircle size={18} className="role-check-icon" />}
            </div>
            <p className="role-desc">Sell produce directly, list farmland details & crop yields</p>
          </div>
        </button>

        {/* Buyer Card */}
        <button
          type="button"
          onClick={() => onSelectRole('buyer')}
          disabled={disabled}
          className={`role-card ${selectedRole === 'buyer' ? 'is-selected' : ''}`}
        >
          <div className="role-icon-box role-icon-buyer">
            <Building2 size={26} />
          </div>
          <div className="role-info">
            <div className="role-title-row">
              <span className="role-name">Buyer / Trader (व्यापारी)</span>
              {selectedRole === 'buyer' && <CheckCircle size={18} className="role-check-icon" />}
            </div>
            <p className="role-desc">Source farm produce in bulk, specify quality & GST compliance</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default RoleSelector;

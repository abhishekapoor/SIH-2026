import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const InputField = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  error,
  helperText,
  icon: Icon,
  disabled = false,
  min,
  max,
  step,
  autoComplete,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className="form-group">
      {label && (
        <label htmlFor={name} className="form-label">
          {label} {required && <span className="required-star">*</span>}
        </label>
      )}

      <div className={`input-wrapper ${error ? 'has-error' : ''} ${disabled ? 'is-disabled' : ''}`}>
        {Icon && (
          <span className="input-icon-left">
            <Icon size={18} />
          </span>
        )}

        <input
          id={name}
          name={name}
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          min={min}
          max={max}
          step={step}
          autoComplete={autoComplete}
          className={`form-input ${Icon ? 'with-left-icon' : ''} ${isPassword ? 'with-right-icon' : ''}`}
        />

        {isPassword && (
          <button
            type="button"
            className="input-icon-right password-toggle"
            onClick={() => setShowPassword(!showPassword)}
            tabIndex={-1}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>

      {error && <p className="form-error-msg">{error}</p>}
      {!error && helperText && <p className="form-helper-text">{helperText}</p>}
    </div>
  );
};

export default InputField;

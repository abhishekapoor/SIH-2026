import { Loader2 } from 'lucide-react';

const Button = ({
  children,
  type = 'button',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  disabled = false,
  onClick,
  icon: Icon,
  iconPosition = 'left',
  className = '',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`btn btn-${variant} btn-${size} ${fullWidth ? 'btn-full' : ''} ${loading ? 'is-loading' : ''} ${className}`}
    >
      {loading ? (
        <>
          <Loader2 className="btn-spinner animate-spin" size={18} />
          <span>Processing...</span>
        </>
      ) : (
        <>
          {Icon && iconPosition === 'left' && <Icon size={18} className="btn-icon-left" />}
          <span>{children}</span>
          {Icon && iconPosition === 'right' && <Icon size={18} className="btn-icon-right" />}
        </>
      )}
    </button>
  );
};

export default Button;

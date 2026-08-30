import { User, Mail, Phone, Lock, ArrowRight } from 'lucide-react';
import InputField from '../common/InputField';
import RoleSelector from './RoleSelector';
import Button from '../common/Button';

const BasicDetailsForm = ({
  formData,
  errors,
  onChange,
  onRoleChange,
  onNext,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form-step">
      {/* Role Selection */}
      <RoleSelector
        selectedRole={formData.role}
        onSelectRole={onRoleChange}
      />

      {/* Full Name */}
      <InputField
        label="Full Name"
        name="name"
        type="text"
        placeholder="e.g. Ramesh Patel or Green Exports Pvt Ltd"
        value={formData.name}
        onChange={onChange}
        required
        error={errors.name}
        icon={User}
        autoComplete="name"
      />

      {/* Email Address */}
      <InputField
        label="Email Address"
        name="email"
        type="email"
        placeholder="name@example.com"
        value={formData.email}
        onChange={onChange}
        required
        error={errors.email}
        icon={Mail}
        autoComplete="email"
      />

      {/* Phone Number */}
      <InputField
        label="Mobile Number"
        name="phone"
        type="tel"
        placeholder="10-digit mobile number"
        value={formData.phone}
        onChange={onChange}
        required
        error={errors.phone}
        helperText="Used for order updates and OTP verification (+91)"
        icon={Phone}
        autoComplete="tel"
      />

      {/* Password & Confirm Password Row */}
      <div className="form-grid-2">
        <InputField
          label="Password"
          name="password"
          type="password"
          placeholder="Min 6 characters"
          value={formData.password}
          onChange={onChange}
          required
          error={errors.password}
          icon={Lock}
          autoComplete="new-password"
        />

        <InputField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          placeholder="Re-enter password"
          value={formData.confirmPassword}
          onChange={onChange}
          required
          error={errors.confirmPassword}
          icon={Lock}
          autoComplete="new-password"
        />
      </div>

      <div className="form-action-row">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          icon={ArrowRight}
          iconPosition="right"
        >
          Continue to {formData.role === 'farmer' ? 'Farm Details' : 'Business Details'}
        </Button>
      </div>
    </form>
  );
};

export default BasicDetailsForm;

import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, LogIn, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import AuthCard from '../components/auth/AuthCard';
import InputField from '../components/common/InputField';
import Button from '../components/common/Button';
import Alert from '../components/common/Alert';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '', rememberMe: false });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your registered email address';
    }
    if (!formData.password) {
      newErrors.password = 'Please enter your password';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');

    if (!validate()) return;

    setLoading(true);
    try {
      await login({
        email: formData.email,
        password: formData.password,
      });
      navigate('/');
    } catch (err) {
      setApiError(
        err.response?.data?.message || 'Invalid credentials. Please check your email and password.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard
      title="Welcome Back"
      subtitle="Sign in to your KrishiConnect marketplace account"
      footer={
        <p>
          Don't have an account?{' '}
          <Link to="/signup">
            Register as a Farmer or Buyer <ArrowRight size={14} style={{ display: 'inline' }} />
          </Link>
        </p>
      }
    >
      {apiError && <Alert type="error" message={apiError} onClose={() => setApiError('')} />}

      <form onSubmit={handleSubmit} className="auth-form-step">
        {/* Email */}
        <InputField
          label="Email Address"
          name="email"
          type="email"
          placeholder="name@example.com"
          value={formData.email}
          onChange={handleChange}
          required
          error={errors.email}
          icon={Mail}
          autoComplete="email"
        />

        {/* Password */}
        <InputField
          label="Password"
          name="password"
          type="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
          error={errors.password}
          icon={Lock}
          autoComplete="current-password"
        />

        {/* Action Row */}
        <div className="form-action-row" style={{ marginTop: '0.5rem' }}>
          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            loading={loading}
            icon={LogIn}
          >
            Sign In to Account
          </Button>
        </div>
      </form>
    </AuthCard>
  );
};

export default Login;

import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AuthCard from '../components/auth/AuthCard';
import StepIndicator from '../components/auth/StepIndicator';
import BasicDetailsForm from '../components/auth/BasicDetailsForm';
import FarmerSignupForm from '../components/auth/FarmerSignupForm';
import BuyerSignupForm from '../components/auth/BuyerSignupForm';
import Alert from '../components/common/Alert';

const initialAccountData = {
  name: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  role: 'farmer',
};

const initialFarmerData = {
  location: '',
  landArea: '',
  landUnit: 'Acre',
  ownershipType: 'Owned',
  irrigationType: 'Drip Irrigation',
  crops: [],
  farmLocation: '',
};

const initialBuyerData = {
  businessName: '',
  businessType: 'Wholesaler',
  address: '',
  gstin: '',
  cropsInterested: [],
  typicalQuantity: '',
  qualityRequirements: 'Grade A (Export Quality)',
  verificationDocuments: '',
};

const Signup = () => {
  const [step, setStep] = useState(1);
  const [accountData, setAccountData] = useState(initialAccountData);
  const [farmerData, setFarmerData] = useState(initialFarmerData);
  const [buyerData, setBuyerData] = useState(initialBuyerData);
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');
  const [loading, setLoading] = useState(false);

  const { signup } = useAuth();
  const navigate = useNavigate();

  // Handle Step 1 changes
  const handleAccountChange = (e) => {
    const { name, value } = e.target;
    setAccountData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleRoleChange = (role) => {
    setAccountData((prev) => ({ ...prev, role }));
  };

  // Handle Step 2 Farmer changes
  const handleFarmerChange = (e) => {
    const { name, value } = e.target;
    setFarmerData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleFarmerCropsChange = (crops) => {
    setFarmerData((prev) => ({ ...prev, crops }));
    if (errors.crops) {
      setErrors((prev) => ({ ...prev, crops: '' }));
    }
  };

  // Handle Step 2 Buyer changes
  const handleBuyerChange = (e) => {
    const { name, value } = e.target;
    setBuyerData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleBuyerCropsChange = (cropsInterested) => {
    setBuyerData((prev) => ({ ...prev, cropsInterested }));
    if (errors.cropsInterested) {
      setErrors((prev) => ({ ...prev, cropsInterested: '' }));
    }
  };

  // Validate Step 1
  const validateStep1 = () => {
    const newErrors = {};

    if (!accountData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!accountData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(accountData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!accountData.phone.trim()) {
      newErrors.phone = 'Mobile number is required';
    } else if (!/^[6-9]\d{9}$/.test(accountData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit Indian mobile number';
    }

    if (!accountData.password) {
      newErrors.password = 'Password is required';
    } else if (accountData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (accountData.password !== accountData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Validate Step 2 Farmer
  const validateFarmerStep = () => {
    const newErrors = {};

    if (!farmerData.location.trim()) {
      newErrors.location = 'Location (District & State) is required';
    }

    if (!farmerData.landArea || Number(farmerData.landArea) <= 0) {
      newErrors.landArea = 'Please enter a valid land area (> 0)';
    }

    if (!farmerData.landUnit) {
      newErrors.landUnit = 'Please select land unit';
    }

    if (!farmerData.ownershipType) {
      newErrors.ownershipType = 'Please select ownership type';
    }

    if (!farmerData.irrigationType) {
      newErrors.irrigationType = 'Please select irrigation source';
    }

    if (!farmerData.crops || farmerData.crops.length === 0) {
      newErrors.crops = 'Please select or add at least one crop';
    }

    if (!farmerData.farmLocation.trim()) {
      newErrors.farmLocation = 'Farm village/address is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Validate Step 2 Buyer
  const validateBuyerStep = () => {
    const newErrors = {};

    if (!buyerData.businessName.trim()) {
      newErrors.businessName = 'Business name is required';
    }

    if (!buyerData.businessType) {
      newErrors.businessType = 'Please select business type';
    }

    if (!buyerData.gstin.trim()) {
      newErrors.gstin = 'GSTIN is required';
    } else if (!/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(buyerData.gstin.toUpperCase())) {
      newErrors.gstin = 'Please enter a valid 15-character GSTIN (e.g. 07AAAAA0000A1Z5)';
    }

    if (!buyerData.typicalQuantity.trim()) {
      newErrors.typicalQuantity = 'Typical purchase quantity is required';
    }

    if (!buyerData.address.trim()) {
      newErrors.address = 'Registered business address is required';
    }

    if (!buyerData.cropsInterested || buyerData.cropsInterested.length === 0) {
      newErrors.cropsInterested = 'Please select at least one crop of interest';
    }

    if (!buyerData.qualityRequirements) {
      newErrors.qualityRequirements = 'Please specify quality requirements';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    setApiError('');
    if (validateStep1()) {
      setStep(2);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    setApiError('');
    setStep(1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');

    const isValid = accountData.role === 'farmer' ? validateFarmerStep() : validateBuyerStep();
    if (!isValid) return;

    setLoading(true);

    const payload = {
      name: accountData.name,
      email: accountData.email,
      phone: accountData.phone,
      password: accountData.password,
      role: accountData.role,
      ...(accountData.role === 'farmer'
        ? {
            farmerProfile: {
              location: farmerData.location,
              landArea: Number(farmerData.landArea),
              landUnit: farmerData.landUnit,
              ownershipType: farmerData.ownershipType,
              crops: farmerData.crops,
              irrigationType: farmerData.irrigationType,
              farmLocation: farmerData.farmLocation,
              verificationStatus: 'Pending',
            },
          }
        : {
            buyerProfile: {
              businessName: buyerData.businessName,
              businessType: buyerData.businessType,
              address: buyerData.address,
              gstin: buyerData.gstin.toUpperCase(),
              cropsInterested: buyerData.cropsInterested,
              typicalQuantity: buyerData.typicalQuantity,
              qualityRequirements: buyerData.qualityRequirements,
              verificationDocuments: buyerData.verificationDocuments,
              verificationStatus: 'Pending',
              rating: 0,
              completedOrders: 0,
            },
          }),
    };

    try {
      await signup(payload);
      navigate('/');
    } catch (err) {
      setApiError(err.response?.data?.message || 'Registration failed. Please check your details and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard
      title={step === 1 ? 'Create Your Account' : accountData.role === 'farmer' ? 'Farmer Profile Setup' : 'Buyer Profile Setup'}
      subtitle={
        step === 1
          ? 'Join the Smart India Hackathon unified agri-trading network'
          : `Step 2 of 2: Configure your ${accountData.role === 'farmer' ? 'farm & crop specifications' : 'business procurement requirements'}`
      }
      footer={
        <p>
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      }
    >
      <StepIndicator currentStep={step} role={accountData.role} />

      {apiError && <Alert type="error" message={apiError} onClose={() => setApiError('')} />}

      {step === 1 ? (
        <BasicDetailsForm
          formData={accountData}
          errors={errors}
          onChange={handleAccountChange}
          onRoleChange={handleRoleChange}
          onNext={handleNext}
        />
      ) : accountData.role === 'farmer' ? (
        <FarmerSignupForm
          farmerData={farmerData}
          errors={errors}
          onChange={handleFarmerChange}
          onCropsChange={handleFarmerCropsChange}
          onBack={handleBack}
          onSubmit={handleSubmit}
          loading={loading}
        />
      ) : (
        <BuyerSignupForm
          buyerData={buyerData}
          errors={errors}
          onChange={handleBuyerChange}
          onCropsChange={handleBuyerCropsChange}
          onBack={handleBack}
          onSubmit={handleSubmit}
          loading={loading}
        />
      )}
    </AuthCard>
  );
};

export default Signup;

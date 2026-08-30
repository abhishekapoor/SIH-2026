import { MapPin, Trees, Droplets, ShieldCheck, ArrowLeft, CheckCircle } from 'lucide-react';
import InputField from '../common/InputField';
import SelectField from '../common/SelectField';
import MultiSelectTags from '../common/MultiSelectTags';
import Button from '../common/Button';

const landUnitOptions = [
  { value: 'Acre', label: 'Acre (एकड़)' },
  { value: 'Hectare', label: 'Hectare (हेक्टेयर)' },
  { value: 'Bigha', label: 'Bigha (बीघा)' },
  { value: 'Guntha', label: 'Guntha (गुंठा)' },
  { value: 'Cent', label: 'Cent (सेंट)' },
];

const ownershipOptions = [
  { value: 'Owned', label: 'Self-Owned (स्वयं की भूमि)' },
  { value: 'Leased', label: 'Leased / Contract (पट्टे पर)' },
  { value: 'Sharecropped', label: 'Sharecropped (बटाईदार)' },
  { value: 'Rented', label: 'Rented (किराए पर)' },
];

const irrigationOptions = [
  { value: 'Drip Irrigation', label: 'Drip Irrigation (टपक सिंचाई)' },
  { value: 'Sprinkler', label: 'Sprinkler System (फव्वारा)' },
  { value: 'Tube Well / Borewell', label: 'Tube Well / Borewell (नलकूप)' },
  { value: 'Canal', label: 'Canal / River (नहर)' },
  { value: 'Rainfed', label: 'Rainfed (वर्षा आधारित)' },
  { value: 'Pond / Open Well', label: 'Farm Pond / Open Well (कुआं/तालाब)' },
];

const farmerCropSuggestions = [
  'Wheat (गेहूं)',
  'Rice / Paddy (धान)',
  'Mustard (सरसों)',
  'Cotton (कपास)',
  'Sugarcane (गन्ना)',
  'Maize (मक्का)',
  'Soybean (सोयाबीन)',
  'Chana / Chickpea (चना)',
  'Potato (आलू)',
  'Tomato (टमाटर)',
  'Onion (प्याज)',
  'Turmeric / Spices (हल्दी/मसाले)',
];

const FarmerSignupForm = ({
  farmerData,
  errors,
  onChange,
  onCropsChange,
  onBack,
  onSubmit,
  loading = false,
}) => {
  return (
    <form onSubmit={onSubmit} className="auth-form-step">
      <div className="section-badge-header">
        <Trees size={18} className="text-emerald" />
        <span>Farmer Profile Details (किसान प्रोफ़ाइल)</span>
      </div>

      {/* Location (State / District) */}
      <InputField
        label="General Location / District & State"
        name="location"
        type="text"
        placeholder="e.g. Karnal, Haryana or Pune, Maharashtra"
        value={farmerData.location}
        onChange={onChange}
        required
        error={errors.location}
        icon={MapPin}
      />

      {/* Land Area & Unit Row */}
      <div className="form-grid-2">
        <InputField
          label="Total Land Area"
          name="landArea"
          type="number"
          step="0.1"
          min="0.1"
          placeholder="e.g. 5.5"
          value={farmerData.landArea}
          onChange={onChange}
          required
          error={errors.landArea}
        />

        <SelectField
          label="Land Unit"
          name="landUnit"
          value={farmerData.landUnit}
          onChange={onChange}
          options={landUnitOptions}
          placeholder="Select land unit"
          required
          error={errors.landUnit}
        />
      </div>

      {/* Land Ownership & Irrigation Type Row */}
      <div className="form-grid-2">
        <SelectField
          label="Land Ownership Type"
          name="ownershipType"
          value={farmerData.ownershipType}
          onChange={onChange}
          options={ownershipOptions}
          placeholder="Select ownership"
          required
          error={errors.ownershipType}
        />

        <SelectField
          label="Primary Irrigation Source"
          name="irrigationType"
          value={farmerData.irrigationType}
          onChange={onChange}
          options={irrigationOptions}
          placeholder="Select irrigation method"
          required
          error={errors.irrigationType}
          icon={Droplets}
        />
      </div>

      {/* Crops Cultivated (MultiSelectTags) */}
      <MultiSelectTags
        label="Crops Cultivated (फसलें)"
        selectedTags={farmerData.crops || []}
        onChange={onCropsChange}
        suggestions={farmerCropSuggestions}
        placeholder="Type crop name & press Enter..."
        required
        error={errors.crops}
        helperText="Select or type all crops you grow across seasons."
      />

      {/* Farm Location (Village / Land details) */}
      <InputField
        label="Farm Address / Village & PIN Code"
        name="farmLocation"
        type="text"
        placeholder="e.g. Village Rampur, Near Sub-Center, PIN: 132001"
        value={farmerData.farmLocation}
        onChange={onChange}
        required
        error={errors.farmLocation}
        icon={MapPin}
        helperText="Helps local buyers and logistics partners locate your farm."
      />

      {/* Verification Notice */}
      <div className="verification-info-card">
        <ShieldCheck size={20} className="text-emerald flex-shrink-0" />
        <div className="verification-text">
          <strong>Instant Farmer Verification</strong>
          <p>Your profile will be set to Pending status and verified by the local Krishi center for direct mandi trading.</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="form-action-split">
        <Button
          type="button"
          variant="outline"
          onClick={onBack}
          disabled={loading}
          icon={ArrowLeft}
        >
          Back
        </Button>

        <Button
          type="submit"
          variant="primary"
          loading={loading}
          icon={CheckCircle}
          className="flex-1"
        >
          Complete Farmer Registration
        </Button>
      </div>
    </form>
  );
};

export default FarmerSignupForm;

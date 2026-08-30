import { Building, FileText, MapPin, ShieldCheck, ArrowLeft, CheckCircle, PackageCheck } from 'lucide-react';
import InputField from '../common/InputField';
import SelectField from '../common/SelectField';
import MultiSelectTags from '../common/MultiSelectTags';
import Button from '../common/Button';

const businessTypeOptions = [
  { value: 'Wholesaler', label: 'Wholesaler / Bulk Trader (थोक व्यापारी)' },
  { value: 'Food Processor / Mill', label: 'Food Processor / Flour/Rice Mill (प्रसंस्करण इकाई)' },
  { value: 'Exporter', label: 'Agri Exporter (कृषि निर्यातक)' },
  { value: 'Retailer / Supermarket', label: 'Retail Chain / Supermarket (खुदरा विक्रेता)' },
  { value: 'FMCG Corporate', label: 'FMCG / Corporate Aggregator' },
  { value: 'Mandi Commission Agent', label: 'Mandi Commission Agent (आढ़ती)' },
  { value: 'Individual Buyer', label: 'Individual Bulk Buyer' },
];

const qualityOptions = [
  { value: 'Grade A (Export Quality)', label: 'Grade A (Export Quality / प्रीमियम गुणवत्ता)' },
  { value: 'Organic Certified', label: '100% Certified Organic (जैविक प्रमाणित)' },
  { value: 'Fair Average Quality (FAQ)', label: 'Fair Average Quality (FAQ / मानक गुणवत्ता)' },
  { value: 'Sortex Cleaned / Machine Cleaned', label: 'Sortex / Machine Cleaned' },
  { value: 'Industrial Grade / Processing Grade', label: 'Industrial / Processing Grade' },
];

const buyerCropSuggestions = [
  'Wheat (गेहूं)',
  'Basmati Rice (बासमती चावल)',
  'Non-Basmati Rice (चावल)',
  'Cotton Bales (कपास)',
  'Mustard Seed (सरसों)',
  'Soybean (सोयाबीन)',
  'Tur / Arhar Dal (अरहर दाल)',
  'Chana Dal (चना)',
  'Maize (मक्का)',
  'Spices & Condiments (मसाले)',
  'Potatoes (आलू)',
  'Onions (प्याज)',
];

const BuyerSignupForm = ({
  buyerData,
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
        <Building size={18} className="text-amber" />
        <span>Buyer / Business Profile Details (व्यापारिक प्रोफ़ाइल)</span>
      </div>

      {/* Business Name & Business Type Row */}
      <div className="form-grid-2">
        <InputField
          label="Business / Enterprise Name"
          name="businessName"
          type="text"
          placeholder="e.g. Kisan Agro Trading Co."
          value={buyerData.businessName}
          onChange={onChange}
          required
          error={errors.businessName}
          icon={Building}
        />

        <SelectField
          label="Business Type"
          name="businessType"
          value={buyerData.businessType}
          onChange={onChange}
          options={businessTypeOptions}
          placeholder="Select business type"
          required
          error={errors.businessType}
        />
      </div>

      {/* GSTIN & Typical Quantity Row */}
      <div className="form-grid-2">
        <InputField
          label="GSTIN (GST Number)"
          name="gstin"
          type="text"
          placeholder="e.g. 07AAAAA0000A1Z5"
          value={buyerData.gstin}
          onChange={onChange}
          required
          error={errors.gstin}
          helperText="15-character GST identification number"
          icon={FileText}
        />

        <InputField
          label="Typical Purchase Quantity"
          name="typicalQuantity"
          type="text"
          placeholder="e.g. 100 Quintals / 50 Tons / Month"
          value={buyerData.typicalQuantity}
          onChange={onChange}
          required
          error={errors.typicalQuantity}
          icon={PackageCheck}
        />
      </div>

      {/* Registered Address */}
      <InputField
        label="Registered Business Address & PIN"
        name="address"
        type="text"
        placeholder="e.g. Shop 42, APMC Grain Market, Sector 18, Vashi, PIN: 400703"
        value={buyerData.address}
        onChange={onChange}
        required
        error={errors.address}
        icon={MapPin}
      />

      {/* Quality Requirements */}
      <SelectField
        label="Preferred Quality Standards"
        name="qualityRequirements"
        value={buyerData.qualityRequirements}
        onChange={onChange}
        options={qualityOptions}
        placeholder="Select required quality level"
        required
        error={errors.qualityRequirements}
      />

      {/* Crops Interested (MultiSelectTags) */}
      <MultiSelectTags
        label="Crops Interested in Procuring (खरीदने हेतु फसलें)"
        selectedTags={buyerData.cropsInterested || []}
        onChange={onCropsChange}
        suggestions={buyerCropSuggestions}
        placeholder="Type crop name & press Enter..."
        required
        error={errors.cropsInterested}
        helperText="Select all agricultural commodities you wish to buy."
      />

      {/* Verification Documents Reference */}
      <InputField
        label="Verification Document ID / License No."
        name="verificationDocuments"
        type="text"
        placeholder="e.g. APMC License No. / FSSAI No. / Trade Reg No."
        value={buyerData.verificationDocuments}
        onChange={onChange}
        error={errors.verificationDocuments}
        helperText="Optional: Speeds up buyer verification & credit eligibility"
        icon={ShieldCheck}
      />

      {/* Verification Notice */}
      <div className="verification-info-card buyer-notice">
        <ShieldCheck size={20} className="text-amber flex-shrink-0" />
        <div className="verification-text">
          <strong>Verified Buyer Badge</strong>
          <p>Upon registration, your GSTIN will be checked to unlock direct farmer contracts and invoice generation.</p>
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
          Complete Buyer Registration
        </Button>
      </div>
    </form>
  );
};

export default BuyerSignupForm;

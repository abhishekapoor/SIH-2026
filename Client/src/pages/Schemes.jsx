import React, { useState } from 'react';
import { 
  FileCheck2, 
  Sparkles, 
  CheckCircle2, 
  ExternalLink, 
  Building, 
  HelpCircle, 
  LandPlot,
  Award,
  ArrowRight
} from 'lucide-react';

const SCHEMES_DATABASE = [
  {
    id: 'pm-kisan',
    name: 'PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)',
    ministry: 'Ministry of Agriculture & Farmers Welfare',
    benefit: '₹6,000 / year direct bank transfer (in 3 installments)',
    minLand: 0.1,
    maxLand: 50,
    states: ['All States', 'Maharashtra', 'Uttar Pradesh', 'Haryana', 'Punjab', 'Madhya Pradesh', 'Gujarat', 'Tamil Nadu'],
    crops: ['All Crops', 'Vegetables', 'Grains', 'Fruits', 'Pulses'],
    description: 'Income support scheme for all landholding farmer families across India having cultivable land.',
    tag: 'Income Support'
  },
  {
    id: 'pmfby',
    name: 'PMFBY (Pradhan Mantri Fasal Bima Yojana)',
    ministry: 'Govt of India Crop Insurance',
    benefit: 'Comprehensive insurance cover against crop loss (Only 1.5% - 2% premium)',
    minLand: 0.5,
    maxLand: 100,
    states: ['All States', 'Maharashtra', 'Uttar Pradesh', 'Madhya Pradesh', 'Haryana', 'Gujarat', 'Tamil Nadu'],
    crops: ['Vegetables', 'Grains', 'Pulses', 'Fruits'],
    description: 'Financial support to farmers suffering crop loss/damage arising out of unforeseen natural calamities & pests.',
    tag: 'Crop Insurance'
  },
  {
    id: 'aif',
    name: 'Agriculture Infrastructure Fund (AIF)',
    ministry: 'Central Sector Financing Scheme',
    benefit: 'Interest subvention of 3% per annum up to ₹2 Crore for post-harvest infra',
    minLand: 1.0,
    maxLand: 500,
    states: ['All States', 'Maharashtra', 'Uttar Pradesh', 'Haryana', 'Punjab', 'Gujarat'],
    crops: ['All Crops', 'Vegetables', 'Fruits', 'Grains'],
    description: 'Medium to long term debt financing facility for investment in viable projects for post-harvest management infrastructure.',
    tag: 'Infrastructure Subsidy'
  },
  {
    id: 'midh',
    name: 'Mission for Integrated Development of Horticulture (MIDH)',
    ministry: 'National Horticulture Board',
    benefit: '40% - 50% capital subsidy on packhouses, cold rooms, and sorting units',
    minLand: 0.5,
    maxLand: 50,
    states: ['All States', 'Maharashtra', 'Himachal Pradesh', 'Tamil Nadu', 'Uttar Pradesh'],
    crops: ['Fruits', 'Vegetables', 'Spices'],
    description: 'Holistic growth of the horticulture sector covering fruits, vegetables, root & tuber crops, and spices.',
    tag: 'Horticulture Capital Subsidy'
  },
  {
    id: 'pm-kusum',
    name: 'PM-KUSUM (Solar Agricultural Pumps)',
    ministry: 'Ministry of New & Renewable Energy',
    benefit: '60% subsidy on standalone solar agriculture pumps + grid connection',
    minLand: 1.0,
    maxLand: 100,
    states: ['All States', 'Maharashtra', 'Gujarat', 'Rajasthan', 'Madhya Pradesh', 'Haryana'],
    crops: ['All Crops'],
    description: 'De-dieselization of farm sector providing energy security and water supply to farmers with solar powered pump sets.',
    tag: 'Renewable Energy'
  }
];

const Schemes = () => {
  const [landArea, setLandArea] = useState(3.5);
  const [selectedState, setSelectedState] = useState('Maharashtra');
  const [selectedCrop, setSelectedCrop] = useState('Vegetables');
  const [farmerCategory, setFarmerCategory] = useState('Small / Marginal Farmer');

  const eligibleSchemes = SCHEMES_DATABASE.filter(scheme => {
    const stateMatch = scheme.states.includes('All States') || scheme.states.includes(selectedState);
    const cropMatch = scheme.crops.includes('All Crops') || scheme.crops.includes(selectedCrop);
    const landMatch = landArea >= scheme.minLand;
    return stateMatch && cropMatch && landMatch;
  });

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2.5rem 1.5rem' }}>
      {/* Header */}
      <div style={{ marginBottom: '2.5rem' }}>
        <span className="section-tag">Government Scheme Matcher</span>
        <h1 style={{ fontSize: '2.5rem', marginTop: '0.4rem', marginBottom: '0.6rem' }}>
          Agricultural Subsidies & Welfare Programs
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.05rem' }}>
          Input your landholding and crop profile to discover verified Central & State financial subsidies you are eligible for.
        </p>
      </div>

      {/* Input Profile Card */}
      <div style={{ 
        background: 'white', 
        padding: '2rem', 
        borderRadius: '16px', 
        border: '1px solid #e2e8f0',
        boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)',
        marginBottom: '2.5rem'
      }}>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Sparkles size={20} color="#15803d" />
          <span>Your Farm Profile for Scheme Eligibility Matching</span>
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '6px' }}>
              State of Cultivation:
            </label>
            <select 
              value={selectedState} 
              onChange={(e) => setSelectedState(e.target.value)}
              className="calc-select"
            >
              <option value="Maharashtra">Maharashtra</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Haryana">Haryana</option>
              <option value="Punjab">Punjab</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '6px' }}>
              Primary Crop Type:
            </label>
            <select 
              value={selectedCrop} 
              onChange={(e) => setSelectedCrop(e.target.value)}
              className="calc-select"
            >
              <option value="Vegetables">Vegetables (Tomato, Onion, Potato, etc.)</option>
              <option value="Grains">Grains & Cereals (Rice, Wheat, Maize)</option>
              <option value="Fruits">Horticulture & Fruits (Apple, Mango, Citrus)</option>
              <option value="Pulses">Pulses & Oilseeds (Moong, Tur, Mustard)</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '6px' }}>
              Total Cultivable Land (Acres):
            </label>
            <input 
              type="number"
              min="0.1"
              max="100"
              step="0.5"
              value={landArea}
              onChange={(e) => setLandArea(Math.max(0.1, Number(e.target.value)))}
              className="calc-input"
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '6px' }}>
              Farmer Category:
            </label>
            <select 
              value={farmerCategory} 
              onChange={(e) => setFarmerCategory(e.target.value)}
              className="calc-select"
            >
              <option value="Small / Marginal Farmer">Small / Marginal Farmer (&lt;5 Acres)</option>
              <option value="Medium Farmer">Medium Farmer (5-15 Acres)</option>
              <option value="Large Farmer / FPO">Large Farmer / FPO (&gt;15 Acres)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.5rem' }}>
          Matched Government Schemes ({eligibleSchemes.length} Found)
        </h2>
        <span style={{ fontSize: '0.88rem', color: '#15803d', fontWeight: 700, background: '#dcfce7', padding: '4px 12px', borderRadius: '999px' }}>
          ✓ Verified Active 2026 Schemes
        </span>
      </div>

      {/* Schemes Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '1.8rem' }}>
        {eligibleSchemes.map((scheme) => (
          <div key={scheme.id} style={{
            background: 'white',
            borderRadius: '16px',
            padding: '1.8rem',
            border: '1.5px solid #e2e8f0',
            boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.8rem' }}>
              <span style={{
                background: '#e0f2fe',
                color: '#0369a1',
                fontSize: '0.78rem',
                fontWeight: 800,
                padding: '3px 8px',
                borderRadius: '6px'
              }}>
                {scheme.tag}
              </span>
              <span style={{ fontSize: '0.78rem', color: '#64748b' }}>
                {scheme.ministry}
              </span>
            </div>

            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#0f172a' }}>
              {scheme.name}
            </h3>

            <p style={{ fontSize: '0.88rem', color: '#64748b', marginBottom: '1rem', lineHeight: '1.5' }}>
              {scheme.description}
            </p>

            <div style={{
              background: '#f0fdf4',
              border: '1px solid #bbf7d0',
              padding: '0.8rem 1rem',
              borderRadius: '10px',
              marginBottom: '1.2rem',
              marginTop: 'auto'
            }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: '#166534', marginBottom: '2px' }}>
                Key Direct Benefit:
              </div>
              <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#15803d' }}>
                {scheme.benefit}
              </div>
            </div>

            <button 
              type="button" 
              className="btn btn-primary btn-sm" 
              style={{ width: '100%', justifyContent: 'space-between' }}
              onClick={() => alert(`Redirecting to official ${scheme.name} portal or Kisan Vikas assisted application flow.`)}
            >
              <span>Apply via Kisan Vikas Portal</span>
              <ExternalLink size={15} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schemes;

import React, { useState } from 'react';
import { 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight, 
  MapPin, 
  Search, 
  RefreshCw, 
  Building,
  Scale
} from 'lucide-react';
import { Link } from 'react-router-dom';

const MANDI_COMMODITIES = [
  {
    id: 1,
    commodity: 'Tomato (Hybrid)',
    variety: 'Abhinav / Sahu',
    mandi: 'Nashik APMC',
    district: 'Nashik',
    state: 'Maharashtra',
    modalPricePerKg: 26.0,
    modalPricePerQuintal: 2600,
    minPricePerQuintal: 2200,
    maxPricePerQuintal: 3000,
    arrivalsTonnes: 145.0,
    change: '+12.4%',
    isUp: true,
    category: 'Vegetables',
    updatedAt: '10 mins ago'
  },
  {
    id: 2,
    commodity: 'Red Onion',
    variety: 'Garwa / Winter',
    mandi: 'Lasalgaon APMC',
    district: 'Nashik',
    state: 'Maharashtra',
    modalPricePerKg: 31.0,
    modalPricePerQuintal: 3100,
    minPricePerQuintal: 2700,
    maxPricePerQuintal: 3500,
    arrivalsTonnes: 320.0,
    change: '+4.8%',
    isUp: true,
    category: 'Vegetables',
    updatedAt: '15 mins ago'
  },
  {
    id: 3,
    commodity: 'Potato (Kufri Jyoti)',
    variety: 'Table Medium',
    mandi: 'Agra APMC',
    district: 'Agra',
    state: 'Uttar Pradesh',
    modalPricePerKg: 19.0,
    modalPricePerQuintal: 1900,
    minPricePerQuintal: 1700,
    maxPricePerQuintal: 2150,
    arrivalsTonnes: 480.0,
    change: '-2.1%',
    isUp: false,
    category: 'Vegetables',
    updatedAt: '25 mins ago'
  },
  {
    id: 4,
    commodity: 'Basmati Rice (1121)',
    variety: 'Pusa Extra Long',
    mandi: 'Karnal Mandi',
    district: 'Karnal',
    state: 'Haryana',
    modalPricePerKg: 74.0,
    modalPricePerQuintal: 7400,
    minPricePerQuintal: 6900,
    maxPricePerQuintal: 7850,
    arrivalsTonnes: 85.0,
    change: '+6.5%',
    isUp: true,
    category: 'Grains',
    updatedAt: '5 mins ago'
  },
  {
    id: 5,
    commodity: 'Wheat (Sharbati Gold)',
    variety: 'Lokwan Grade 1',
    mandi: 'Sehore Mandi',
    district: 'Sehore',
    state: 'Madhya Pradesh',
    modalPricePerKg: 34.0,
    modalPricePerQuintal: 3400,
    minPricePerQuintal: 3150,
    maxPricePerQuintal: 3650,
    arrivalsTonnes: 210.0,
    change: '+1.8%',
    isUp: true,
    category: 'Grains',
    updatedAt: '30 mins ago'
  },
  {
    id: 6,
    commodity: 'Green Chilli',
    variety: 'G4 Spiced Export',
    mandi: 'Guntur APMC',
    district: 'Guntur',
    state: 'Andhra Pradesh',
    modalPricePerKg: 48.0,
    modalPricePerQuintal: 4800,
    minPricePerQuintal: 4300,
    maxPricePerQuintal: 5200,
    arrivalsTonnes: 60.0,
    change: '+15.2%',
    isUp: true,
    category: 'Vegetables',
    updatedAt: '12 mins ago'
  },
  {
    id: 7,
    commodity: 'Shimla Apple',
    variety: 'Royal Delicious A',
    mandi: 'Azadpur Mandi',
    district: 'New Delhi',
    state: 'Delhi',
    modalPricePerKg: 110.0,
    modalPricePerQuintal: 11000,
    minPricePerQuintal: 9500,
    maxPricePerQuintal: 12500,
    arrivalsTonnes: 95.0,
    change: '-1.5%',
    isUp: false,
    category: 'Fruits',
    updatedAt: '8 mins ago'
  },
  {
    id: 8,
    commodity: 'Mustard (Sarson)',
    variety: 'Black Bold Seed',
    mandi: 'Jaipur APMC',
    district: 'Jaipur',
    state: 'Rajasthan',
    modalPricePerKg: 56.5,
    modalPricePerQuintal: 5650,
    minPricePerQuintal: 5300,
    maxPricePerQuintal: 5900,
    arrivalsTonnes: 130.0,
    change: '+3.2%',
    isUp: true,
    category: 'Oilseeds',
    updatedAt: '18 mins ago'
  }
];

const LiveMandiSection = () => {
  const [selectedState, setSelectedState] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const states = ['All', 'Maharashtra', 'Uttar Pradesh', 'Haryana', 'Madhya Pradesh', 'Andhra Pradesh', 'Rajasthan'];

  const filtered = MANDI_COMMODITIES.filter(item => {
    const matchState = selectedState === 'All' || item.state === selectedState;
    const matchSearch = item.commodity.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        item.mandi.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        item.variety.toLowerCase().includes(searchQuery.toLowerCase());
    return matchState && matchSearch;
  });

  return (
    <section className="section section-mandi" id="mandi">
      <div className="section-header">
        <span className="section-tag" style={{ background: '#e0f2fe', color: '#0369a1' }}>
          <TrendingUp size={13} style={{ display: 'inline', marginRight: '4px' }} />
          National Agricultural Market Feed
        </span>
        <h2 className="section-title">Live APMC Mandi Market Rates</h2>
        <p className="section-desc">
          Real-time benchmark wholesale rates and arrival volumes reported from major agricultural produce markets across India.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="mandi-filter-bar">
        {/* Search */}
        <div style={{ position: 'relative', flex: 1 }}>
          <Search size={16} style={{ position: 'absolute', left: '12px', top: '12px', color: '#94a3b8' }} />
          <input 
            type="text"
            placeholder="Search commodity or mandi (e.g. Tomato, Lasalgaon)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="mandi-search-input"
          />
        </div>

        {/* State Tabs */}
        <div className="mandi-state-tabs">
          {states.map(st => (
            <button
              key={st}
              type="button"
              className={`mandi-state-tab ${selectedState === st ? 'active' : ''}`}
              onClick={() => setSelectedState(st)}
            >
              {st === 'All' ? 'All Mandis' : st}
            </button>
          ))}
        </div>
      </div>

      {/* Mandi Cards Grid */}
      <div className="mandi-cards-grid">
        {filtered.map((item) => (
          <div key={item.id} className="mandi-card">
            {/* Card Top */}
            <div className="mandi-card-top">
              <div>
                <span className="mandi-category-tag">{item.category}</span>
                <h3 className="mandi-crop-title">{item.commodity}</h3>
                <div className="mandi-variety">{item.variety}</div>
              </div>
              <div className={`mandi-trend-badge ${item.isUp ? 'trend-up' : 'trend-down'}`}>
                {item.isUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                <span>{item.change}</span>
              </div>
            </div>

            {/* Mandi Location */}
            <div className="mandi-location-row">
              <MapPin size={14} color="#0284c7" />
              <span><strong>{item.mandi}</strong>, {item.district} ({item.state})</span>
            </div>

            {/* Modal Price Highlight */}
            <div className="mandi-price-box">
              <div>
                <div className="mandi-price-label">Modal Wholesale Price</div>
                <div className="mandi-main-price">
                  ₹{item.modalPricePerKg.toFixed(1)} <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>/ kg</span>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div className="mandi-quintal-price">₹{item.modalPricePerQuintal.toLocaleString('en-IN')} / Qtl</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Range: ₹{item.minPricePerQuintal} - ₹{item.maxPricePerQuintal}</div>
              </div>
            </div>

            {/* Bottom Details */}
            <div className="mandi-card-footer">
              <div>
                <span style={{ color: '#64748b' }}>Today's Arrival:</span>{' '}
                <strong>{item.arrivalsTonnes} Tonnes</strong>
              </div>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                {item.updatedAt}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: 'center', padding: '3rem', background: 'white', borderRadius: '14px', border: '1px dashed #cbd5e1' }}>
          <p style={{ color: '#64748b', fontWeight: 600 }}>No mandi price records found matching your filters.</p>
        </div>
      )}

      <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
        <Link to="/marketplace" className="btn btn-primary btn-lg">
          <span>Browse Direct Farmer Listings at Fair Rates</span>
        </Link>
      </div>
    </section>
  );
};

export default LiveMandiSection;

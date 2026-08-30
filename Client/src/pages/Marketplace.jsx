import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  MapPin, 
  ShieldCheck, 
  ShoppingBag, 
  Check, 
  Info, 
  Sparkles,
  ArrowRight,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ALL_PRODUCTS = [
  {
    id: 1,
    name: 'Red Hybrid Tomato',
    variety: 'Abhinav F1',
    category: 'Vegetables',
    emoji: '🍅',
    farmer: 'Ramesh Patil',
    fpo: 'Kisan Samriddhi FPO',
    location: 'Nashik, Maharashtra',
    mandiPrice: 18.0,
    price: 24.5,
    unit: 'kg',
    grade: 'Grade A Premium',
    availableQty: 2500,
    minOrder: 100,
    organic: false,
    harvestDate: 'Fresh (Harvested Today)',
    aiDemandTrend: 'High (+18% Demand Surge)',
    aiDemandPositive: true
  },
  {
    id: 2,
    name: 'Nashik Red Onion',
    variety: 'Garwa Winter Crop',
    category: 'Vegetables',
    emoji: '🧅',
    farmer: 'Sunil Jadhav',
    fpo: 'Sahyadri Farmers Producer Co.',
    location: 'Lasalgaon, Maharashtra',
    mandiPrice: 20.0,
    price: 28.0,
    unit: 'kg',
    grade: 'Grade A Export',
    availableQty: 8000,
    minOrder: 500,
    organic: false,
    harvestDate: 'Cured & Graded',
    aiDemandTrend: 'Stable Demand',
    aiDemandPositive: true
  },
  {
    id: 3,
    name: 'Basmati Rice (Pusa 1121)',
    variety: 'Extra Long Grain (8.35mm)',
    category: 'Grains',
    emoji: '🌾',
    farmer: 'Gurpreet Singh',
    fpo: 'Punjab Agri Collective',
    location: 'Karnal, Haryana',
    mandiPrice: 58.0,
    price: 72.0,
    unit: 'kg',
    grade: 'AGMARK Grade 1',
    availableQty: 15000,
    minOrder: 250,
    organic: false,
    harvestDate: 'Aged 1 Year (Moisture <12%)',
    aiDemandTrend: 'Export Surge (+22%)',
    aiDemandPositive: true
  },
  {
    id: 4,
    name: 'Shimla Royal Apple',
    variety: 'Royal Delicious High Altitude',
    category: 'Fruits',
    emoji: '🍎',
    farmer: 'Devinder Thakur',
    fpo: 'Himachal Apple Growers Federation',
    location: 'Shimla, Himachal Pradesh',
    mandiPrice: 75.0,
    price: 105.0,
    unit: 'kg',
    grade: 'Grade A+ Crisp',
    availableQty: 3200,
    minOrder: 150,
    organic: false,
    harvestDate: 'Handpicked Yesterday',
    aiDemandTrend: 'Moderate Inflow',
    aiDemandPositive: false
  },
  {
    id: 5,
    name: 'Organic Salem Turmeric',
    variety: 'High Curcumin (5.2%)',
    category: 'Organic',
    emoji: '🌿',
    farmer: 'M. Selvam',
    fpo: 'Kongu Bio-Agri Collective',
    location: 'Erode, Tamil Nadu',
    mandiPrice: 95.0,
    price: 140.0,
    unit: 'kg',
    grade: 'NPOP Organic Certified',
    availableQty: 1200,
    minOrder: 50,
    organic: true,
    harvestDate: 'Sun-dried Whole Fingers',
    aiDemandTrend: 'Pharma Demand High (+25%)',
    aiDemandPositive: true
  },
  {
    id: 6,
    name: 'Kufri Jyoti Potato',
    variety: 'Medium-Large Table Grading',
    category: 'Vegetables',
    emoji: '🥔',
    farmer: 'Brijesh Sharma',
    fpo: 'Agra Potato Growers Association',
    location: 'Agra, Uttar Pradesh',
    mandiPrice: 12.0,
    price: 16.5,
    unit: 'kg',
    grade: 'Grade A Table Quality',
    availableQty: 12000,
    minOrder: 1000,
    organic: false,
    harvestDate: 'Cold Storage Maintained',
    aiDemandTrend: 'Supply Inflow High',
    aiDemandPositive: false
  },
  {
    id: 7,
    name: 'Alphonso Mango (Devgad Hapus)',
    variety: 'GI Tagged Devgad Alphonso',
    category: 'Fruits',
    emoji: '🥭',
    farmer: 'Nilesh Rane',
    fpo: 'Konkan Fruit Growers Cluster',
    location: 'Devgad, Maharashtra',
    mandiPrice: 350.0,
    price: 480.0,
    unit: 'dozen',
    grade: 'GI Certified Grade A',
    availableQty: 800,
    minOrder: 10,
    organic: true,
    harvestDate: 'Naturally Ripened',
    aiDemandTrend: 'Pre-season High Demand',
    aiDemandPositive: true
  },
  {
    id: 8,
    name: 'Moong Dal (Yellow Split)',
    variety: 'Desi Small Grain Unpolished',
    category: 'Grains',
    emoji: '🌱',
    farmer: 'Anand Patel',
    fpo: 'Gujarat Pulse Producers Co.',
    location: 'Junagadh, Gujarat',
    mandiPrice: 82.0,
    price: 98.0,
    unit: 'kg',
    grade: 'Unpolished Organic Standard',
    availableQty: 4500,
    minOrder: 100,
    organic: true,
    harvestDate: 'Fresh Milling 3 Days Ago',
    aiDemandTrend: 'Consistent Retail Demand',
    aiDemandPositive: true
  }
];

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedGrade, setSelectedGrade] = useState('All');
  const [orderedProduct, setOrderedProduct] = useState(null);
  const [orderQuantity, setOrderQuantity] = useState(100);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const categories = ['All', 'Vegetables', 'Grains', 'Fruits', 'Organic'];

  const filtered = ALL_PRODUCTS.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.farmer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesGrade = selectedGrade === 'All' || item.grade.includes(selectedGrade);
    return matchesSearch && matchesCategory && matchesGrade;
  });

  const handleOpenOrder = (prod) => {
    setOrderedProduct(prod);
    setOrderQuantity(prod.minOrder);
    setOrderPlaced(false);
  };

  const handleConfirmOrder = () => {
    setOrderPlaced(true);
  };

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2.5rem 1.5rem' }}>
      {/* Header */}
      <div style={{ marginBottom: '2.5rem' }}>
        <span className="section-tag">Direct B2B & B2C Marketplace</span>
        <h1 style={{ fontSize: '2.5rem', marginTop: '0.4rem', marginBottom: '0.6rem' }}>
          Farm-Gate Produce Directory
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.05rem' }}>
          Procure traceable, quality-tested harvest straight from verified farmers & FPOs with zero middleman markup.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div style={{ 
        background: 'white', 
        padding: '1.5rem', 
        borderRadius: '16px', 
        border: '1px solid #e2e8f0',
        boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
        marginBottom: '2.5rem',
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr',
        gap: '1.2rem',
        alignItems: 'center'
      }}>
        {/* Search */}
        <div style={{ position: 'relative' }}>
          <Search size={18} style={{ position: 'absolute', left: '14px', top: '14px', color: '#94a3b8' }} />
          <input 
            type="text"
            placeholder="Search crop, variety, farmer name, or district (e.g. Nashik, Basmati)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem 1rem 0.75rem 2.6rem',
              borderRadius: '10px',
              border: '1.5px solid #cbd5e1',
              fontSize: '0.92rem',
              fontFamily: 'inherit'
            }}
          />
        </div>

        {/* Category Filter */}
        <div>
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              borderRadius: '10px',
              border: '1.5px solid #cbd5e1',
              fontSize: '0.92rem',
              fontFamily: 'inherit',
              background: 'white'
            }}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat === 'All' ? 'All Categories' : cat}</option>
            ))}
          </select>
        </div>

        {/* Grade Filter */}
        <div>
          <select 
            value={selectedGrade} 
            onChange={(e) => setSelectedGrade(e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              borderRadius: '10px',
              border: '1.5px solid #cbd5e1',
              fontSize: '0.92rem',
              fontFamily: 'inherit',
              background: 'white'
            }}
          >
            <option value="All">All Quality Grades</option>
            <option value="Grade A">Grade A Quality</option>
            <option value="AGMARK">AGMARK Certified</option>
            <option value="Organic">Organic Certified</option>
            <option value="GI">GI Tagged</option>
          </select>
        </div>
      </div>

      {/* Produce Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.8rem' }}>
        {filtered.map((prod) => (
          <div key={prod.id} className="crop-card">
            <div className="crop-card-image-wrap">
              <span className="crop-img-placeholder">{prod.emoji}</span>
              <span className="crop-grade-badge">
                <ShieldCheck size={12} style={{ display: 'inline', marginRight: '3px' }} />
                {prod.grade}
              </span>
              <span className="crop-location-badge">
                <MapPin size={11} />
                {prod.location}
              </span>
            </div>

            <div className="crop-card-body">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <h3 className="crop-title">{prod.name}</h3>
              </div>
              <p className="crop-farmer">By <strong>{prod.farmer}</strong> ({prod.fpo})</p>

              {/* Market Trend Badge */}
              <div style={{ 
                background: prod.aiDemandPositive ? '#ecfdf5' : '#f1f5f9',
                color: prod.aiDemandPositive ? '#065f46' : '#475569',
                border: prod.aiDemandPositive ? '1px solid #a7f3d0' : '1px solid #cbd5e1',
                padding: '4px 8px',
                borderRadius: '6px',
                fontSize: '0.78rem',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                marginBottom: '10px'
              }}>
                <Sparkles size={12} />
                <span>Market: {prod.aiDemandTrend}</span>
              </div>

              <div style={{ fontSize: '0.82rem', color: '#64748b', marginBottom: '4px' }}>
                Available Stock: <strong>{prod.availableQty.toLocaleString('en-IN')} {prod.unit}</strong>
              </div>
              <div style={{ fontSize: '0.82rem', color: '#64748b', marginBottom: '8px' }}>
                Min Order: <strong>{prod.minOrder} {prod.unit}</strong> • {prod.harvestDate}
              </div>

              {/* Price Row */}
              <div className="crop-price-row">
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8', textDecoration: 'line-through' }}>
                    Retail: ₹{(prod.price * 1.35).toFixed(1)}/{prod.unit}
                  </div>
                  <span className="crop-price">₹{prod.price.toFixed(1)}</span>
                  <span> / {prod.unit}</span>
                </div>
                <button 
                  type="button" 
                  className="btn btn-primary btn-sm"
                  onClick={() => handleOpenOrder(prod)}
                >
                  <ShoppingBag size={14} />
                  <span>Procure</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: 'center', padding: '4rem', background: 'white', borderRadius: '16px', border: '1px dashed #cbd5e1' }}>
          <p style={{ fontSize: '1.2rem', color: '#64748b', fontWeight: 600 }}>No agricultural produce matched your search filters.</p>
          <button 
            type="button" 
            className="btn btn-outline btn-sm" 
            style={{ marginTop: '1rem' }}
            onClick={() => { setSearchTerm(''); setSelectedCategory('All'); setSelectedGrade('All'); }}
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Order Modal */}
      {orderedProduct && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(15, 23, 42, 0.7)',
          backdropFilter: 'blur(6px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2000,
          padding: '1.5rem'
        }}>
          <div style={{
            background: 'white',
            borderRadius: '20px',
            maxWidth: '520px',
            width: '100%',
            padding: '2rem',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
            border: '1px solid #e2e8f0',
            position: 'relative'
          }}>
            {!orderPlaced ? (
              <>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '1.8rem' }}>{orderedProduct.emoji}</span>
                    <div>
                      <h3 style={{ fontSize: '1.25rem' }}>Procure {orderedProduct.name}</h3>
                      <p style={{ fontSize: '0.82rem', color: '#64748b' }}>From {orderedProduct.farmer} • {orderedProduct.location}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setOrderedProduct(null)} 
                    style={{ background: '#f1f5f9', width: '32px', height: '32px', borderRadius: '50%', fontWeight: 700 }}
                  >
                    ✕
                  </button>
                </div>

                <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '12px', marginBottom: '1.2rem', border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '0.88rem' }}>
                    <span>Direct Farm Price:</span>
                    <strong>₹{orderedProduct.price.toFixed(1)} / {orderedProduct.unit}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '0.88rem' }}>
                    <span>Quality Grade:</span>
                    <span style={{ color: '#15803d', fontWeight: 700 }}>{orderedProduct.grade}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem' }}>
                    <span>Estimated Pooled Freight:</span>
                    <span>₹2.0 / {orderedProduct.unit}</span>
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, marginBottom: '6px' }}>
                    Procurement Quantity ({orderedProduct.unit}):
                  </label>
                  <input 
                    type="number"
                    min={orderedProduct.minOrder}
                    max={orderedProduct.availableQty}
                    step="50"
                    value={orderQuantity}
                    onChange={(e) => setOrderQuantity(Math.max(orderedProduct.minOrder, Number(e.target.value)))}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      border: '1.5px solid #cbd5e1',
                      fontSize: '1rem',
                      fontWeight: 700
                    }}
                  />
                  <span style={{ fontSize: '0.78rem', color: '#64748b' }}>
                    Min order requirement: {orderedProduct.minOrder} {orderedProduct.unit}
                  </span>
                </div>

                {/* Total Calculation */}
                <div style={{ 
                  background: '#f0fdf4', 
                  border: '1.5px solid #bbf7d0', 
                  padding: '1.2rem', 
                  borderRadius: '12px', 
                  marginBottom: '1.5rem' 
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '4px' }}>
                    <span>Farmer Payout ({orderQuantity} {orderedProduct.unit}):</span>
                    <span>₹{(orderedProduct.price * orderQuantity).toLocaleString('en-IN')}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '8px' }}>
                    <span>Platform Fee + Pooled Logistics:</span>
                    <span>₹{((1.0 + 2.0) * orderQuantity).toLocaleString('en-IN')}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', fontWeight: 800, borderTop: '1px solid #bbf7d0', paddingTop: '8px', color: '#15803d' }}>
                    <span>Total Escrow Amount:</span>
                    <span>₹{((orderedProduct.price + 3.0) * orderQuantity).toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <button 
                    type="button"
                    className="btn btn-outline btn-lg" 
                    style={{ flex: 1 }}
                    onClick={() => setOrderedProduct(null)}
                  >
                    Cancel
                  </button>
                  <button 
                    type="button"
                    className="btn btn-primary btn-lg" 
                    style={{ flex: 2 }}
                    onClick={handleConfirmOrder}
                  >
                    <span>Confirm Escrow Lock</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                <div style={{ width: '64px', height: '64px', background: '#dcfce7', color: '#15803d', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.2rem' }}>
                  <Check size={32} />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Escrow Order Initiated!</h3>
                <p style={{ color: '#64748b', fontSize: '0.92rem', marginBottom: '1.5rem' }}>
                  Order for <strong>{orderQuantity} {orderedProduct.unit}</strong> of {orderedProduct.name} has been placed. Farmer {orderedProduct.farmer} has received instant dispatch notification.
                </p>
                <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '10px', fontSize: '0.85rem', color: '#334155', marginBottom: '1.5rem', textAlign: 'left' }}>
                  <div>• Escrow ID: <strong>ESC-2026-{Math.floor(100000 + Math.random() * 900000)}</strong></div>
                  <div>• Logistics Status: <strong style={{ color: '#0284c7' }}>Pickup Assignment in Progress</strong></div>
                  <div>• Guaranteed Delivery Window: <strong>Next 24-36 Hours</strong></div>
                </div>
                <button 
                  type="button"
                  className="btn btn-primary btn-lg" 
                  style={{ width: '100%' }}
                  onClick={() => setOrderedProduct(null)}
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Marketplace;

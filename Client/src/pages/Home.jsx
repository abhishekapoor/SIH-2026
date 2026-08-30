<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sprout, 
  ArrowRight, 
  Sparkles, 
  Truck, 
  FileCheck2, 
  ShoppingBag,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';
import FeatureSection from '../components/FeatureSection';
import HowItWorks from '../components/HowItWorks';

const Home = () => {
  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="hero-container">
          {/* Hero Left Content */}
          <div className="hero-content">
            <div className="hero-badge">
              <Sparkles size={14} color="#15803d" />
              <span>Direct Agricultural Marketplace & Welfare Platform</span>
            </div>

            <h1 className="hero-title">
              <span className="gradient-text">Kisan Vikas</span> — Direct Farm-to-Buyer Marketplace
            </h1>

            <p className="hero-subtitle">
              Empowering farmers with direct access to retailers, pooled transport logistics, guaranteed escrow payouts, and real-time government scheme assistance.
            </p>

            <div className="hero-cta-group">
              <Link to="/marketplace" className="btn btn-primary btn-lg">
                <ShoppingBag size={18} />
                <span>Explore Marketplace</span>
              </Link>

              <Link to="/mandi" className="btn btn-outline btn-lg">
                <TrendingUp size={18} />
                <span>Live Mandi Rates</span>
                <ArrowRight size={16} />
              </Link>

              <Link to="/schemes" className="btn btn-outline btn-lg">
                <FileCheck2 size={18} />
                <span>Govt Schemes</span>
              </Link>

              <Link to="/signup?role=farmer" className="btn btn-accent btn-lg">
                <Sprout size={18} />
                <span>Farmer / FPO Portal</span>
              </Link>
            </div>

            {/* Quick Impact Stats */}
            <div className="hero-stats">
              <div className="stat-item">
                <h4>+35%</h4>
                <p>Higher Farmer Income</p>
              </div>
              <div className="stat-item">
                <h4>-18%</h4>
                <p>Lower Buyer Cost</p>
              </div>
              <div className="stat-item">
                <h4>100%</h4>
                <p>Direct & Transparent</p>
              </div>
            </div>
          </div>

          {/* Hero Right Visual: Live Trade Flow Animation Card */}
          <div className="hero-visual">
            <div className="visual-card">
              <div className="card-header-badge">
                <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0f172a' }}>
                  Kisan Vikas Direct Flow
                </span>
                <div className="live-pulse">
                  <div className="pulse-dot"></div>
                  <span>Real-time Active</span>
                </div>
              </div>

              {/* Step 1: Farmer Listing */}
              <div className="flow-step">
                <div className="flow-step-left">
                  <div className="flow-step-icon icon-farmer">
                    <Sprout size={18} />
                  </div>
                  <div>
                    <div className="flow-step-title">Farmer / FPO Direct Listing</div>
                    <div className="flow-step-desc">Tomato (Hybrid) • 2.5 Tonnes • Nashik</div>
                  </div>
                </div>
                <div className="flow-step-value">₹24.5/kg</div>
              </div>

              {/* Step 2: Pooled Logistics */}
              <div className="flow-step">
                <div className="flow-step-left">
                  <div className="flow-step-icon icon-logistics">
                    <Truck size={18} />
                  </div>
                  <div>
                    <div className="flow-step-title">Pooled Freight Logistics</div>
                    <div className="flow-step-desc">Clustered transport with nearby farms</div>
                  </div>
                </div>
                <div className="flow-step-value" style={{ color: '#d97706', fontSize: '0.85rem' }}>
                  ₹2.0/kg
                </div>
              </div>

              {/* Step 3: Verified Buyer Procurement */}
              <div className="flow-step" style={{ background: '#ecfdf5', borderColor: '#a7f3d0' }}>
                <div className="flow-step-left">
                  <div className="flow-step-icon icon-buyer">
                    <ShoppingBag size={18} />
                  </div>
                  <div>
                    <div className="flow-step-title">Buyer Final Procurement</div>
                    <div className="flow-step-desc">Doorstep delivery • Escrow verified</div>
                  </div>
                </div>
                <div className="flow-step-value" style={{ color: '#15803d' }}>
                  ₹27.5/kg
                </div>
              </div>

              {/* Floating Highlight Pills */}
              <div className="floating-pill top-right">
                <ShieldCheck size={16} color="#4ade80" />
                <span>Escrow Payment Protected</span>
              </div>

              <div className="floating-pill bottom-left">
                <FileCheck2 size={16} color="#fbbf24" />
                <span>Govt Subsidy Matched</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PLATFORM PILLARS & CORE CAPABILITIES */}
      <FeatureSection />

      {/* 3. HOW IT WORKS 3-STEP WORKFLOWS */}
      <HowItWorks />

      {/* 4. BOTTOM CTA BANNER */}
      <section className="cta-banner">
        <div className="cta-container">
          <h2>Empowering India's Agricultural Future with Kisan Vikas</h2>
          <p>
            Join thousands of progressive farmers, FPOs, and retailers building a transparent, direct agricultural network.
          </p>
          <div className="cta-buttons">
            <Link to="/signup?role=farmer" className="btn btn-primary btn-lg" style={{ background: '#22c55e', color: '#091e11', fontWeight: 800 }}>
              <Sprout size={18} />
              <span>Join as Farmer / FPO</span>
            </Link>
            <Link to="/marketplace" className="btn btn-outline btn-lg" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>
              <ShoppingBag size={18} />
              <span>Browse Marketplace</span>
            </Link>
          </div>
        </div>
      </section>
=======
=======
>>>>>>> f9fb799ab0cd1b42ce10c1a8c3ad1722e0ae1383
import { useNavigate, Link } from 'react-router-dom';
import {
  Sprout,
  Tractor,
  Building2,
  LogOut,
  LogIn,
  UserPlus,
  ShieldCheck,
  MapPin,
  Trees,
  Droplets,
  PackageCheck,
  FileText,
  Clock,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Button from '../components/common/Button';

const Home = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const isFarmer = user?.role === 'farmer' || !!user?.farmerProfile;
  const isBuyer = user?.role === 'buyer' || !!user?.buyerProfile;
  const farmerProfile = user?.farmerProfile;
  const buyerProfile = user?.buyerProfile;

  return (
    <div className="dashboard-container">
      {/* Brand Top Bar */}
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div className="brand-badge">
            <Sprout size={24} />
          </div>
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0 }}>KrishiConnect</h2>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>Smart India Hackathon Portal</p>
          </div>
        </div>

        {isAuthenticated ? (
          <Button variant="outline" size="sm" onClick={handleLogout} icon={LogOut}>
            Sign Out
          </Button>
        ) : (
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Button variant="outline" size="sm" onClick={() => navigate('/login')} icon={LogIn}>
              Sign In
            </Button>
            <Button variant="primary" size="sm" onClick={() => navigate('/signup')} icon={UserPlus}>
              Register
            </Button>
          </div>
        )}
      </header>

      {isAuthenticated && user ? (
        <div className="dashboard-card">
          {/* User Hero Header */}
          <div className={`dashboard-hero ${isBuyer ? 'buyer-hero' : ''}`}>
            <div className="dashboard-profile-header">
              <div className={`dashboard-avatar ${isBuyer ? 'buyer-avatar' : ''}`}>
                {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
              </div>
              <div>
                <h1 className="profile-name">{user.name}</h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{user.email} {user.phone ? `• ${user.phone}` : ''}</p>
                <div className={`profile-role-badge ${isBuyer ? 'buyer-badge' : ''}`}>
                  {isFarmer ? <Tractor size={14} /> : <Building2 size={14} />}
                  <span>{isFarmer ? 'Registered Farmer (किसान)' : 'Verified Buyer / Enterprise (व्यापारी)'}</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#ffffff', padding: '0.5rem 1rem', borderRadius: 'var(--radius-full)', boxShadow: 'var(--shadow-sm)' }}>
              <Clock size={16} className="text-amber" />
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-main)' }}>
                Verification: {farmerProfile?.verificationStatus || buyerProfile?.verificationStatus || 'Pending'}
              </span>
            </div>
          </div>

          <div className="dashboard-body">
            {/* Farmer Profile Information */}
            {isFarmer && farmerProfile && (
              <div>
                <div className="section-badge-header">
                  <Trees size={18} className="text-emerald" />
                  <span>Land & Crop Cultivation Details</span>
                </div>

                <div className="profile-grid-details">
                  <div className="detail-box">
                    <div className="detail-label">Location (District/State)</div>
                    <div className="detail-value">{farmerProfile.location || 'Not Specified'}</div>
                  </div>

                  <div className="detail-box">
                    <div className="detail-label">Land Area</div>
                    <div className="detail-value">
                      {farmerProfile.landArea} {farmerProfile.landUnit || 'Acres'}
                    </div>
                  </div>

                  <div className="detail-box">
                    <div className="detail-label">Land Ownership</div>
                    <div className="detail-value">{farmerProfile.ownershipType || 'Owned'}</div>
                  </div>

                  <div className="detail-box">
                    <div className="detail-label">Irrigation Source</div>
                    <div className="detail-value">{farmerProfile.irrigationType || 'Canal'}</div>
                  </div>
                </div>

                {/* Farm Location */}
                {farmerProfile.farmLocation && (
                  <div className="detail-box" style={{ marginTop: '1rem' }}>
                    <div className="detail-label">Farm Village & Address</div>
                    <div className="detail-value" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <MapPin size={16} className="text-emerald" /> {farmerProfile.farmLocation}
                    </div>
                  </div>
                )}

                {/* Crops */}
                {farmerProfile.crops && farmerProfile.crops.length > 0 && (
                  <div style={{ marginTop: '1.25rem' }}>
                    <div className="detail-label" style={{ marginBottom: '0.5rem' }}>Active Crops Cultivated</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {farmerProfile.crops.map((crop) => (
                        <span key={crop} className="tag-chip">
                          🌾 {crop}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Buyer Profile Information */}
            {isBuyer && buyerProfile && (
              <div>
                <div className="section-badge-header">
                  <Building2 size={18} className="text-amber" />
                  <span>Trade & Procurement Specifications</span>
                </div>

                <div className="profile-grid-details">
                  <div className="detail-box">
                    <div className="detail-label">Business Name</div>
                    <div className="detail-value">{buyerProfile.businessName || 'N/A'}</div>
                  </div>

                  <div className="detail-box">
                    <div className="detail-label">Business Type</div>
                    <div className="detail-value">{buyerProfile.businessType || 'Wholesaler'}</div>
                  </div>

                  <div className="detail-box">
                    <div className="detail-label">GSTIN</div>
                    <div className="detail-value" style={{ fontFamily: 'monospace' }}>{buyerProfile.gstin || 'N/A'}</div>
                  </div>

                  <div className="detail-box">
                    <div className="detail-label">Typical Quantity</div>
                    <div className="detail-value">{buyerProfile.typicalQuantity || 'N/A'}</div>
                  </div>

                  <div className="detail-box">
                    <div className="detail-label">Quality Requirement</div>
                    <div className="detail-value">{buyerProfile.qualityRequirements || 'Grade A'}</div>
                  </div>

                  <div className="detail-box">
                    <div className="detail-label">Document Ref</div>
                    <div className="detail-value">{buyerProfile.verificationDocuments || 'Submitted'}</div>
                  </div>
                </div>

                {buyerProfile.address && (
                  <div className="detail-box" style={{ marginTop: '1rem' }}>
                    <div className="detail-label">Registered Business Address</div>
                    <div className="detail-value" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <MapPin size={16} className="text-amber" /> {buyerProfile.address}
                    </div>
                  </div>
                )}

                {buyerProfile.cropsInterested && buyerProfile.cropsInterested.length > 0 && (
                  <div style={{ marginTop: '1.25rem' }}>
                    <div className="detail-label" style={{ marginBottom: '0.5rem' }}>Commodities Interested in Buying</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {buyerProfile.cropsInterested.map((crop) => (
                        <span key={crop} className="tag-chip" style={{ background: 'var(--amber-light)', color: 'var(--amber)', borderColor: '#fde68a' }}>
                          📦 {crop}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Fallback if user object has no profile nested */}
            {!farmerProfile && !buyerProfile && (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <p style={{ color: 'var(--text-muted)' }}>You are signed in as <strong>{user.email}</strong>.</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Welcome Hero for Guests */
        <div className="dashboard-card" style={{ padding: '3.5rem 2rem', textAlign: 'center' }}>
          <div className="brand-badge" style={{ width: '64px', height: '64px', margin: '0 auto 1.5rem', borderRadius: 'var(--radius-lg)' }}>
            <Sprout size={36} />
          </div>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.75rem' }}>
            Direct Farmer-to-Buyer Marketplace
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Empowering farmers to get fair MSP-guaranteed prices and enabling verified institutional buyers to procure top-quality agricultural commodities seamlessly.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg" onClick={() => navigate('/signup')} icon={UserPlus}>
              Create New Account
            </Button>
            <Button variant="outline" size="lg" onClick={() => navigate('/login')} icon={LogIn}>
              Login with Existing Account
            </Button>
          </div>
        </div>
      )}
<<<<<<< HEAD
>>>>>>> f9fb799ab0cd1b42ce10c1a8c3ad1722e0ae1383
=======
>>>>>>> f9fb799ab0cd1b42ce10c1a8c3ad1722e0ae1383
    </div>
  );
};

export default Home;

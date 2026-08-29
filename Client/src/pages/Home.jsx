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
    </div>
  );
};

export default Home;

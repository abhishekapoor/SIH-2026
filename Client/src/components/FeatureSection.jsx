import React from 'react';
import { 
  TrendingUp, 
  Truck, 
  Building2, 
  ShieldCheck, 
  FileCheck2, 
  Sprout
} from 'lucide-react';

const FEATURES = [
  {
    icon: <Sprout size={26} />,
    colorClass: 'feat-green',
    title: 'Direct Farm-Gate Procurement',
    desc: 'Connects farmers and FPOs directly with verified retailers and bulk institutional buyers, eliminating multi-tier middleman deductions.'
  },
  {
    icon: <Truck size={26} />,
    colorClass: 'feat-amber',
    title: 'Smart Pooled Logistics',
    desc: 'Aggregates harvest from multiple nearby farms along unified transport corridors to reduce per-kg freight costs by up to 35%.'
  },
  {
    icon: <Building2 size={26} />,
    colorClass: 'feat-purple',
    title: 'FPO Aggregation Hub',
    desc: 'Enables Farmer Producer Organizations to pool smallholder produce, manage collective inventory, and fulfill large-scale institutional contracts.'
  },
  {
    icon: <ShieldCheck size={26} />,
    colorClass: 'feat-rose',
    title: 'Escrow Milestone Payouts',
    desc: 'Funds are securely locked upon order placement and released directly to the farmer’s bank account immediately upon verified doorstep delivery.'
  },
  {
    icon: <TrendingUp size={26} />,
    colorClass: 'feat-blue',
    title: 'Live Mandi Price Intelligence',
    desc: 'Real-time price tracking across major APMC mandis nationwide so farmers and buyers always make informed trading decisions.'
  },
  {
    icon: <FileCheck2 size={26} />,
    colorClass: 'feat-emerald',
    title: 'Govt Scheme & Subsidy Matcher',
    desc: 'Instantly matches farmer landholding, crop variety, and location with active Central and State agricultural subsidy programs.'
  }
];

const FeatureSection = () => {
  return (
    <section className="section section-alt" id="features">
      <div className="section-header">
        <span className="section-tag">Core Platform Pillars</span>
        <h2 className="section-title">Why Farmers & Buyers Choose Kisan Vikas</h2>
        <p className="section-desc">
          Empowering India's agricultural ecosystem with transparent trading, shared freight logistics, and verified government support.
        </p>
      </div>

      <div className="features-grid">
        {FEATURES.map((feat, index) => (
          <div key={index} className="feature-card">
            <div className={`feature-icon-box ${feat.colorClass}`}>
              {feat.icon}
            </div>
            <h3>{feat.title}</h3>
            <p>{feat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;

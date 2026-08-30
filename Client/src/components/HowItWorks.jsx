import React from 'react';
import { Sprout, ShoppingCart, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  return (
    <section className="section section-alt" id="how-it-works">
      <div className="section-header">
        <span className="section-tag">Simple 3-Step Workflows</span>
        <h2 className="section-title">How Kisan Vikas Works</h2>
        <p className="section-desc">
          Designed for maximum simplicity so rural farmers and urban institutional buyers can transact frictionlessly.
        </p>
      </div>

      <div className="timeline-container">
        {/* Farmer Workflow */}
        <div className="timeline-column">
          <h3>
            <Sprout size={24} color="#15803d" />
            <span>For Farmers & FPOs</span>
          </h3>

          <div className="timeline-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h4>List Your Harvest & Expected Pricing</h4>
              <p>Enter crop variety, expected harvest date, quantity, and produce photos to get discovered by verified buyers.</p>
            </div>
          </div>

          <div className="timeline-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h4>Receive Verified Buyer Orders</h4>
              <p>Get instant notifications when buyers or retailers place orders. Accept or counter-offer with transparent escrow payment guarantee.</p>
            </div>
          </div>

          <div className="timeline-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h4>Farm-Gate Pickup & Instant Payout</h4>
              <p>Our pooled logistics partner collects produce straight from your farm gate. Payout is credited directly to your bank account via UPI / IMPS upon pickup.</p>
            </div>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <Link to="/signup?role=farmer" className="btn btn-primary btn-sm" style={{ width: '100%' }}>
              Register as Farmer / FPO
            </Link>
          </div>
        </div>

        {/* Buyer Workflow */}
        <div className="timeline-column">
          <h3>
            <ShoppingCart size={24} color="#0284c7" />
            <span>For Buyers & Retailers</span>
          </h3>

          <div className="timeline-step">
            <div className="step-number buyer">1</div>
            <div className="step-content">
              <h4>Browse Traceable Farm Listings</h4>
              <p>Filter produce by region, quality grade (Grade A/B/Organic), harvest timing, and minimum order quantity with zero middleman markup.</p>
            </div>
          </div>

          <div className="timeline-step">
            <div className="step-number buyer">2</div>
            <div className="step-content">
              <h4>Place Order with Escrow Protection</h4>
              <p>Pay securely via digital escrow. Your funds are protected until produce is delivered and inspected according to quality standards.</p>
            </div>
          </div>

          <div className="timeline-step">
            <div className="step-number buyer">3</div>
            <div className="step-content">
              <h4>Live Pooled Logistics Tracking</h4>
              <p>Track your shipment in real time from farm harvest to your store or warehouse, benefiting from lower combined freight rates.</p>
            </div>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <Link to="/signup?role=buyer" className="btn btn-outline btn-sm" style={{ width: '100%', borderColor: '#0284c7', color: '#0284c7' }}>
              Register as Buyer / Retailer
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

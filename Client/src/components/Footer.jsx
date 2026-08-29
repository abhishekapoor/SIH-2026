import React from 'react';
import { Sprout, Globe, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Column */}
        <div className="footer-brand">
          <h3>
            <Sprout size={24} color="#22c55e" />
            <span>Kisan Vikas</span>
          </h3>
          <p>
            A direct agricultural marketplace empowering farmers with direct market access, pooled transport logistics, and integrated government welfare programs.
          </p>
        </div>

        {/* Column 2: Platform */}
        <div className="footer-column">
          <h4>Platform</h4>
          <ul className="footer-links">
            <li><Link to="/marketplace">Live Produce Marketplace</Link></li>
            <li><Link to="/mandi">Live Mandi Rates</Link></li>
            <li><Link to="/schemes">Govt Schemes & Subsidies</Link></li>
            <li><a href="/#how-it-works">How It Works</a></li>
          </ul>
        </div>

        {/* Column 3: Roles & Access */}
        <div className="footer-column">
          <h4>User Portals</h4>
          <ul className="footer-links">
            <li><Link to="/signup?role=farmer">Farmer Registration</Link></li>
            <li><Link to="/signup?role=fpo">FPO Cluster Hub</Link></li>
            <li><Link to="/signup?role=buyer">Bulk Buyer Portal</Link></li>
            <li><Link to="/login">Transporter Login</Link></li>
            <li><Link to="/login">Admin Dashboard</Link></li>
          </ul>
        </div>

        {/* Column 4: Technology & Standards */}
        <div className="footer-column">
          <h4>Innovation & Trust</h4>
          <ul className="footer-links">
            <li><a href="/#how-it-works">Traceable Supply Chain</a></li>
            <li><a href="/#how-it-works">Milestone Escrow Payouts</a></li>
            <li><a href="/#how-it-works">Pooled Freight Optimizer</a></li>
            <li><Link to="/schemes">NABARD & Ministry Subsidies</Link></li>
            <li><Link to="/mandi">APMC Mandi Price Feeds</Link></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div>
          © 2026 Kisan Vikas
        </div>
      </div>
    </footer>
  );
};

export default Footer;

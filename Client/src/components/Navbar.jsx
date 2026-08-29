import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Sprout, 
  TrendingUp, 
  FileText, 
  ShoppingBag, 
  LogIn, 
  UserPlus, 
  HelpCircle
} from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = (path) => location.pathname === path;

  const handleHowItWorksClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/#how-it-works');
    } else {
      const el = document.getElementById('how-it-works');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <header className="navbar">
      <div className="nav-container">
        {/* Brand Logo */}
        <Link to="/" className="brand-logo">
          <div className="brand-icon-wrap">
            <Sprout size={22} />
          </div>
          <span>Kisan Vikas</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="nav-links">
          <Link to="/marketplace" className={`nav-link ${isActive('/marketplace') ? 'active' : ''}`}>
            <ShoppingBag size={16} />
            <span>Marketplace</span>
          </Link>
          <Link to="/mandi" className={`nav-link ${isActive('/mandi') ? 'active' : ''}`}>
            <TrendingUp size={16} />
            <span>Live Mandi</span>
          </Link>
          <Link to="/schemes" className={`nav-link ${isActive('/schemes') ? 'active' : ''}`}>
            <FileText size={16} />
            <span>Govt Schemes</span>
          </Link>
          <button 
            type="button" 
            onClick={handleHowItWorksClick}
            className="nav-link nav-btn-link"
          >
            <HelpCircle size={16} />
            <span>How It Works</span>
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="nav-actions">
          <Link to="/login" className="btn btn-outline btn-sm">
            <LogIn size={15} />
            <span>Login</span>
          </Link>
          <Link to="/signup" className="btn btn-primary btn-sm">
            <UserPlus size={15} />
            <span>Get Started</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

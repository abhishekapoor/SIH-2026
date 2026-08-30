import React from 'react';
import { TrendingUp, ArrowUpRight, ArrowDownRight, Sparkles } from 'lucide-react';

const MANDI_DATA = [
  { crop: 'Tomato (Hybrid)', mandi: 'Nashik, MH', price: '₹26/kg', change: '+12.4%', isUp: true, aiAdvice: 'High Demand Expected in 3 days' },
  { crop: 'Onion (Red)', mandi: 'Lasalgaon, MH', price: '₹31/kg', change: '+4.8%', isUp: true, aiAdvice: 'Stable Supply' },
  { crop: 'Potato (Jyoti)', mandi: 'Agra, UP', price: '₹19/kg', change: '-2.1%', isUp: false, aiAdvice: 'Harvest Inflow Peak' },
  { crop: 'Basmati Rice (1121)', mandi: 'Karnal, HR', price: '₹74/kg', change: '+6.5%', isUp: true, aiAdvice: 'Export Demand Surge' },
  { crop: 'Wheat (Sharbati)', mandi: 'Sehore, MP', price: '₹34/kg', change: '+1.8%', isUp: true, aiAdvice: 'Good Price Realization' },
  { crop: 'Green Chilli (G4)', mandi: 'Guntur, AP', price: '₹48/kg', change: '+15.2%', isUp: true, aiAdvice: 'Short Supply Alert' },
  { crop: 'Apple (Shimla A)', mandi: 'Azadpur, DL', price: '₹110/kg', change: '-1.5%', isUp: false, aiAdvice: 'Cold Storage Release' },
];

const LiveMandiTicker = () => {
  return (
    <section className="mandi-ticker-section">
      <div className="ticker-wrap">
        <div className="ticker-label">
          <TrendingUp size={15} />
          <span>Live Mandi Index</span>
        </div>
        <div className="ticker-items">
          {MANDI_DATA.map((item, index) => (
            <div key={index} className="ticker-crop-item">
              <span className="ticker-crop-name">{item.crop}</span>
              <span className="ticker-crop-mandi">({item.mandi})</span>
              <span className="ticker-crop-price">{item.price}</span>
              <span className={`ticker-crop-trend ${item.isUp ? 'trend-up' : 'trend-down'}`}>
                {item.isUp ? <ArrowUpRight size={12} style={{ display: 'inline', verticalAlign: 'middle' }} /> : <ArrowDownRight size={12} style={{ display: 'inline', verticalAlign: 'middle' }} />}
                {item.change}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveMandiTicker;

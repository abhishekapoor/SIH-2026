import React from 'react';
import { ShoppingCart, Search, Filter } from 'lucide-react';
import Button from '../../../shared/components/Button';

const Marketplace = () => {
  // Placeholder for marketplace products
  const products = [];

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, margin: 0 }}>Marketplace</h1>
        <p style={{ color: '#6b7280', margin: '0.25rem 0 0 0' }}>Browse direct-from-farm commodities.</p>
      </header>

      {/* Search and Filters */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', backgroundColor: '#fff', borderRadius: '0.5rem', padding: '0.5rem 1rem', boxShadow: '0 1px 2px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb' }}>
          <Search size={20} style={{ color: '#9ca3af', marginRight: '0.75rem' }} />
          <input 
            type="text" 
            placeholder="Search crops, locations, or farmers..." 
            style={{ border: 'none', outline: 'none', width: '100%', fontSize: '1rem' }} 
          />
        </div>
        <Button variant="outline" icon={Filter}>Filters</Button>
      </div>

      {products.length === 0 ? (
        <div style={{ backgroundColor: '#fff', borderRadius: '0.75rem', padding: '4rem 2rem', textAlign: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <ShoppingCart size={48} style={{ color: '#9ca3af', margin: '0 auto 1rem' }} />
          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#374151', margin: '0 0 0.5rem 0' }}>Marketplace Empty</h3>
          <p style={{ color: '#6b7280', maxWidth: '400px', margin: '0 auto' }}>
            No farmers have listed products matching your criteria right now. Check back later!
          </p>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
           {/* Product cards will go here */}
        </div>
      )}
    </div>
  );
};

export default Marketplace;

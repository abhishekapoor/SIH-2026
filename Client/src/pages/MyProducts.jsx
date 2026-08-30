import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Store, Plus } from 'lucide-react';
import Button from '../components/common/Button';

const MyProducts = () => {
  const { user } = useAuth();
  
  // Placeholder for products state (will be fetched from API later)
  const products = []; 

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, margin: 0 }}>My Products</h1>
          <p style={{ color: '#6b7280', margin: '0.25rem 0 0 0' }}>Manage your crop listings and inventory.</p>
        </div>
        <Button variant="primary" icon={Plus}>Add New Crop</Button>
      </header>

      {products.length === 0 ? (
        <div style={{ backgroundColor: '#fff', borderRadius: '0.75rem', padding: '4rem 2rem', textAlign: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <Store size={48} style={{ color: '#9ca3af', margin: '0 auto 1rem' }} />
          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#374151', margin: '0 0 0.5rem 0' }}>No Products Listed</h3>
          <p style={{ color: '#6b7280', maxWidth: '400px', margin: '0 auto 1.5rem' }}>
            You haven't listed any crops for sale yet. Add your first crop to start receiving orders from buyers.
          </p>
          <Button variant="primary" icon={Plus}>Add Your First Crop</Button>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
           {/* Product cards will go here */}
        </div>
      )}
    </div>
  );
};

export default MyProducts;

import React, { useState, useEffect } from 'react';
import { useAuth } from '../../../auth/context/AuthContext';
import { Store, Plus, LayoutGrid, List, CheckSquare } from 'lucide-react';
import Button from '../../../shared/components/Button';
import ProductCard from '../../../shared/components/ProductCard';
import EmptyState from '../../../shared/components/EmptyState';
import LoadingState from '../../../shared/components/LoadingState';
import { productApi } from '../../../../api/productApi';
import { PRODUCT_STATUS } from '../../../../constants';

const MyProducts = () => {
  const { user } = useAuth();
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('ALL');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedIds, setSelectedIds] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, [user]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const data = await productApi.getFarmerProducts(user._id);
      setProducts(data);
    } catch (error) {
      console.error("Failed to load products", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = products.filter(p => activeTab === 'ALL' || p.status === activeTab);

  const toggleSelection = (id) => {
    setSelectedIds(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
  };

  const handleSelectAll = () => {
    if (selectedIds.length === filteredProducts.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredProducts.map(p => p._id));
    }
  };

  const handleBulkAction = async (newStatus) => {
    if (selectedIds.length === 0) return;
    try {
      await productApi.bulkUpdateStatus(selectedIds, newStatus);
      // Optimistic update
      setProducts(products.map(p => selectedIds.includes(p._id) ? { ...p, status: newStatus } : p));
      setSelectedIds([]);
    } catch (error) {
      console.error("Failed bulk update", error);
    }
  };

  const handleQuickEdit = async (id, updates) => {
    try {
      const updated = await productApi.updateProduct(id, updates);
      setProducts(products.map(p => p._id === id ? { ...p, ...updated } : p));
    } catch (error) {
      console.error("Failed to update product", error);
    }
  };

  const handleDuplicate = async (id) => {
    try {
      const result = await productApi.duplicateProduct(id);
      // Stub: in reality, refetch or push new item to state
      fetchProducts();
    } catch (error) {
      console.error("Failed to duplicate product", error);
    }
  };

  if (loading) return <LoadingState message="Loading your crop inventory..." />;

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, margin: 0, color: '#111827' }}>My Products</h1>
          <p style={{ color: '#6b7280', margin: '0.25rem 0 0 0' }}>Manage your crop listings and inventory.</p>
        </div>
        <Button variant="primary" icon={Plus}>Add New Crop</Button>
      </header>

      {/* Controls Row: Tabs, Grid/List Toggle */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid #e5e7eb', paddingBottom: '1rem' }}>
        
        {/* Status Tabs */}
        <div style={{ display: 'flex', gap: '1rem' }}>
          {['ALL', PRODUCT_STATUS.AVAILABLE, PRODUCT_STATUS.SOLD, PRODUCT_STATUS.EXPIRED].map(status => (
            <button
              key={status}
              onClick={() => { setActiveTab(status); setSelectedIds([]); }}
              style={{
                background: 'none',
                border: 'none',
                padding: '0.5rem 0',
                cursor: 'pointer',
                fontSize: '0.875rem',
                fontWeight: activeTab === status ? 700 : 500,
                color: activeTab === status ? '#065f46' : '#6b7280',
                borderBottom: activeTab === status ? '2px solid #065f46' : '2px solid transparent',
              }}
            >
              {status}
            </button>
          ))}
        </div>

        {/* View Toggle */}
        <div style={{ display: 'flex', gap: '0.25rem', backgroundColor: '#f3f4f6', padding: '0.25rem', borderRadius: '0.5rem' }}>
          <button 
            onClick={() => setViewMode('grid')}
            style={{ padding: '0.375rem', border: 'none', borderRadius: '0.25rem', cursor: 'pointer', backgroundColor: viewMode === 'grid' ? '#fff' : 'transparent', color: viewMode === 'grid' ? '#111827' : '#6b7280', boxShadow: viewMode === 'grid' ? '0 1px 2px rgba(0,0,0,0.1)' : 'none' }}
          >
            <LayoutGrid size={18} />
          </button>
          <button 
            onClick={() => setViewMode('list')}
            style={{ padding: '0.375rem', border: 'none', borderRadius: '0.25rem', cursor: 'pointer', backgroundColor: viewMode === 'list' ? '#fff' : 'transparent', color: viewMode === 'list' ? '#111827' : '#6b7280', boxShadow: viewMode === 'list' ? '0 1px 2px rgba(0,0,0,0.1)' : 'none' }}
          >
            <List size={18} />
          </button>
        </div>
      </div>

      {/* Bulk Actions Bar */}
      {selectedIds.length > 0 && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#e0e7ff', padding: '0.75rem 1rem', borderRadius: '0.5rem', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#3730a3', fontWeight: 500 }}>
            <CheckSquare size={18} />
            <span>{selectedIds.length} items selected</span>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Button size="sm" onClick={() => handleBulkAction(PRODUCT_STATUS.SOLD)}>Mark as Sold</Button>
            <Button size="sm" variant="outline" onClick={() => handleBulkAction(PRODUCT_STATUS.EXPIRED)}>Mark as Expired</Button>
          </div>
        </div>
      )}

      {/* Content */}
      {filteredProducts.length === 0 ? (
        <EmptyState 
          icon={Store}
          title={activeTab === 'ALL' ? "No Products Listed" : `No ${activeTab.toLowerCase()} products`}
          description={activeTab === 'ALL' ? "You haven't listed any crops for sale yet. Add your first crop to start receiving orders." : "No products match this filter."}
          actionText={activeTab === 'ALL' ? "Add Your First Crop" : null}
          onAction={() => {}}
        />
      ) : (
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: viewMode === 'grid' ? 'repeat(auto-fill, minmax(280px, 1fr))' : '1fr', 
          gap: '1.5rem' 
        }}>
          {viewMode === 'list' && (
             <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '-0.5rem' }}>
               <button onClick={handleSelectAll} style={{ background: 'none', border: 'none', color: '#10b981', cursor: 'pointer', fontSize: '0.875rem', fontWeight: 600 }}>
                 {selectedIds.length === filteredProducts.length ? 'Deselect All' : 'Select All'}
               </button>
             </div>
          )}
          {filteredProducts.map(product => (
            <ProductCard 
              key={product._id} 
              product={product} 
              isFarmerView={true}
              isSelected={selectedIds.includes(product._id)}
              onSelect={toggleSelection}
              onQuickEdit={handleQuickEdit}
              onDuplicate={handleDuplicate}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyProducts;

import React, { useState } from 'react';
import { Edit2, Copy, Trash2, Clock, AlertTriangle, Check, X } from 'lucide-react';
import Badge from './Badge';
import Button from './Button';
import { PRODUCT_STATUS } from '../../../constants';

const ProductCard = ({ product, isFarmerView, onQuickEdit, onDuplicate, onSelect, isSelected }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editPrice, setEditPrice] = useState(product.pricePerUnit);
  const [editQty, setEditQty] = useState(product.quantity);

  // Check if expiring soon (within 3 days)
  const isExpiringSoon = product.status === PRODUCT_STATUS.AVAILABLE && 
    new Date(product.availableUntil).getTime() - Date.now() < 3 * 24 * 60 * 60 * 1000;

  // Check if low stock (arbitrary threshold for demo)
  const isLowStock = product.status === PRODUCT_STATUS.AVAILABLE && product.quantity < 20;

  const handleSaveEdit = () => {
    if (onQuickEdit) {
      onQuickEdit(product._id, { pricePerUnit: editPrice, quantity: editQty });
    }
    setIsEditing(false);
  };

  return (
    <div style={{
      backgroundColor: '#fff',
      borderRadius: '0.75rem',
      boxShadow: isSelected ? '0 0 0 2px #10b981, 0 4px 6px -1px rgba(0, 0, 0, 0.1)' : '0 1px 3px rgba(0,0,0,0.1)',
      overflow: 'hidden',
      border: '1px solid #e5e7eb',
      position: 'relative',
      transition: 'all 0.2s',
      cursor: isFarmerView ? 'pointer' : 'default'
    }}
    onClick={() => { if(isFarmerView && onSelect) onSelect(product._id) }}
    >
      {/* Checkbox Overlay for Bulk Actions */}
      {isFarmerView && (
        <div style={{ position: 'absolute', top: '0.5rem', left: '0.5rem', zIndex: 10 }}>
          <input 
            type="checkbox" 
            checked={isSelected}
            onChange={() => {}} // Handled by div click
            style={{ width: '1.25rem', height: '1.25rem', accentColor: '#10b981', cursor: 'pointer' }}
          />
        </div>
      )}

      {/* Badges Overlay */}
      <div style={{ position: 'absolute', top: '0.5rem', right: '0.5rem', display: 'flex', gap: '0.25rem', flexDirection: 'column', alignItems: 'flex-end', zIndex: 10 }}>
        <Badge status={product.status} />
        {isExpiringSoon && (
          <Badge status="Pending" customText="Expiring Soon" size="sm" />
        )}
        {isLowStock && (
          <Badge status="Rejected" customText="Low Stock" size="sm" />
        )}
      </div>

      {/* Image Placeholder */}
      <div style={{ height: '140px', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: '3rem' }}>🌾</span>
      </div>

      <div style={{ padding: '1rem' }} onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '1.125rem', color: '#111827', fontWeight: 600 }}>{product.cropName}</h4>
            <p style={{ margin: 0, fontSize: '0.875rem', color: '#6b7280' }}>Variety: {product.variety}</p>
          </div>
          <span style={{ fontSize: '0.75rem', backgroundColor: '#f3f4f6', padding: '0.125rem 0.375rem', borderRadius: '0.25rem', color: '#4b5563' }}>
            {product.qualityGrade}
          </span>
        </div>

        <div style={{ margin: '1rem 0', padding: '0.75rem', backgroundColor: '#f9fafb', borderRadius: '0.5rem' }}>
          {isEditing ? (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
              <div>
                <label style={{ fontSize: '0.75rem', color: '#6b7280' }}>Price (₹/{product.unit})</label>
                <input 
                  type="number" 
                  value={editPrice} 
                  onChange={(e) => setEditPrice(Number(e.target.value))}
                  style={{ width: '100%', padding: '0.25rem', borderRadius: '0.25rem', border: '1px solid #d1d5db' }}
                />
              </div>
              <div>
                <label style={{ fontSize: '0.75rem', color: '#6b7280' }}>Qty ({product.unit})</label>
                <input 
                  type="number" 
                  value={editQty} 
                  onChange={(e) => setEditQty(Number(e.target.value))}
                  style={{ width: '100%', padding: '0.25rem', borderRadius: '0.25rem', border: '1px solid #d1d5db' }}
                />
              </div>
              <div style={{ gridColumn: 'span 2', display: 'flex', gap: '0.5rem', marginTop: '0.25rem' }}>
                <Button size="sm" onClick={handleSaveEdit} style={{ flex: 1 }}>Save</Button>
                <Button size="sm" variant="outline" onClick={() => setIsEditing(false)} style={{ flex: 1 }}>Cancel</Button>
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <p style={{ margin: 0, fontSize: '0.75rem', color: '#6b7280' }}>Price</p>
                <p style={{ margin: 0, fontSize: '1.125rem', fontWeight: 700, color: '#065f46' }}>₹{product.pricePerUnit} <span style={{fontSize:'0.75rem', fontWeight:400, color:'#6b7280'}}>/ {product.unit}</span></p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ margin: 0, fontSize: '0.75rem', color: '#6b7280' }}>Available</p>
                <p style={{ margin: 0, fontSize: '1rem', fontWeight: 600, color: '#111827' }}>{product.quantity} {product.unit}</p>
              </div>
            </div>
          )}
        </div>

        {isFarmerView && !isEditing && (
          <div style={{ display: 'flex', gap: '0.5rem', borderTop: '1px solid #e5e7eb', paddingTop: '0.75rem' }}>
            <button 
              onClick={() => setIsEditing(true)}
              style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem', padding: '0.375rem', backgroundColor: '#f3f4f6', border: 'none', borderRadius: '0.375rem', color: '#4b5563', cursor: 'pointer', fontSize: '0.875rem', fontWeight: 500 }}
            >
              <Edit2 size={14} /> Edit
            </button>
            <button 
              onClick={() => onDuplicate && onDuplicate(product._id)}
              style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem', padding: '0.375rem', backgroundColor: '#f3f4f6', border: 'none', borderRadius: '0.375rem', color: '#4b5563', cursor: 'pointer', fontSize: '0.875rem', fontWeight: 500 }}
            >
              <Copy size={14} /> Clone
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

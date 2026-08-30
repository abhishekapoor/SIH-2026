import axios from 'axios';

// Use the shared axios instance if configured, otherwise use direct axios
// Assuming /api is proxied in vite.config.js
const API_URL = '/api/products';

export const productApi = {
  // Fetch products for a specific farmer
  getFarmerProducts: async (farmerId, filters = {}) => {
    // Stub implementation: later replace with actual API call
    // const response = await axios.get(`${API_URL}/farmer/${farmerId}`, { params: filters });
    // return response.data;
    
    return [
      {
        _id: '1',
        cropName: 'Organic Wheat',
        variety: 'Sharbati',
        quantity: 50,
        unit: 'Quintal',
        pricePerUnit: 2500,
        qualityGrade: 'Grade A',
        availableUntil: new Date(Date.now() + 86400000 * 5).toISOString(), // 5 days from now
        status: 'AVAILABLE',
        images: []
      },
      {
        _id: '2',
        cropName: 'Basmati Rice',
        variety: 'Pusa 1121',
        quantity: 20,
        unit: 'Quintal',
        pricePerUnit: 3200,
        qualityGrade: 'Export Quality',
        availableUntil: new Date(Date.now() - 86400000 * 2).toISOString(), // 2 days ago
        status: 'EXPIRED',
        images: []
      },
      {
        _id: '3',
        cropName: 'Potatoes',
        variety: 'Kufri Jyoti',
        quantity: 100,
        unit: 'Quintal',
        pricePerUnit: 800,
        qualityGrade: 'Grade B',
        availableUntil: new Date(Date.now() + 86400000 * 15).toISOString(),
        status: 'SOLD',
        images: []
      }
    ];
  },

  // Update a single product (used for quick edit)
  updateProduct: async (productId, updateData) => {
    // const response = await axios.put(`${API_URL}/${productId}`, updateData);
    // return response.data;
    return { _id: productId, ...updateData };
  },

  // Bulk update status (e.g. mark as EXPIRED)
  bulkUpdateStatus: async (productIds, status) => {
    // const response = await axios.patch(`${API_URL}/bulk-status`, { productIds, status });
    // return response.data;
    return { success: true, count: productIds.length };
  },

  // Duplicate an existing product
  duplicateProduct: async (productId) => {
    // const response = await axios.post(`${API_URL}/${productId}/duplicate`);
    // return response.data;
    return { success: true, newId: Date.now().toString() };
  }
};

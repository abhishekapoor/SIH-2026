// PRODUCT STATUSES
export const PRODUCT_STATUS = {
  AVAILABLE: 'AVAILABLE',
  SOLD: 'SOLD',
  EXPIRED: 'EXPIRED',
};

// ORDER STATUSES
export const ORDER_STATUS = {
  REQUESTED: 'REQUESTED',
  ACCEPTED: 'ACCEPTED',
  READY: 'READY',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
};

// STATUS COLORS (Shared across the app)
export const STATUS_COLORS = {
  [PRODUCT_STATUS.AVAILABLE]: { bg: '#d1fae5', text: '#065f46' }, // Green
  [PRODUCT_STATUS.SOLD]: { bg: '#e0e7ff', text: '#3730a3' },      // Indigo
  [PRODUCT_STATUS.EXPIRED]: { bg: '#fee2e2', text: '#b91c1c' },   // Red

  [ORDER_STATUS.REQUESTED]: { bg: '#fef3c7', text: '#92400e' },   // Yellow
  [ORDER_STATUS.ACCEPTED]: { bg: '#dbeafe', text: '#1e40af' },    // Blue
  [ORDER_STATUS.READY]: { bg: '#f3e8ff', text: '#6b21a8' },       // Purple
  [ORDER_STATUS.COMPLETED]: { bg: '#d1fae5', text: '#065f46' },   // Green
  [ORDER_STATUS.CANCELLED]: { bg: '#fee2e2', text: '#b91c1c' },   // Red

  // Verification
  Pending: { bg: '#fef3c7', text: '#92400e' },
  Verified: { bg: '#d1fae5', text: '#065f46' },
  Rejected: { bg: '#fee2e2', text: '#b91c1c' },
};

// USER ROLES
export const ROLES = {
  FARMER: 'farmer',
  BUYER: 'buyer',
  ADMIN: 'admin',
};

import api from '../../shared/api/api';

export const authService = {
  // Login user with credentials
  login: async (credentials) => {
    const response = await api.post('/auth/login', credentials);
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  },

  // Unified signup with role-based profile payload
  signup: async (userData) => {
    const response = await api.post('/auth/signup', userData);
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  },

  // Logout user
  logout: () => {
    localStorage.removeItem('user');
  },

  // Retrieve stored user object
  getStoredUser: () => {
    try {
      const stored = localStorage.getItem('user');
      return stored ? JSON.parse(stored) : null;
    } catch (e) {
      console.error('Failed to parse stored user', e);
      return null;
    }
  },
};

export default authService;

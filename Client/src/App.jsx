import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './features/auth/context/AuthContext';

// Public Pages (Friend's additions)
import Landing from './features/public/pages/Landing';
import PublicMarketplace from './features/public/pages/PublicMarketplace';
import MandiLive from './features/public/pages/MandiLive';
import Schemes from './features/public/pages/Schemes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTopAndHash from './components/ScrollToTopAndHash';

// Auth
import Login from './features/auth/pages/Login';
import Signup from './features/auth/pages/Signup';

// Dashboard
import ProfileDashboard from './features/shared/pages/ProfileDashboard';
import Marketplace from './features/buyer/marketplace/pages/Marketplace';
import MyProducts from './features/farmer/products/pages/MyProducts';
import DashboardLayout from './features/shared/layouts/DashboardLayout';

import './App.css';

// Protected Route Wrapper
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) return <div>Loading...</div>;
  if (!isAuthenticated) return <Navigate to="/login" />;
  
  return children;
};

// Layout for public pages
const PublicLayout = ({ children }) => (
  <div className="app-container">
    <ScrollToTopAndHash />
    <Navbar />
    <main className="main-content">
      {children}
    </main>
    <Footer />
  </div>
);

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {/* Public Routes with Navbar/Footer */}
      <Route path="/" element={<PublicLayout><Landing /></PublicLayout>} />
      <Route path="/marketplace" element={<PublicLayout><PublicMarketplace /></PublicLayout>} />
      <Route path="/mandi" element={<PublicLayout><MandiLive /></PublicLayout>} />
      <Route path="/schemes" element={<PublicLayout><Schemes /></PublicLayout>} />
      
      {/* Auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      
      {/* Protected Dashboard Routes */}
      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<ProfileDashboard />} />
        <Route path="marketplace" element={<Marketplace />} />
        <Route path="my-products" element={<MyProducts />} />
      </Route>
    </Routes>
  );
}

export default App;

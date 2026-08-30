import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './features/auth/context/AuthContext';
import Login from './features/auth/pages/Login';
import Signup from './features/auth/pages/Signup';
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

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      
      {/* Landing Route - Redirects to Dashboard if logged in */}
      <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <ProfileDashboard />} />

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

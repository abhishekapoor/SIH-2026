import { useNavigate, Link } from 'react-router-dom';
import {
  Sprout,
  Tractor,
  Building2,
  LogOut,
  LogIn,
  UserPlus,
  ShieldCheck,
  MapPin,
  Trees,
  Droplets,
  PackageCheck,
  FileText,
  Clock,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Button from '../components/common/Button';

const Home = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const isFarmer = user?.role === 'farmer' || !!user?.farmerProfile;
  const isBuyer = user?.role === 'buyer' || !!user?.buyerProfile;
  const farmerProfile = user?.farmerProfile;
  const buyerProfile = user?.buyerProfile;

  return (
    <div className="dashboard-container">
      {/* Brand Top Bar */}
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div className="brand-badge">
            <Sprout size={24} />
          </div>
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0 }}>KrishiConnect</h2>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>Smart India Hackathon Portal</p>
          </div>
        </div>

        {isAuthenticated ? (
          <Button variant="outline" size="sm" onClick={handleLogout} icon={LogOut}>
            Sign Out
          </Button>
        ) : (
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Button variant="outline" size="sm" onClick={() => navigate('/login')} icon={LogIn}>
              Sign In
            </Button>
            <Button variant="primary" size="sm" onClick={() => navigate('/signup')} icon={UserPlus}>
              Register
            </Button>
          </div>
        )}
      </header>

      {isAuthenticated && user ? (
        <div className="dashboard-card">
          {/* User Hero Header */}
          <div className={`dashboard-hero ${isBuyer ? 'buyer-hero' : ''}`}>
            <div className="dashboard-profile-header">
              <div className={`dashboard-avatar ${isBuyer ? 'buyer-avatar' : ''}`}>
                {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
              </div>
              <div>
                <h1 className="profile-name">{user.name}</h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{user.email} {user.phone ? `• ${user.phone}` : ''}</p>
                <div className={`profile-role-badge ${isBuyer ? 'buyer-badge' : ''}`}>
                  {isFarmer ? <Tractor size={14} /> : <Building2 size={14} />}
                  <span>{isFarmer ? 'Registered Farmer (किसान)' : 'Verified Buyer / Enterprise (व्यापारी)'}</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#ffffff', padding: '0.5rem 1rem', borderRadius: 'var(--radius-full)', boxShadow: 'var(--shadow-sm)' }}>
              <Clock size={16} className="text-amber" />
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-main)' }}>
                Verification: {farmerProfile?.verificationStatus || buyerProfile?.verificationStatus || 'Pending'}
              </span>
            </div>
          </div>

          <div className="dashboard-body">
            {/* Farmer Profile Information */}
            {isFarmer && farmerProfile && (
              <div>
                <div className="section-badge-header">
                  <Trees size={18} className="text-emerald" />
                  <span>Land & Crop Cultivation Details</span>
                </div>

                <div className="profile-grid-details">
                  <div className="detail-box">
                    <div className="detail-label">Location (District/State)</div>
                    <div className="detail-value">{farmerProfile.location || 'Not Specified'}</div>
                  </div>

                  <div className="detail-box">
                    <div className="detail-label">Land Area</div>
                    <div className="detail-value">
                      {farmerProfile.landArea} {farmerProfile.landUnit || 'Acres'}
                    </div>
                  </div>

                  <div className="detail-box">
                    <div className="detail-label">Land Ownership</div>
                    <div className="detail-value">{farmerProfile.ownershipType || 'Owned'}</div>
                  </div>

                  <div className="detail-box">
                    <div className="detail-label">Irrigation Source</div>
                    <div className="detail-value">{farmerProfile.irrigationType || 'Canal'}</div>
                  </div>
                </div>

                {/* Farm Location */}
                {farmerProfile.farmLocation && (
                  <div className="detail-box" style={{ marginTop: '1rem' }}>
                    <div className="detail-label">Farm Village & Address</div>
                    <div className="detail-value" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <MapPin size={16} className="text-emerald" /> {farmerProfile.farmLocation}
                    </div>
                  </div>
                )}

                {/* Crops */}
                {farmerProfile.crops && farmerProfile.crops.length > 0 && (
                  <div style={{ marginTop: '1.25rem' }}>
                    <div className="detail-label" style={{ marginBottom: '0.5rem' }}>Active Crops Cultivated</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {farmerProfile.crops.map((crop) => (
                        <span key={crop} className="tag-chip">
                          🌾 {crop}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Buyer Profile Information */}
            {isBuyer && buyerProfile && (
              <div>
                <div className="section-badge-header">
                  <Building2 size={18} className="text-amber" />
                  <span>Trade & Procurement Specifications</span>
                </div>

                <div className="profile-grid-details">
                  <div className="detail-box">
                    <div className="detail-label">Business Name</div>
                    <div className="detail-value">{buyerProfile.businessName || 'N/A'}</div>
                  </div>

                  <div className="detail-box">
                    <div className="detail-label">Business Type</div>
                    <div className="detail-value">{buyerProfile.businessType || 'Wholesaler'}</div>
                  </div>

                  <div className="detail-box">
                    <div className="detail-label">GSTIN</div>
                    <div className="detail-value" style={{ fontFamily: 'monospace' }}>{buyerProfile.gstin || 'N/A'}</div>
                  </div>

                  <div className="detail-box">
                    <div className="detail-label">Typical Quantity</div>
                    <div className="detail-value">{buyerProfile.typicalQuantity || 'N/A'}</div>
                  </div>

                  <div className="detail-box">
                    <div className="detail-label">Quality Requirement</div>
                    <div className="detail-value">{buyerProfile.qualityRequirements || 'Grade A'}</div>
                  </div>

                  <div className="detail-box">
                    <div className="detail-label">Document Ref</div>
                    <div className="detail-value">{buyerProfile.verificationDocuments || 'Submitted'}</div>
                  </div>
                </div>

                {buyerProfile.address && (
                  <div className="detail-box" style={{ marginTop: '1rem' }}>
                    <div className="detail-label">Registered Business Address</div>
                    <div className="detail-value" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <MapPin size={16} className="text-amber" /> {buyerProfile.address}
                    </div>
                  </div>
                )}

                {buyerProfile.cropsInterested && buyerProfile.cropsInterested.length > 0 && (
                  <div style={{ marginTop: '1.25rem' }}>
                    <div className="detail-label" style={{ marginBottom: '0.5rem' }}>Commodities Interested in Buying</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {buyerProfile.cropsInterested.map((crop) => (
                        <span key={crop} className="tag-chip" style={{ background: 'var(--amber-light)', color: 'var(--amber)', borderColor: '#fde68a' }}>
                          📦 {crop}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Fallback if user object has no profile nested */}
            {!farmerProfile && !buyerProfile && (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <p style={{ color: 'var(--text-muted)' }}>You are signed in as <strong>{user.email}</strong>.</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Welcome Hero for Guests */
        <div className="dashboard-card" style={{ padding: '3.5rem 2rem', textAlign: 'center' }}>
          <div className="brand-badge" style={{ width: '64px', height: '64px', margin: '0 auto 1.5rem', borderRadius: 'var(--radius-lg)' }}>
            <Sprout size={36} />
          </div>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.75rem' }}>
            Direct Farmer-to-Buyer Marketplace
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Empowering farmers to get fair MSP-guaranteed prices and enabling verified institutional buyers to procure top-quality agricultural commodities seamlessly.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg" onClick={() => navigate('/signup')} icon={UserPlus}>
              Create New Account
            </Button>
            <Button variant="outline" size="lg" onClick={() => navigate('/login')} icon={LogIn}>
              Login with Existing Account
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

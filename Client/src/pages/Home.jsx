import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : null;

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to the App!</h1>
      {user ? (
        <div>
          <p>Hello, {user.name} ({user.email})</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>You are not logged in.</p>
          <button onClick={() => navigate('/login')}>Go to Login</button>
        </div>
      )}
    </div>
  );
};

export default Home;

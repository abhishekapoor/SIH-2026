<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTopAndHash from './components/ScrollToTopAndHash';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import MandiLive from './pages/MandiLive';
import Schemes from './pages/Schemes';
import Login from './pages/Login';
import Signup from './pages/Signup';
=======
=======
>>>>>>> f9fb799ab0cd1b42ce10c1a8c3ad1722e0ae1383
=======
>>>>>>> f9fb799ab0cd1b42ce10c1a8c3ad1722e0ae1383
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f9fb799ab0cd1b42ce10c1a8c3ad1722e0ae1383
=======
>>>>>>> f9fb799ab0cd1b42ce10c1a8c3ad1722e0ae1383
=======
>>>>>>> f9fb799ab0cd1b42ce10c1a8c3ad1722e0ae1383
import './App.css';

function App() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <Router>
      <ScrollToTopAndHash />
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/mandi" element={<MandiLive />} />
            <Route path="/schemes" element={<Schemes />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
=======
=======
>>>>>>> f9fb799ab0cd1b42ce10c1a8c3ad1722e0ae1383
=======
>>>>>>> f9fb799ab0cd1b42ce10c1a8c3ad1722e0ae1383
    <AuthProvider>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </AuthProvider>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f9fb799ab0cd1b42ce10c1a8c3ad1722e0ae1383
=======
>>>>>>> f9fb799ab0cd1b42ce10c1a8c3ad1722e0ae1383
=======
>>>>>>> f9fb799ab0cd1b42ce10c1a8c3ad1722e0ae1383
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';  // Halaman login
import CardsContainer from './assets/components/CardsContainer';  // Halaman produk
import Navbar from './assets/components/Navbar';  // Navbar yang muncul di semua halaman

const App = () => {
  return (
    <Router>
      {/* Navbar akan selalu tampil */}
      <Navbar />
      
      {/* Routing */}
      <Routes>
        {/* Halaman Login */}
        <Route path="/" element={<LoginPage />} />

        {/* Halaman Produk (CardsContainer) */}
        <Route path="/home" element={<CardsContainer />} />
        
        {/* Halaman lainnya (misalnya Profile, dll) */}
        <Route path="/profile" element={<div>Profile Page</div>} />
      </Routes>
    </Router>
  );
};

export default App;

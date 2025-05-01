import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-[#2D3E50] text-white">
      <div className="text-xl font-bold">Peach Blossom</div>
      <div className="flex space-x-4">
        <Link to="/" className="hover:text-gray-400">Home</Link>
        <Link to="/profile" className="hover:text-gray-400">Profile</Link>
        <Link to="/contact" className="hover:text-gray-400">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;

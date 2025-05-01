import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    // Logika untuk login atau validasi lebih lanjut
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FEC8D8]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        {/* Nama Toko */}
        <h1 className="text-3xl font-bold text-center text-[#FF6F61] mb-6">Peach Blossom</h1>

        {/* Form Login */}
        <h2 className="text-xl text-center text-gray-700 mb-4">Please login to continue</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="w-full py-3 bg-[#FF6F61] text-white rounded-md hover:bg-[#FF4A39] transition duration-200">
            Login
          </button>
        </form>

        {/* Link untuk Registrasi */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">
            Don't have an account? <a href="/register" className="text-[#FF6F61] hover:text-[#FF4A39]">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

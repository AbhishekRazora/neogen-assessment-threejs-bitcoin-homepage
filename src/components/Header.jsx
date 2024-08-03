// src/components/Header.jsx
import React from 'react';

function Header() {
  return (
    <header className="bg-black text-white p-8 flex justify-between items-center">
      <h1 className="text-2xl font-bold pl-5 ">Easycoin-Digital Coin Experience</h1>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#" className="hover:text-yellow-500">Get Wallet</a></li>
          <li><a href="#" className="hover:text-yellow-500">Feedback</a></li>
          <li><a href="#" className="hover:text-yellow-500">So Easy</a></li>
          <li><a href="#" className="hover:text-yellow-500">Exchanges</a></li>
          <li><a href="#" className="hover:text-yellow-500">NFT</a></li>
          <li><a href="#" className="hover:text-yellow-500">Services</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

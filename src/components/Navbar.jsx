import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="py-4 font-head uppercase">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-4xl font-bold">Jordan Keller</h1>
        <ul className="flex space-x-12 text-4xl">
          <li>
            <Link to="/" className="hover:underline">
              Work With Me.
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline">
              Good Work.
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
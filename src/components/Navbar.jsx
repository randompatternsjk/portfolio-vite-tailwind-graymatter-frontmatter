import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="py-4 font-head uppercase bg-fadedblack text-dominoivory">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-4xl font-bold">Jordan Keller</h1>
        <ul className="flex space-x-12 text-2xl">
          
          <li>
            <Link to="/goodwork" className="hover:underline">
              Good Work
            </Link>
          </li>

          <li>
            <Link to="/" className="hover:underline">
              Work With Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
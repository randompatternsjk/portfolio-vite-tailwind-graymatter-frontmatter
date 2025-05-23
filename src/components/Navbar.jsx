import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="font-head bg-fadedblack text-dominoivory py-4 uppercase">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-4xl font-bold">Jordan Keller</h1>
        <ul className="flex space-x-12 text-2xl">
          <li>
            <Link to="/goodwork" className="hover:underline">
              Good Work
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

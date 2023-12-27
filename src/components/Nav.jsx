import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-10 justify-center bg-slate-600 text-white font-semibold text-2xl py-3 items-center">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/AboutPage">About</Link>
        </li>
        <li>
          <Link to="/ContactPage">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="bg-red-100 flex justify-between h-16 items-center px-10">
      <h1>Pokemon Hunter</h1>
      <div>
        <ul className="flex">
          <li className="px-5 text-lg">
            <Link to="/">List Pokemon</Link>
          </li>
          <li className="px-5 text-lg">
            <Link to="/my-pokemon">My Pokemon</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

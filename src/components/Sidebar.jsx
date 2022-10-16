import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="bg-red-100 flex justify-between h-16 items-center px-10">
      <h1>Pokemon Hunter</h1>
      <div>
        <ul className="flex items-center">
          <li >
            <Link activeClassName="bg-red-500" className="px-5 p-2 text-lg hover:bg-red-300" to="/">List Pokemon</Link>
          </li>
          <li >
            <Link className="px-5 p-2 text-lg hover:bg-red-300" to="/my-pokemon">My Pokemon</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

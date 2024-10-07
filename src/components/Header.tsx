import React from "react";
import { User, ShoppingBag } from "./Icons";
function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4">
      <img src="/src/assets/logo-nike.png" alt="" />

      <nav>
        <ul className="flex gap-8">
          <li>
            <a href="#">New Releases</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">Kids</a>
          </li>
          <li>
            <a href="#">Customize</a>
          </li>
        </ul>
      </nav>

      <div className="text-2xl flex gap-4">
        <button>
          <User />
        </button>
        <button>
          <ShoppingBag />
        </button>
      </div>
    </header>
  );
}

export default Header;

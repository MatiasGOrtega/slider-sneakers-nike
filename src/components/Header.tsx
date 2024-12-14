import React from "react";
import { User, ShoppingBag, Menu, Close } from "./Icons";
function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log("open menu");
  };

  return (
    <header className="relative flex flex-wrap z-50 justify-between items-center px-8 py-4">
      <img src="/src/assets/logo-nike.png" alt="" />

      <nav className="hidden md:flex gap-8">
        <ul className="flex gap-8 [&>li>a:hover]:underline">
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

      <nav
        className={`${
          menuOpen ? "fixed" : "hidden"
        } bg-black bg-opacity-90 top-0 left-0 w-full h-full flex justify-center items-center md:hidden`}
      >
        <ul className="flex flex-col items-center gap-8 [&>li>a:hover]:underline">
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
          <button className="group" onClick={handleMenu}>
            <Close />
          </button>
        </ul>
      </nav>

      <div className="text-2xl flex gap-4">
        <button className="group md:hidden" onClick={handleMenu}>
          <Menu />
        </button>
        <button className="group">
          <User />
        </button>
        <button className="group">
          <ShoppingBag />
        </button>
      </div>
    </header>
  );
}

export default Header;

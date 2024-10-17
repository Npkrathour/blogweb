import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt4 } from "react-icons/hi";
import { useState } from "react";
import Logo from "../../assets/logo-black.png";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <header>
      <nav className="lg:flex justify-between items-center text-black py-5 px-10 md:hidden hidden  shadow-lg">
        <Link to="/">
          <img src={Logo} alt="Logo" className="w-20" />
        </Link>
        <div className="navLinks">
          <ul className="flex justify-center items-center gap-10">
            <li>
              <NavLink className="text-base font-medium font-inter" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="text-base font-medium font-inter" to="about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="text-base font-medium font-inter" to="service">
                Service
              </NavLink>
            </li>
            <li>
              <NavLink className="text-base font-medium font-inter" to="portfolio">
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink className="text-base font-medium font-inter" to="contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <div className="lg:hidden">
        <div className="md:flex flex justify-between items-center  text-black py-4 px-5">
          <Link to="/" className="w-20">
            <img src={Logo} alt="Logo" className="w-20" />
          </Link>
          <span>
            <HiMenuAlt4 className="text-4xl" onClick={handleToggle} />
          </span>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`bg-sky-800 px-5 py-2 transition-all duration-300 absolute left-0 right-0 ${
            toggle ? "block" : "hidden"
          }`}
        >
          <li className="py-2">
            <NavLink to="/" className="text-white text-base font-normal" onClick={handleToggle}>
              Home
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink to="about" className="text-white text-base font-normal" onClick={handleToggle}>
              About
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink to="service" className="text-white text-base font-normal" onClick={handleToggle}>
              Service
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink to="portfolio" className="text-white text-base font-normal" onClick={handleToggle}>
              Portfolio
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink to="contact" className="text-white text-base font-normal" onClick={handleToggle}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

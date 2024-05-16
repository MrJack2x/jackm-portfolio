import { useState } from "react";
import { Link } from "react-scroll";
import Logo from "/icon.png";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  function toggleNav() {
    setNavOpen(!navOpen);
  }

  return (
    <div className="fixed z-100 w-full">
      {/* Primary Navigation */}
      <div className="flex justify-between bg-[#ecf0f3] px-8 py-4 w-full shadow-md">
        <div className="flex justify-start items-center space-x-4 cursor-pointer">
          <Link to="hero" smooth={true} duration={500}>
            <img
              src={Logo}
              alt="Logo"
              style={{ width: "125px", height: "50px" }}
            />
          </Link>
        </div>
        <nav className="flex justify-end">
          <ul className="hidden md:flex items-center justify-center gap-8">
            <li className="cursor-pointer uppercase text-sm hover:text-primary duration-300">
              <Link to="hero" smooth={true} duration={500} onClick={toggleNav}>
                Home
              </Link>
            </li>
            <li className="cursor-pointer uppercase text-sm hover:text-primary duration-300">
              <Link to="about" smooth={true} duration={500} onClick={toggleNav}>
                About
              </Link>
            </li>
            <li className="cursor-pointer uppercase text-sm hover:text-primary duration-300">
              <Link
                to="skills"
                smooth={true}
                duration={500}
                onClick={toggleNav}
              >
                Skills
              </Link>
            </li>
            <li className="cursor-pointer uppercase text-sm hover:text-primary duration-300">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                onClick={toggleNav}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center cursor-pointer">
            <AiOutlineMenu size={25} onClick={toggleNav} />
          </div>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div
        className={
          navOpen
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-[#000]/70 ease-in duration-500"
            : ""
        }
      >
        {/* Side Menu */}
        <div
          className={
            navOpen
              ? "fixed left-0 top-0 w-[65%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] h-screen top-0 p-10"
          }
        >
          <div className="flex w-full items-center justify-between">
            <Link to="home" smooth={true} duration={300}>
              <img
                src={Logo}
                alt="Logo"
                style={{ width: "87px", height: "35px" }}
              />
            </Link>
            <div
              onClick={toggleNav}
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
            >
              <AiOutlineClose size={20} />
            </div>
          </div>
          <p className="uppercase py-4 tracking-widest text-[#5651e5]">
            Let&#39;s Connect
          </p>
          <nav>
            <ul className="uppercase">
              <Link to="hero" smooth={true} duration={300}>
                <li
                  onClick={() => setNavOpen(false)}
                  className="py-4 text-sm cursor-pointer"
                >
                  Home
                </li>
              </Link>
              <Link to="about" smooth={true} duration={300}>
                <li
                  onClick={() => setNavOpen(false)}
                  className="py-4 text-sm cursor-pointer"
                >
                  About
                </li>
              </Link>
              <Link to="skills" smooth={true} duration={300}>
                <li
                  onClick={() => setNavOpen(false)}
                  className="py-4 text-sm cursor-pointer"
                >
                  Skills
                </li>
              </Link>
              <Link to="contact" smooth={true} duration={300}>
                <li
                  onClick={() => setNavOpen(false)}
                  className="py-4 text-sm cursor-pointer"
                >
                  Contact
                </li>
              </Link>
            </ul>
            <div className="py-10">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Socials
              </p>
              {/* Social Icons */}
              <div className="flex items-center gap-8 mt-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/jack-michell/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn size={20} />
                  </div>
                </a>
                <a
                  href="https://github.com/jrmichell"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub size={20} />
                  </div>
                </a>
                <Link to="contact" smooth={true} duration={300}>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineMail size={20} />
                  </div>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

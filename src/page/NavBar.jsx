import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

import logo from "../assets/Logo/logo.png";
import Icons from "../components/NavBar/Icons";
const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;

      if (newWidth > 800) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <nav className={`${
      menuOpen ? "fixed md:relative h-[100vh] md:h-auto w-[100%] md:w-auto bg-[#f5f5fa] z-50" : " relative py-4 h-auto"
    }`}>
      <div className="max-w-6xl px-4 mx-auto">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between  pb-2">
          <Link to="/" className="items-center flex">
            <img
              src={logo}
              className="self-center h-[60px] text-2xl font-semibold whitespace-nowrap dark:text-white"
            ></img>
          </Link>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-[#2b2b2b] dark:focus:ring-[#2b2b2b]"
            aria-controls="navbar-default"
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } md:w-auto w-full md:block transition-all duration-300 ease-in-out`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4   rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  ">
              <li className="flex items-center ">
                <NavLink
                  to="/"
                  className="py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#dbbb49] md:p-0 dark:text-white md:dark:hover-text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover-bg-transparent flex items-center"
             
                  aria-current="page"
                >
                  Perros
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-down ml-[5px]"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </NavLink>
              </li>
              <li className="flex items-center ">
                <NavLink
                  to="/"
                  className="py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#dbbb49] md:p-0 dark:text-white md:dark:hover-text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover-bg-transparent flex items-center"
                  
                  aria-current="page"
                >
                  Gatos
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-down ml-[5px]"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#dbbb49] md:p-0 dark:text-white md:dark:hover-text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover-bg-transparent"
              
                  aria-current="page"
                >
                  Ofertas
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#dbbb49] md:p-0 dark:text-white md:dark:hover-text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover-bg-transparent"
              
                  aria-current="page"
                >
                  Marcas
                </NavLink>
              </li>

              <div className="flex-col mt-2 md:hidden border-t border-gray-400">
                <li>
                  <NavLink
                    to="/"
                    className="block mt-2 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#dbbb49] md:p-0 dark:text-white md:dark:hover-text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover-bg-transparent"
                
                    aria-current="page"
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#dbbb49] md:p-0 dark:text-white md:dark:hover-text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover-bg-transparent"
                 
                    aria-current="page"
                  >
                    Favorito
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#dbbb49] md:p-0 dark:text-white md:dark:hover-text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover-bg-transparent"
                  
                    aria-current="page"
                  >
                    Mi carrito
                  </NavLink>
                </li>
                <form className="mt-5">
                  <label
                    htmlFor="search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="search"
                      className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search"
                      required
                    />
                    <button
                      type="submit"
                      className="text-white absolute end-2.5 bottom-2.5 bg-[#dbbb49] hover:bg-[#dbbb49] focus:ring-2 focus:outline-none focus:ring-[#dbbb49] font-medium rounded-lg text-sm px-4 py-2 "
                    >
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </ul>
          </div>
          <div className="hidden md:flex">
            <a
              className={` ${
                menuOpen ? "hidden" : "flex items-center"
              } text-gray-700 px-2`}
              href="#"
            >
              <Icons />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

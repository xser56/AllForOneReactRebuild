
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => 
  {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => 
  {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (

    <nav className=" flex justify-center w-full z-20 bg-transparent">
      <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
        <ul className="flex justify-evenly p-4 md:p-0 mt-4 border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-3xl">
          
          {/* Home Link */}
          <li>
            <NavLink
              to="/"
              className="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-stone-300 md:p-0 dark:text-white md:dark:hover:text-stone-300 dark:hover:bg-gray-300 dark:hover:text-stone-300 md:dark:hover:bg-transparent"
            >
              Home
            </NavLink>
          </li>

          {/* Dropdown Menu */}
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center justify-between w-full py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 md:w-auto dark:text-white md:dark:hover:text-stone-300 dark:focus:text-stone-300 dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent not-italic"
            >
              Repository
              <svg
                className={`w-2.5 h-2.5 ms-2.5 transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            {isDropdownOpen && 
            (
              <div className=" mt-2 bg-black divide-gray-100 rounded-lg shadow-lg z-20">
                <ul className="py-2 text-sm text-gray-300 dark:text-gray-400">
                  <li>
                    <NavLink
                      to="/helloWorld"
                      className="block px-4 py-2 hover:bg-gray-700 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Mini Ch [1] <span className="dot-nav"></span> Hello World
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/Adding"
                      className="block px-4 py-2 hover:bg-gray-700 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Mini Ch [2] <span className="dot-nav"></span> Adding Numbers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/askingQuestions"
                      className="block px-4 py-2 hover:bg-gray-700 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Mini Ch [3] <span className="dot-nav"></span> Asking Questions
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/GreaterOrLess"
                      className="block px-4 py-2 hover:bg-gray-700 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Mini Ch [4] <span className="dot-nav"></span> Greater Or Less
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/MadLib"
                      className="block px-4 py-2 hover:bg-gray-700 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Mini Ch [5] <span className="dot-nav"></span>  MadLib
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/OddOrEven"
                      className="block px-4 py-2 hover:bg-gray-700 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Mini Ch [6] <span className="dot-nav"></span> Odd Or Even
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/ReverseItAlpha"
                      className="block px-4 py-2 hover:bg-gray-700 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Mini Ch [7] <span className="dot-nav"></span> Reverse It Alhpa
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/ReverseItNumb"
                      className="block px-4 py-2 hover:bg-gray-700 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Mini Ch [8] <span className="dot-nav"></span> Reverse It Numbers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/Magic8Ball"
                      className="block px-4 py-2 hover:bg-gray-700 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Mini Ch [9] <span className="dot-nav"></span> Magic 8 Ball
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/ResturantPicker"
                      className="block px-4 py-2 hover:bg-gray-700 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Mini Ch [10] <span className="dot-nav"></span> Resturant Picker
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

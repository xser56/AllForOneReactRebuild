import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="flex justify-center w-full z-20 bg-transparent">
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
          <li className="relative min-w-[180px]"> {/* Consistent width */}
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

            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-full bg-black divide-gray-100 rounded-lg shadow-lg z-20">
                <ul className="py-2 text-sm text-gray-300 dark:text-gray-400">
                  {[
                    { to: "/helloWorld", label: "Hello World" },
                    { to: "/Adding", label: "Adding Numbers" },
                    { to: "/askingQuestions", label: "Asking Questions" },
                    { to: "/GreaterOrLess", label: "Greater Or Less" },
                    { to: "/MadLib", label: "MadLib" },
                    { to: "/OddOrEven", label: "Odd Or Even" },
                    { to: "/ReverseItAlpha", label: "Reverse It Alpha" },
                    { to: "/ReverseItNumb", label: "Reverse It Numbers" },
                    { to: "/Magic8Ball", label: "Magic 8 Ball" },
                    { to: "/ResturantPicker", label: "Restaurant Picker" },
                  ].map((item, index) => (
                    <li key={index}>
                      <NavLink
                        to={item.to}
                        className="block px-4 py-2 hover:bg-gray-700 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Mini Ch [{index + 1}] <span className="dot-nav"></span> {item.label}
                      </NavLink>
                    </li>
                  ))}
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

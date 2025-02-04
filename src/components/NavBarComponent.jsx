import { Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom"

const NavBarComponent = () => {
    return (
    <Navbar className="absolute top-0 left-1/2 transform -translate-x-1/2 flex justify-center w-full max-w-6xl z-20 bg-transparent">
<div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
        <ul className="flex justify-evenly p-4 md:p-0 mt-4 border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-3xl">
        <li>
          <NavLink to="/" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-stone-300 md:p-0 dark:text-white md:dark:hover:text-stone-300 dark:hover:bg-gray-300 dark:hover:text-stone-300 md:dark:hover:bg-transparent">Home</NavLink>

          <NavLink to='/helloWorld' className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mini Ch [1] <span className="dot-nav"></span> Hello World</NavLink>
        </li>
        <li>
            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 md:w-auto dark:text-white md:dark:hover:text-stone-300 dark:focus:text-stone-300 dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent not-italic">
                Repository <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg>
</button>

  <div id="dropdownNavbar" className="z-10 hidden font-normal bg-black divide-y divide-gray-100 rounded-lg shadow-sm justify-between">
                <ul className="py-2 text-sm text-gray-600 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <NavLink to='./' className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mini Ch [1] <span className="dot-nav"></span> Hello World</NavLink>
                  </li>
                  {/* <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mini Ch [2] <span className="dot-nav"></span> Asking Questions</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mini Ch [3] <span className="dot-nav"></span> Adding Two Numbers</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mini Ch [4] <span className="dot-nav"></span> MadLib</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mini Ch [5] <span className="dot-nav"></span> Odd Or Even</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mini Ch [6] <span className="dot-nav"></span> Reverse It (Alphanumeric)</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mini Ch [7] <span className="dot-nav"></span> Reverse It (Numbers only)</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mini Ch [8] <span className="dot-nav"></span> Magic 8 Ball</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mini Ch [9] <span className="dot-nav"></span> Guess It</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mini Ch [10] <span className="dot-nav"></span> Restaurant Picker</a>
                  </li> */}
                </ul>
            </div>
        </li>
        <li>
          {/* <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-stone-300 md:p-0 dark:text-white md:dark:hover:text-stone-300 dark:hover:bg-gray-300 dark:hover:text-stone-300 md:dark:hover:bg-transparent">About</a> */}
        </li>
      </ul>
    </div>
    </Navbar>
    )
}

export default NavBarComponent
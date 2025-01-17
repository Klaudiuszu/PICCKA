import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "next-translations/hooks";
import { namespaces } from "@constants/namespaces";
import LanguageToggle from "../LanguageToggle";

const PizzaHamburgerMenu = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { tString } = useTranslation(namespaces.common);

  return (
    <div className="relative z-20">
      <button
        onClick={() => setNavbarOpen(!navbarOpen)}
        className="relative flex items-center text-2xl transition-transform transform hover:rotate-12 z-50"
      >
        {!navbarOpen &&
          <Bars3Icon className="h-8 w-8" />
        }
      </button>
      <div
        className={`fixed top-0 right-0 h-screen w-[400px] bg-yellow-100 shadow-lg transition-transform duration-300 ease-in-out ${
          navbarOpen ? "translate-x-0" : "translate-x-full"
        } z-40`}
      >
        <button
          onClick={() => setNavbarOpen(false)}
          className={`${!navbarOpen && 'invisible'} absolute top-8 right-4 text-2xl transition-transform transform hover:rotate-12`}
        >
          <XMarkIcon className="h-8 w-8" />
        </button>
        <ul className="flex flex-col items-center h-full text-base justify-between">
          <li className="w-full h-full flex justify-center items-center hover:bg-yellow-200 transition-colors duration-100">
            <a href="#whoWeAre" className="w-full text-center">
              {tString("pizzaHamburgerMenu.navA")}
            </a>
          </li>
          <li className="w-full h-full flex justify-center items-center hover:bg-yellow-300 transition-colors duration-100">
            <a href="#offer" className="w-full text-center">
              {tString("pizzaHamburgerMenu.navB")}
            </a>
          </li>
          <li className="w-full h-full flex justify-center items-center hover:bg-yellow-400 transition-colors duration-100">
            <a href="#contact" className="w-full text-center">
              {tString("pizzaHamburgerMenu.navC")}
            </a>
          </li>
          <li className="w-full h-full flex justify-center items-center hover:bg-yellow-500 transition-colors duration-100">
            <LanguageToggle isHidden={false} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PizzaHamburgerMenu;

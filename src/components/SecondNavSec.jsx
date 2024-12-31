import { memo, useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSSR, useTranslation } from "react-i18next";
import { FiMenu } from "react-icons/fi";
import React from 'react';
const links = [
  { key: "home", path: "/" },
  { key: "favorites", path: "/favorites" },
  { key: "contacts", path: "/contacts" },
];
function BigScreensNav() {
  const { t } = useTranslation();

  return <ul className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 md:gap-12 font-bold text-base md:text-lg">
    {links.map(({ key, path }) => (
      <li key={key} className="px-1">
        <NavLink
          to={path}
          className={({ isActive }) =>
            `block px-4 py-2 ${isActive ? "text-PrimaryBlue" : ""}`
          }
        >
          {t(`nav.links.${key}`)}
        </NavLink>
      </li>
    ))}
  </ul>
}

function SecondNavSec() {
  const [showNavInSmScreens, setShowNavInSmScreens] = useState(false);
  const handleNavVisable = useCallback(() => {
    setShowNavInSmScreens(prev => !prev);
  }, [])
  return (
    <nav className="flex flex-col justify-between border-b px-4 md:px-32 py-2">
      <div className="flex justify-between items-center">
        <NavLink to="/">
          <div className="relative w-20 md:w-28 mb-2 md:mb-0 aspect-square">
            <img
              alt='logoAlt'
              src="images/logo.webp"
              className="absolute top-0 left-0 w-full h-full object-contain"
              width="295"
              height="98"
            />
          </div>
        </NavLink>
        <button onClick={handleNavVisable} className="md:hidden text-3xl text-gray-400 rounded-md px-1 border">
          <FiMenu />
        </button>
        <div className="hidden md:block">
          <BigScreensNav />
        </div>
      </div>
      <div onClick={handleNavVisable} className={`${showNavInSmScreens ? 'animate-navDown' : 'animate-navUp'} md:hidden`}>
        <BigScreensNav />
      </div>
    </nav>
  );
}

export default memo(SecondNavSec);
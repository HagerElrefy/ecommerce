import { memo } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

function SecondNavSec() {
  const { t } = useTranslation();

  const links = [
    { key: "home", path: "/" },
    { key: "favorites", path: "/favorites" },
    { key: "contacts", path: "/contacts" },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-between items-center border-b px-4 md:px-32 py-2">
      <NavLink to="/">
        <div className="relative w-20 md:w-28 mb-2 md:mb-0 aspect-square">
          <img
            alt={t("nav.logoAlt")} 
            src="images/logo.webp"
            className="absolute top-0 left-0 w-full h-full object-contain"
            width="295"
            height="98"
          />
        </div>
      </NavLink>

      <ul className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-12 font-bold text-base md:text-lg">
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
    </div>
  );
}

export default memo(SecondNavSec);
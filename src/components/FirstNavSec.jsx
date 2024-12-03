import { FaRegUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import CartLink from "./CartLink";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { change } from "../redux/slices/languageSlice";
import React from 'react';

function FirstNavSec() {

  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const handleLang = (e) => {
    i18n.changeLanguage(e.target.value); 
    dispatch(change());
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center border-b px-4 md:px-32 py-2">
      <select
        aria-label={t("nav.language")} // Use "nav.language" key
        name="language"
        id="lang"
        onChange={handleLang}
        className="mb-2 md:mb-0 text-sm md:text-base"
      >
        <option value="en">{t("nav.EN")}</option> {/* Use "nav.EN" key */}
        <option value="ar">{t("nav.AR")}</option> {/* Use "nav.AR" key */}
      </select>
      <ul className="flex flex-col md:flex-row justify-between items-center gap-5 text-xl md:text-base">
        <li>
          <NavLink to="" className="flex items-center gap-1">
            <span className="text-lg">
              <FaRegUser />
            </span>{" "}
            {t("nav.My profile")} {/* Use "nav.My profile" key */}
          </NavLink>
        </li>
        <li>
          <CartLink />
        </li>
      </ul>
    </div>
  );
}

export default FirstNavSec;

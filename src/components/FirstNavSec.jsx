import { FaRegUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import CartLink from "./CartLink";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { change } from "../redux/slices/languageSlice";
import React from 'react';

function FirstNavSec() {
  const user = useSelector(state => state.user.user);
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const handleLang = (e) => {
    i18n.changeLanguage(e.target.value);
    dispatch(change());
  };


  return (
    <div className="flex flex-col md:flex-row justify-between items-center border-b py-5 px-4 md:px-32">
      <select
        aria-label={t("nav.language")}
        name="language"
        id="lang"
        onChange={handleLang}
        className="mb-2 md:mb-0 text-sm md:text-base"
      >
        <option value="en">{t("nav.EN")}</option>
        <option value="ar">{t("nav.AR")}</option>
      </select>
      <ul className="flex flex-col md:flex-row justify-between items-center gap-5 text-xl md:text-base">
        {
          user.firstName ? <h5 className="flex gap-1 items-center">
            <span className="text-lg">
              <FaRegUser />
            </span>
            <span>{` ${user.firstName}`}</span>
          </h5>
            :
            <li>
              <NavLink to="signUp" className="font-semibold px-2 py-1">
                {t("nav.signUP")}
              </NavLink>
            </li>
        }
        <li>
          <CartLink />
        </li>
      </ul>
    </div>
  );
}

export default FirstNavSec;

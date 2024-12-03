import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import english from "./languages/en.json"; 
import arabic from "./languages/ar.json"; 

i18next
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: english, 
      },
      ar: {
        translation: arabic, 
      },
    },
    lng: "en", // Default language
    fallbackLng: "en", // Fallback language
    interpolation: {
      escapeValue: false, // React already escapes from XSS
    },
  });

export default i18next;

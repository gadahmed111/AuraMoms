import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: "Home",
      about: "About",
      contact: "Contact",
      shop: "Shop",
      signUp: "Sign Up",
    },
  },
  fr: {
    translation: {
      home: "Accueil",
      about: "À propos",
      contact: "Contact",
      shop: "Boutique",
      signUp: "S'inscrire",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;

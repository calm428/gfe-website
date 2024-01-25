"use client"

import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import { English_JSON, Spanish_JSON } from "./public/locales"

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: English_JSON,
    },
    es: {
      translation: Spanish_JSON,
    },
  },
  lng: localStorage.getItem("lang") || "en",
  fallbackLng: localStorage.getItem("lang") || "en",

  interpolation: {
    escapeValue: false,
  },
})

export default i18n

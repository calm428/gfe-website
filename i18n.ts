"use client"

import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import { Chinese_JSON, English_JSON, Spanish_JSON } from "./public/locales"

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: English_JSON,
    },
    es: {
      translation: Spanish_JSON,
    },
    cn: {
      translation: Chinese_JSON,
    },
  },
  lng:
    typeof window !== "undefined"
      ? window.localStorage.getItem("lang") || "en"
      : "en",
  fallbackLng:
    typeof window !== "undefined"
      ? window.localStorage.getItem("lang") || "en"
      : "en",

  interpolation: {
    escapeValue: false,
  },
})

export default i18n

import { LanguageContext } from "../context/LanguageContext";

import { useContext } from "react";
export const useLanguage = () => {
  const props = useContext(LanguageContext);
  return props;
};
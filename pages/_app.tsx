import '../styles/globals.css';
import LanguageContextProvider from '../src/context/LanguageContext';

import { initializeTranslations } from "next-translations/hooks"; 


export default function App({ Component, pageProps }) {
  initializeTranslations(pageProps?.translations);
  return (
    <LanguageContextProvider>
        <Component {...pageProps} />
    </LanguageContextProvider>
  )
}
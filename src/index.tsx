import React, { useContext, useState } from 'react';

const I18nContext = React.createContext(['', () => {}]);

export const I18nProvider = ({ children }) => {
  const state = useState();

  return (
    <I18nContext.Provider value={state}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n({ languages, defaultLang }) {
  const [lang, setLang] = useContext(I18nContext);

  //(defaultLang || Object.keys(languages)[0]);

  function t(string, ...rest) {
    const keys = string.split('.');
    let val = languages[lang];

    try {
      while (typeof val !== 'string') val = val[keys.shift()];
      return val;
    } catch (error) {
      return string;
    }
  }

  return { t, setLang };
}

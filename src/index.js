import { useState } from 'react';

export default function useI18n({ languages, defaultLang }) {
  const [lang, setLang] = useState(defaultLang || Object.keys(languages)[0]);

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

import React, { createContext, useContext, useState } from "react";

const lang = window.localStorage.getItem("lang") || "ru";

export const LocaleContext = createContext({
    localeMode: lang,
    toggleLocaleMode: () => { }
});

export const useLocale = () => useContext(LocaleContext);

export const LocaleProvider = ({ children }) => {
    const [locale, setLocale] = useState(lang);

    const toggle = () => {
        const lang = locale === "en" ? "ru" : "en";
        setLocale(lang);
        window.localStorage.setItem("lang", lang);
    };

    return (
        <LocaleContext.Provider
            value={{ localeMode: locale, toggleLocaleMode: toggle }}
        >
            {children}
        </LocaleContext.Provider>
    );
};

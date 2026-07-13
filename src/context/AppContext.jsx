import { createContext, use, useContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { content } from "../data/data";

const AppContext = createContext();

export function AppProvider({ children }) {
    const [lang, setLang] = useLocalStorage("lang", "tr");
    const [theme, setTheme] = useLocalStorage("theme", "light");

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
    }, [theme]);

    const toggleLang = () => setLang(lang === "tr" ? "en" : "tr");
    const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

    const text = content[lang];

    return (
        <AppContext.Provider value={{ lang, theme, text, toggleLang, toggleTheme }}>
            {children}
        </AppContext.Provider>
    );
}

export function useApp() {
    return useContext(AppContext);
}

import { useApp } from "../context/AppContext";

export default function Header() {
    const { text, theme, toggleLang, toggleTheme } = useApp();

    return (
        <header className="flex items-center justify-between pt-8">
            <h1 className="text-3xl font-bold italic text-[#CBF281]">
                {text.header.logo}
            </h1>
            <div className="flex items-center gap-2 text-white text-sm">
                <button onClick={toggleTheme} className="font-bold tracking-wide">
                    {theme === "light" ? text.header.darkMode : text.header.lightMode}
                </button>
                <span>|</span>
                <button onClick={toggleLang} className="font-bold tracking-wide">
                    {text.header.langToggle}
                </button>
            </div>
        </header>
    );
}
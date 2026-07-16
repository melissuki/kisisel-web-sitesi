import { useApp } from "../context/AppContext";

export default function Header() {
  const { text, theme, toggleLang, toggleTheme } = useApp();

  return (
    <header className="flex items-center justify-between pt-8">
      <h1 className="text-3xl font-bold italic text-[#CBF281]">
        {text.header.logo}
      </h1>
      <div className="flex items-center gap-4 text-sm">
        <button
          onClick={toggleLang}
          className="font-bold tracking-wide text-[#CBF281] dark:text-[#8F88FF]"
        >
          {text.header.langToggle}
        </button>
        <span className="text-[#4731D3] dark:text-white"></span>
        <button
          onClick={toggleTheme}
          aria-label="Tema değiştir"
          className="w-14 h-7 rounded-full bg-[#3A3A3A] dark:bg-[#8F88FF] relative transition-colors"
        >
          <span
            className={`absolute top-1 w-5 h-5 rounded-full flex items-center justify-center text-[10px] transition-all duration-300 ${
              theme === "dark" ? "left-1 bg-transparent" : "left-8 bg-[#FFE86E]"
            }`}
          >
            {theme === "dark" ? "🌙" : ""}
          </span>
        </button>
        <button
          onClick={toggleTheme}
          className="font-bold tracking-wide text-[#4731D3] dark:text-[#D9D9D9]"
        >
          {theme === "light" ? text.header.darkMode : text.header.lightMode}
        </button>
      </div>
    </header>
  );
}
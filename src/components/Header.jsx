import { useApp } from "../context/AppContext";

export default function Header() {
  const { text, theme, toggleLang, toggleTheme } = useApp();

  return (
    <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between pt-8">
      <h1 className="text-3xl font-bold italic text-[#CBF281] whitespace-nowrap">
        {text.header.logo}
      </h1>

      <div className="flex flex-col items-start gap-3 md:flex-row md:items-center md:gap-4 text-sm">
        <button
          onClick={toggleLang}
          className="font-bold tracking-wide text-[#CBF281] dark:text-[#8F88FF] whitespace-nowrap"
        >
          {text.header.langToggle}
        </button>

        <span className="hidden md:inline text-[#CBF281] md:text-[#4731D3] dark:text-white">|</span>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Tema değiştir"
            className="w-14 h-7 rounded-full bg-[#3A3A3A] dark:bg-[#8F88FF] relative transition-colors shrink-0"
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
            className="font-bold tracking-wide text-[#CBF281] md:text-[#4731D3] dark:text-[#D9D9D9] whitespace-nowrap"
          >
            {theme === "light" ? text.header.darkMode : text.header.lightMode}
          </button>
        </div>
      </div>
    </header>
  );
}
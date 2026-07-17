import { useApp } from "../context/AppContext";

export default function Header() {
  const { text, theme, toggleLang, toggleTheme } = useApp();

  return (
    <header className="pt-8 px-[10%] flex flex-col gap-4 md:px-0 md:grid md:grid-cols-[4fr_1fr] md:items-center">
      <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between md:pl-[12.5%] md:pr-10">
        <h1 className="text-3xl font-bold italic text-[#CBF281] whitespace-nowrap">
          {text.header.logo}
        </h1>
        <button
          onClick={toggleLang}
          className="font-bold tracking-wide text-[#CBF281] dark:text-[#8F88FF] whitespace-nowrap text-sm"
        >
          {text.header.langToggle}
        </button>
      </div>

      <div className="flex items-center gap-3 md:pl-2">
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
          className="font-bold tracking-wide text-[#CBF281] md:text-[#4731D3] dark:text-[#D9D9D9] whitespace-nowrap text-sm"
        >
          {theme === "light" ? text.header.darkMode : text.header.lightMode}
        </button>
      </div>
    </header>
  );
}
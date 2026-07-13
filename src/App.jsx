import { useApp } from "./context/AppContext";

function App() {
  const { text, lang, theme, toggleLang, toggleTheme } = useApp();

  return (
    <div className="min-h-screen bg-white dark:bg-[#252128]">
      <h1 className="text-4xl font-bold text-purple-700 dark:text-lime-300">
        {text.hero.title}
      </h1>
      <button onClick={toggleLang}>dil: {lang}</button>
      <button onClick={toggleTheme}>tema: {theme}</button>
    </div>
  );
}

export default App;



import { useApp } from "../context/AppContext";
import heroImg from "../assets/hero.png";

export default function Hero() {
  const { text } = useApp();

  return (
    <section className="flex flex-col md:flex-row items-center gap-10 pt-20 pb-40">
      <div className="flex-1 flex flex-col gap-6 pr-12 md:pr-0">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#CBF281] leading-tight">{text.hero.title}</h2>
        <p className="text-white text-2xl leading-relaxed">{text.hero.subtitle}</p>
        <div className="flex gap-4">
          <a href="https://github.com/melissuki" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white text-[#3730A3] font-medium px-6 py-2 rounded-md">{text.hero.github}</a>
          <a href="https://www.linkedin.com/in/melis-su-kaya-397529248/" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white text-[#3730A3] font-medium px-6 py-2 rounded-md">{text.hero.linkedin}</a>
        </div>
      </div>
      <img src={heroImg} alt="Portre fotoğrafım" className="w-[350px] rounded-xl object-cover" />
    </section>
  );
}
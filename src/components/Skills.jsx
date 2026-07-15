import { useApp } from "../context/AppContext";
import { skills } from "../data/data";

export default function Skills() {
  const { text } = useApp();

  return (
    <section className="px-[10%] py-28 flex flex-col md:flex-row gap-10 max-w-[1440px] mx-auto">
      <h2 className="text-4xl font-bold text-[#4731D3] dark:text-[#CBF281] w-48 shrink-0">
        {text.skills.title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-32 gap-y-16 flex-1">
        {skills.map((skill) => (
          <div key={skill.id} className="flex items-center gap-6">
            <img src={skill.icon} alt={skill.name} className="w-24 h-24 rounded-lg object-contain" />
            <p className="text-2xl font-medium text-gray-500 dark:text-gray-300">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
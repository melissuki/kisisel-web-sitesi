import { useApp } from "../context/AppContext";
import { projects } from "../data/data";

export default function Projects() {
  const { text, lang } = useApp();

  return (
    <section className="bg-[#CBF281] dark:bg-[#211F0B] py-24">
      <div className="px-[10%] max-w-[1440px] mx-auto flex flex-col gap-12">
        <h2 className="text-4xl font-bold text-[#4731D3] dark:text-[#CBF281]">
          {text.projects.title}
        </h2>
        {projects.map((project) => (
          <div key={project.id} className="bg-white dark:bg-[#2B2727] rounded-xl p-8 flex flex-col md:flex-row gap-8">
            <img src={project.image} alt={project.name} className="w-full md:w-80 rounded-lg object-cover" />
            <div className="flex flex-col gap-4">
              <h3 className="text-3xl font-semibold text-[#4731D3] dark:text-[#CBF281]">{project.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.description[lang]}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-[#4731D3] text-white text-sm px-4 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              <div className="flex gap-6 mt-2">
                <a href={project.viewSite} target="_blank" rel="noreferrer" className="text-[#120B39] dark:text-white font-medium underline">{text.projects.viewSite}</a>
                <a href={project.github} target="_blank" rel="noreferrer" className="text-[#120B39] dark:text-white font-medium underline">{text.projects.github}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
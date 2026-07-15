import { useApp } from "../context/AppContext";
import profileImg from "../assets/profile.png";

export default function Profile() {
    const { text } = useApp();

    return (
        <section className="bg-[#4731D3] dark:bg-[#171043] py-24">
            <div className="px-[10%] max-w-[1440px] mx-auto flex flex-col gap-12">
        <h2 className="text-4xl font-bold text-[#CBF281]">{text.profile.title}</h2>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1 flex flex-col gap-6">
            <h3 className="text-3xl font-medium text-white">{text.profile.basicTitle}</h3>
            <ul className="flex flex-col gap-3">
              {text.profile.info.map((item) => (
                <li key={item.label} className="grid grid-cols-2 gap-4">
                  <span className="text-[#CBF281] font-medium">{item.label}</span>
                  <span className="text-white">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
          <img src={profileImg} alt="Benim fotoğrafım" className="w-72 h-56 rounded-xl object-cover" />
          <div className="flex-1 flex flex-col gap-6">
            <h3 className="text-3xl font-medium text-white">{text.profile.aboutTitle}</h3>
            {text.profile.aboutText.map((p, i) => (
              <p key={i} className="text-white leading-relaxed">{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

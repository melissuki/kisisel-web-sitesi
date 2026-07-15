import jsIcon from "../assets/icons/js.png";
import reactIcon from "../assets/icons/react.png";
import reduxIcon from "../assets/icons/redux.png";
import nodeIcon from "../assets/icons/node.png";
import vscodeIcon from "../assets/icons/vscode.png";
import figmaIcon from "../assets/icons/figma.png";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";


export const content = {
    tr: {
      header: {
        logo: "Melis Su Kaya",
        darkMode: "KARANLIK MOD",
        lightMode: "AYDINLIK MOD",
        langToggle: "SWITCH TO ENGLISH",
      },
      hero: {
        title: "Ben bir Frontend Geliştiricisiyim...",
        subtitle:
          "...harika kullanıcı deneyimleri sunan, sağlam ve ölçeklenebilir frontend ürünleri üretmeyi seviyorum.",
        github: "Github",
        linkedin: "LinkedIn",
      },
      skills: { title: "Yetenekler" },
      profile: {
        title: "Profil",
        basicTitle: "Temel Bilgiler",
        info: [
          { label: "Doğum tarihi", value: "27.04.2004" },
          { label: "İkamet Şehri", value: "İstanbul" },
          { label: "Eğitim Durumu", value: "İstanbul Nişantaşı Üniversitesi, Yazılım Mühendisliği, 2027" },
          { label: "Tercih Ettiği Rol", value: "Frontend, UI" },
        ],
        aboutTitle: "Hakkımda",
        aboutText: [
          "Merhaba! Ben Melis. Workintech'te full-stack geliştirme eğitimi alıyorum ve kullanıcı deneyimini merkeze alan arayüzler geliştirmeyi seviyorum.",
          "React ekosisteminde projeler üretiyor, öğrendiğim her yeni konuyu gerçek projelere dönüştürmeye özen gösteriyorum.",
        ],
      },
      projects: { title: "Projeler", viewSite: "Siteyi Gör", github: "Github" },
      footer: {
        title: "Bana mesaj gönderin!",
        text: "Bir sorunuz ya da öneriniz mi var, yoksa sadece merhaba mı demek istiyorsunuz? Buyrun.",
        email: "melissukaya2004@gmail.com",
      },
    },
    en: {
      header: {
        logo: "Melis Su Kaya",
        darkMode: "DARK MODE",
        lightMode: "LIGHT MODE",
        langToggle: "TÜRKÇE'YE GEÇ",
      },
      hero: {
        title: "I am a Frontend Developer...",
        subtitle:
          "...who likes to craft solid and scalable frontend products with great user experiences.",
        github: "Github",
        linkedin: "LinkedIn",
      },
      skills: { title: "Skills" },
      profile: {
        title: "Profile",
        basicTitle: "Basic Information",
        info: [
          { label: "Date of birth", value: "27.04.2004" },
          { label: "City of residence", value: "Istanbul" },
          { label: "Education", value: "Istanbul Nisantasi University, Software Engineering, 2027" },
          { label: "Preferred role", value: "Frontend, UI" },
        ],
        aboutTitle: "About Me",
        aboutText: [
          "Hi! I'm Melis. I'm studying full-stack development at Workintech and I love building interfaces that put user experience first.",
          "I build projects in the React ecosystem and turn everything new I learn into real projects.",
        ],
      },
      projects: { title: "Projects", viewSite: "View Site", github: "Github" },
      footer: {
        title: "Send me a message!",
        text: "Got a question or proposal, or just want to say hello? Go ahead.",
        email: "melissukaya2004@gmail.com",
      },
    },
  };

  export const skills = [
    { id: 1, name: "JAVASCRIPT", icon: jsIcon },
    { id: 2, name: "NODE", icon: nodeIcon },
    { id: 3, name: "REACT", icon: reactIcon },
    { id: 4, name: "VS CODE", icon: vscodeIcon },
    { id: 5, name: "REDUX", icon: reduxIcon },
    { id: 6, name: "FIGMA", icon: figmaIcon },
  ];

  export const projects = [
    {
        id: 1,
        name: "Workintech",
        description: {
            tr: "Workintech eğitimi sırasında geliştirdiğim, React ve Redux kullanan web uygulaması.",
            en: "A web application built with React and Redux during my Workintech training.",
        },
        tags: ["react", "redux", "axios"],
        viewSite: "https://proje-linki-buraya-gelecek.vercel.app",
        github: "https://github.com/kullanıcı-adım/proje-repom",
        image: project1,
    },

    {
        id: 2,
        name: "Journey",
        description: {
          tr: "İkinci proje kısa açıklama buraya yaz.",
          en: "Short description of the second project.",
        },
        tags: ["react", "vercel", "axios"],
        viewSite: "https://...",
        github: "https://...",
        image: project2,
      },
  ]
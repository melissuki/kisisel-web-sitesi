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
          { label: "Eğitim Durumu", value: "İstanbul Nişantaşı Üniversitesi, Yazılım Mühendisliği" },
          { label: "Tercih Ettiği Rol", value: "Frontend, UI" },
        ],
        aboutTitle: "Hakkımda",
        aboutText: [
            "Merhaba! Ben Melis Su Kaya, Yazılım Mühendisliği öğrencisiyim. Workintech bünyesinde aldığım full-stack eğitimiyle kullanıcı deneyimini merkeze alan responsive arayüzler geliştiriyorum.",
            "React, Next.js ve Tailwind CSS ekosisteminde edindiğim teorik birikimi, temiz kod prensipleriyle çalışan güçlü ve dinamik web projelerine dönüştürüyorum." ]
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
          { label: "Education", value: "Istanbul Nisantasi University, Software Engineering" },
          { label: "Preferred role", value: "Frontend, UI" },
        ],
        aboutTitle: "About Me",
        aboutText: [
            "Hello! I'm Melis Su Kaya, a Software Engineering student. Through my full-stack training at Workintech, I build responsive, user-centric interfaces.",
            "I specialize in transforming my knowledge of React, Next.js, and Tailwind CSS into high-performance web projects using clean code principles." ],
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
    { id: 1, name: "JAVASCRIPT", icon: jsIcon, bg: "#F7DF1E"},
    { id: 2, name: "NODE", icon: nodeIcon, bg: "#1B1B1B" },
    { id: 3, name: "REACT", icon: reactIcon, bg: "#282C34" },
    { id: 4, name: "VS CODE", icon: vscodeIcon, bg: "#0078D7" },
    { id: 5, name: "REDUX", icon: reduxIcon, bg: "#764ABC" },
    { id: 6, name: "FIGMA", icon: figmaIcon, bg: "#1B1B1B" },
  ];

  export const projects = [
    {
        id: 1,
        name: "Teknolojik Yemekler",
        description: {
            tr: "Kullanıcıların özelleştirilmiş pizza siparişi verebilmesi için geliştirdiğim; form validasyonları, dinamik fiyat hesaplamaları ve sipariş onay süreçlerini içeren modern bir tek sayfa (SPA) web uygulaması.",
            en: "A modern single-page web application (SPA) built for customized pizza ordering, featuring form validations, dynamic price calculations, and order confirmation tracking.",
        },
        tags: ["react", "redux", "axios", "TailwindCSS"],
        viewSite: "https://pizza-iota-taupe.vercel.app",
        github: "https://github.com/melissuki/pizza",
        image: project1,
    },

    {
        id: 2,
        name: "Catstagram",
        description: {
          tr: "React ve Supabase ile geliştirilmiş; anlık mesajlaşma, bildirimler, keşfet akışı ve mini oyun içeren tam kapsamlı kedi sosyal medya platformu.",
          en: "A full-stack cat social network built with React and Supabase, featuring real-time messaging, notifications, global feed, and a mini-game.",
        },
        tags: ["React",
            "TypeScript",
            "Tailwind CSS",
            "Supabase",
            "PostgreSQL",
            "Vite"],
        viewSite: "https://catstagram-crb3kx6ku-melissuky.vercel.app",
        github: "https://github.com/melissuki/catstagram",
        image: project2,
      },

      {
        id: 3,
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
        id: 4,
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
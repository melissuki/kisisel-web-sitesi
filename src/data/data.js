export const content = {
    tr: {
      header: { logo: "melis", hireMe: "İşe Alın", darkMode: "KARANLIK MOD", langToggle: "SWITCH TO ENGLISH" },
      hero: {
        title: "Ben bir Frontend Geliştiricisiyim...",
        subtitle: "...harika kullanıcı deneyimleri için sağlam ve ölçeklenebilir frontend ürünleri üretmeyi seviyorum.",
        github: "Github", linkedin: "LinkedIn",
      },
      skills: { title: "Yetenekler" },
      profile: {
        title: "Profil",
        basicTitle: "Temel Bilgiler",
        info: [
          { label: "Doğum tarihi", value: "24.03.2004" },
          { label: "İkamet Şehri", value: "Ankara" },
          { label: "Eğitim Durumu", value: "..." },
          { label: "Tercih Ettiği Rol", value: "Frontend, UI" },
        ],
        aboutTitle: "Hakkımda",
        aboutText: ["paragraf 1", "paragraf 2"],
      },
      projects: { title: "Projeler" },
      footer: {
        title: "Bana mesaj gönder!",
        text: "Bir sorun ya da öneriniz mi var, yoksa sadece merhaba mı demek istiyorsunuz? Buyrun.",
        email: "melissukaya2004@gmail.com",
      },
    },
    en: {
      //ingilizce kısım buraya
    },
  };
  
  
  export const skills = [
    { name: "JAVASCRIPT", icon: "/icons/js.png" },
    { name: "REACT", icon: "/icons/react.png" },
    
  ];
  
  export const projects = [
    {
      id: 1,
      name: { tr: "Workintech", en: "Workintech" },
      description: { tr: "...", en: "..." },
      tags: ["react", "redux", "vercel"],
      viewSite: "https://...",
      github: "https://...",
      image: "/images/project1.png",
    },
    // ...
  ];
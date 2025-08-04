// Detect browser language and store user preference
(function () {
  const defaultLang = navigator.language.startsWith('de') ? 'de' : 'en';
  const storedLang = localStorage.getItem('lang') || defaultLang;

  function setLang(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = translations[lang][key] || key;
    });
    localStorage.setItem('lang', lang);
  }

  window.setLanguage = setLang; // Make it globally accessible

  const translations = {
    en: {
      work: "Work",
      video: "Video",
      design: "Design",
      about: "About",
      contact: "Contact",
      view_all: "view all"
    },
    de: {
      work: "Arbeiten",
      video: "Video",
      design: "Design",
      about: "Über mich",
      contact: "Kontakt",
      view_all: "alle anzeigen"
    }
  };

  setLang(storedLang);
})();

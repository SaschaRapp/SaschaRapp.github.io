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
    
    //Home-Page Navigation
    en: {
      work: "Work",
      video: "Video",
      design: "Design",
      about: "About",
      contact: "Contact",
      view_all: "view all"
    },
    de: {
      work: "Werk",
      video: "Video",
      design: "Design",
      about: "Über mich",
      contact: "Kontakt",
      view_all: "alle anzeigen"
    }

    // Levanto Project
    en: {
    // ...
    levanto_title: "LEVANTO",
    levanto_subtitle: "A Weekend Surf Trip To Italy",
    levanto_description: "I've had this footage sitting around because I could never quite figure out a story. This trip, however, was unforgettable. Lots of firsts this surf trip: first trip to Italy, first surf trip for a weekend in Europe, first surf with a broken hand. So I've decided to simply cut together some of my favourite moments that I managed to document. Hopefully encapsulating the absolute vibe the 5 of us experienced, on a spontaneous strike mission to Levanto for that killer storm swell."
  },
  de: {
    // ...
    levanto_title: "LEVANTO",
    levanto_subtitle: "Ein Surfwochenende in Italien",
    levanto_description: "Ich hatte das Filmmaterial schon eine ganze Weile rumliegen, weil ich nie so richtig wusste, wie ich daraus eine Geschichte machen soll. Aber dieser Trip war unvergesslich. Viele Premieren auf diesem Surftrip: erstes Mal in Italien, erstes Surfwochenende in Europa, erstes Mal Surfen mit gebrochener Hand. Deshalb habe ich einfach einige meiner Lieblingsmomente zusammengeschnitten, die ich festhalten konnte – in der Hoffnung, die Stimmung einzufangen, die wir fünf auf unserem spontanen Strike-Mission-Trip nach Levanto während dieses epischen Sturms erlebt haben."
  }
};
    
  };

  setLang(storedLang);
})();



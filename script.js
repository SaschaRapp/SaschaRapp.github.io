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
    // Navigation
    work: "Work",
    video: "Video",
    design: "Design",
    about: "About",
    contact: "Contact",
    view_all: "view all",

    // Projects
    levanto_title: "LEVANTO",
    levanto_subtitle: "A Weekend Surf Trip To Italy",
    levanto_description: "I've had this footage sitting around because I could never quite figure out a story. This trip, however, was unforgettable. Lots of firsts this surf trip: first trip to Italy, first surf trip for a weekend in Europe, first surf with a broken hand. So I've decided to simply cut together some of my favourite moments I managed to document. Hopefully encapsulating the absolute vibe the 5 of us experienced, on a spontaneous strike mission to Levanto for that killer storm swell.",

    discomfort_title: "PROJECT DISCOMFORT",
    discomfort_subtitle: "A Docu-like Edit About the Eisbach",
    discomfort_description: "A little docu-like edit about the Eisbach and its importance for those that can't live without it in the landlocked city of Munich. This was a semester final project for one of my Media Design courses at the International University of Applied Sciences, and also somewhat of a passion project that I hope to expand and improve on in the future.",

    paradise_title: "PARADISE SESSION",
    paradise_description: "Back home in Namibia, the conditions turned unexpectedly perfect — the kind of rare day you don’t see often: clear water + nice bright morning sun and no fog. I started out surfing, but as the session progressed, I swapped my board for my Sony FX30 and new WaveSolutions underwater housing to capture the magic.",

    arctic_title: "Surfing the Arctic Circle",
    arctic_description: "A few years back, I finally met two close friends in Sweden after never having met in person, despite having known each other for over a decade. We planned a road trip to the Lofoten Islands in Norway — a place none of us had ever been — chasing a long-held dream of mine: to surf in the Arctic Circle. We drove to a small town called Unstad, known for its icy waves and dramatic backdrop. The surf? Far from ideal. A full-on blizzard rolled in, the waves were messy wind swell, and to top it off, I unknowingly had a broken wrist. This video is a short visual diary from that trip — a reminder that sometimes, even when things don't go as planned, the journey itself is what sticks with you most.",

    strings_title: "STRINGS ATTACHED",
    strings_description: "Strings Attached is a deeply personal short film exploring how reconnecting with passion, nature, and movement can offer light in the shadow of acute depression. This story is about emotional weight, isolation, and the slow journey back to joy. Told through raw visuals, dynamic camera work, and voice-over narration, Strings Attached was created as part of my bachelor’s thesis in Media Design. Shot using a one-man, run-and-gun filmmaking setup, the film was inspired by creators like Shaffer Nickel, Gawx Art, and Sam Kolder.",

    radiance_title: "RADIANCE X TwinzBroz",
    radiance_description: "Last November, I had the chance to film this short announcement video for Radiance and their partners, TwinzBroz. Despite the cold weather, the energy and stoke on site were unreal. Shot in the heart of the off-season, we embraced freezing temps, captured some stiff turns and took to the air.",

    wasted_title: "Wasted Talent Collective",
    wasted_description: "A Collective Project for the Wasted Talent Magazine and Boutique."
  },

  de: {
    // Navigation
    work: "Werke",
    video: "Video",
    design: "Design",
    about: "Über mich",
    contact: "Kontakt",
    view_all: "alle anzeigen",

    // Projects
    levanto_title: "LEVANTO",
    levanto_subtitle: "Ein Surfwochenende in Italien",
    levanto_description: "Ich hatte das Filmmaterial schon eine ganze Weile rumliegen, weil ich nie so richtig wusste, wie ich daraus eine Geschichte machen soll. Aber dieser Trip war unvergesslich. Viele Premieren auf diesem Surftrip: erstes Mal in Italien, erstes Surfwochenende in Europa, erstes Mal Surfen mit gebrochener Hand. Deshalb habe ich einfach einige meiner Lieblingsmomente zusammengeschnitten, die ich festhalten konnte – in der Hoffnung, die Stimmung einzufangen, die wir fünf auf unserem spontanen Strike-Mission-Trip nach Levanto während dieses epischen Sturms erlebt haben.",

    discomfort_title: "PROJECT DISCOMFORT",
    discomfort_subtitle: "Ein Doku-ähnlicher Edit über den Eisbach",
    discomfort_description: "Ein kleiner, dokumentarischer Edit über den Eisbach und seine Bedeutung für Menschen, die in der landlocked Stadt München nicht ohne ihn leben können. Das Projekt entstand als Semesterabschluss für einen meiner Mediendesign-Kurse an der IU Internationalen Hochschule und war gleichzeitig ein Herzensprojekt, das ich in Zukunft weiterentwickeln und verbessern möchte.",

    paradise_title: "PARADISE SESSION",
    paradise_description: "Zurück in Namibia wurden die Bedingungen unerwartet perfekt – ein seltener Tag mit klarem Wasser, heller Morgensonne und ohne Nebel. Ich startete selbst im Wasser, aber im Laufe der Session tauschte ich das Surfbrett gegen meine Sony FX30 und das neue WaveSolutions-Unterwassergehäuse, um die Magie einzufangen.",

    arctic_title: "SURFEN AM POLARKREIS",
    arctic_description: "Vor ein paar Jahren traf ich endlich zwei enge Freunde in Schweden, obwohl wir uns über ein Jahrzehnt lang nur online kannten. Wir planten einen Roadtrip zu den Lofoten in Norwegen – ein Ort, den keiner von uns je zuvor gesehen hatte – auf der Suche nach einem lang gehegten Traum: Surfen am Polarkreis. Wir fuhren nach Unstad, einem kleinen Ort, bekannt für seine eisigen Wellen und dramatische Kulisse. Die Bedingungen? Alles andere als ideal. Ein Blizzard zog auf, das Meer war chaotisch, und obendrein hatte ich mir das Handgelenk gebrochen – ohne es zu wissen. Dieses Video ist ein visuelles Tagebuch von jener Reise – und eine Erinnerung daran, dass am Ende oft der Weg wichtiger ist als das Ziel.",

    strings_title: "STRINGS ATTACHED",
    strings_description: "Strings Attached ist ein sehr persönlicher Kurzfilm, der zeigt, wie die Wiederverbindung mit Leidenschaft, Natur und Bewegung Licht in dunkle Zeiten bringen kann – insbesondere bei akuter Depression. Die Geschichte erzählt von emotionaler Last, Isolation und dem langsamen Weg zurück zur Freude. Der Film wurde als Bachelorarbeit im Fach Mediendesign erstellt und lebt von rohen Bildern, dynamischer Kameraführung und Voice-Over-Erzählung. Gedreht im One-Man-Run-and-Gun-Stil, inspiriert von Kreativen wie Shaffer Nickel, Gawx Art und Sam Kolder.",

    radiance_title: "RADIANCE X TwinzBroz",
    radiance_description: "Im vergangenen November durfte ich dieses kurze Ankündigungsvideo für Radiance und ihre Partner TwinzBroz drehen. Trotz der Kälte war die Stimmung vor Ort unglaublich. Gedreht mitten in der Off-Season, haben wir die frostigen Temperaturen genutzt, ein paar knackige Turns eingefangen und ein paar Airs gewagt.",

    wasted_title: "Wasted Talent Collective",
    wasted_description: "Ein Gemeinschaftsprojekt für das Wasted Talent Magazine und Boutique."
  }
};


  setLang(storedLang);
})();





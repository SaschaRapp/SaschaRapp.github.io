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
      levanto_description: "I've had this footage sitting around because I could never quite figure out a story. This trip, however, was unforgettable. Lots of firsts this surf trip: first trip to Italy, first surf trip for a weekend in Europe, first surf with a broken hand. So I've decided to cut together some of my favourite moments I managed to document. Hopefully encapsulating the absolute vibe the 5 of us experienced, on a spontaneous strike mission to Levanto for that killer storm swell.",

      discomfort_title: "PROJECT DISCOMFORT",
      discomfort_subtitle: "A Docu-like Edit About the Eisbach",
      discomfort_description: "A little docu-like edit about the Eisbach and its importance for those that can't live without it in the landlocked city of Munich. This was a semester final project for one of my Media Design courses at the International University of Applied Sciences, and also somewhat of a passion project that I hope to expand and improve on in the future.",

      paradise_title: "PARADISE SESSION",
      paradise_description: "Back home in Namibia, the conditions turned unexpectedly perfect — the kind of rare day you don’t see often: clear water + nice bright morning sun and no fog. I started out surfing, but as the session progressed, I swapped my board for my Sony FX30 and new WaveSolutions underwater housing to capture the magic.",

      arctic_title: "SURFING THE ARCTIC CIRCLE",
      arctic_description: "A few years back, I finally met two close friends in Sweden after never having met in person, despite having known each other for over a decade. We planned a road trip to the Lofoten Islands in Norway — a place none of us had ever been — chasing a long-held dream of mine: to surf in the Arctic Circle. We drove to a small town called Unstad, known for its icy waves and dramatic backdrop. The surf? Far from ideal. A full-on blizzard rolled in, the waves were messy wind swell, and to top it off, I unknowingly had a broken wrist. This video is a short visual diary from that trip — a reminder that sometimes, even when things don't go as planned, the journey itself is what sticks with you most.",

      strings_title: "STRINGS ATTACHED",
      strings_description: "Strings Attached is a deeply personal short film exploring how reconnecting with passion, nature, and movement can offer light in the shadow of acute depression. This story is about emotional weight, isolation, and the slow journey back to joy. Told through raw visuals, dynamic camera work, and voice-over narration, Strings Attached was created as part of my bachelor’s thesis in Media Design. Shot using a one-man, run-and-gun filmmaking setup, the film was inspired by creators like Shaffer Nickel, Gawx Art, and Sam Kolder.",

      radiance_title: "RADIANCE X TwinzBroz",
      radiance_description: "Last November, I had the chance to film this short announcement video for Radiance and their partners, TwinzBroz. Despite the cold weather, the energy and stoke on site were unreal. Shot in the heart of the off-season, we embraced freezing temps, captured some stiff turns and took to the air.",

      wasted_title: "Wasted Talent Collective",
      wasted_description: "A Collective Project for the Wasted Talent Magazine and Boutique.",

      drives_title: "WHAT DRIVES YOU?",
      drives_short:
  "MINI Surf Film — Urban Waves, Everyday Escapes\n" +
  "A 90-second vertical film for the MINI Surf Film Competition 2025, " +
  "contrasting the monotony of online meetings with the freedom of surfing Munich’s Eisbach wave.",
      drives_long:
  "MINI Surf Film Competition — “Whatever drives you, we’ll get you there.”\n" +
  "This project was created for the MINI Surf Film Competition 2025 in Munich. " +
  "The brief: develop a vertical film of up to 90 seconds for social media that interprets surfing in an urban context.\n" +
  "My concept tells the tension between a monotonous workday and the feeling of freedom at Munich’s Eisbach wave. " +
  "We start with a protagonist trapped in an endless loop of online meetings. " +
  "Only when he closes the laptop, grabs the keys to the MINI Countryman and heads to the Eisbach does a different space open up: " +
  "a daydream full of energy, cold water and dynamic surf action.\n" +
  "Production notes:\n" +
  "Camera: Sony FX30\n" +
  "Visual language: contrasts between static, slightly humorous office scenes and fast-cut surf montages.\n" +
  "Color grading: cinematic look in DaVinci Resolve Studio.\n" +
  "Sound: a mix of deliberately sterile meeting ambience and energetic sound design for the surf sequences.\n" +
  "The result is a spot that translates MINI’s brand claim “Whatever drives you, we’ll get you there” into something personal: " +
  "whether everyday life or adventure — it’s about finding your drive and following it.",

      // CV Translation
      about_me_title: "ABOUT ME",
      about_me_text: "I’m a Media Design graduate with a passion for visual storytelling, video editing, and outdoor adventure. Whether behind the camera, in the edit bay, or crafting concepts, I thrive on bringing ideas to life. My work spans branded content, documentary storytelling, and creative social media formats.",
      work_experience_title: "WORK EXPERIENCE",
      job1_title: "Production Assistant & Video Editor (dual studies)",
      job1_company: "Schwarzbild Medienproduktion GmbH, Munich",
      job1_duration: "09/2021 – 03/2025",
      job1_d1: "Video editing for advertising, events, and social media projects",
      job1_d2: "Motion design & colour grading (Adobe CC, Avid, DaVinci)",
      job1_d3: "Worked on projects for Airbus and NDA clients",
      job1_d4: "Used personal equipment (Sony FX30, drone, GoPro) for production extensions",
      job2_title: "Surf Coach & Lifeguard",
      job2_place: "O2 Surftown Munich (part-time)",
      job2_dates: "05/2024 – 11/2024",
      job2_bullet1: "Conducted surf lessons for children and adults",
      job2_bullet2: "Handled safety and rescue in Europe’s largest wave pool",
      job2_bullet3: "Certified in water rescue (DLRG or similar)",

      education_title: "EDUCATION",
      education_degree: "Bachelor of Arts – Media Design",
      education_school: "IU International University of Applied Sciences, Munich",
      education_graduation: "Graduation: 07/2025",

      skills_title: "SKILLS",
      skills_software_heading: "Software & Tools",
      skills_software1: "Adobe CC Suite: Premiere Pro, After Effects, Audition, Photoshop, Illustrator, InDesign, Figma",
      skills_software2: "Editing & Compositing: Avid Media Composer, DaVinci Resolve",
      skills_software3: "3D & Game Engines: Unreal Engine 5",
      skills_software4: "Camera Equipment: Sony FX30, GoPro, Drone footage",

      skills_languages_heading: "Languages",
      skills_lang1: "German – Native or bilingual proficiency",
      skills_lang2: "English – Native or bilingual proficiency",
      skills_lang3: "Afrikaans – Professional working proficiency",

      interests_title: "PERSONAL PROJECTS & INTERESTS",
      interests1: "Own YouTube channel with surf, outdoor and travel documentaries",
      interests2: "Passionate about: surfing, snowboarding, ski touring, volleyball, hiking, climbing, camping, travelling, adventure films & editing"
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
      wasted_description: "Ein Gemeinschaftsprojekt für das Wasted Talent Magazine und Boutique.",

      drives_title: "WAS TREIBT DICH AN?",
      drives_short:
  "MINI Surf Film – Urbane Wellen, alltägliche Auszeiten\n" +
  "Ein 90-sekündiger Vertical-Film für den MINI Surf Film Wettbewerb 2025, " +
  "der die Monotonie von Online-Meetings dem Freiheitsgefühl des Surfens auf der Münchner Eisbachwelle gegenüberstellt.",
      drives_long:
  "MINI Surf Film Wettbewerb – „Whatever drives you, we’ll get you there.“\n" +
  "Dieses Projekt entstand im Rahmen des MINI Surf Film Wettbewerbs 2025 in München. " +
  "Die Aufgabe: einen maximal 90-sekündigen, vertikal produzierten Film für Social Media zu entwickeln, " +
  "der das Thema Surfen in urbanem Kontext kreativ interpretiert.\n" +
  "Mein Konzept erzählt die Spannung zwischen dem oft monotonen Arbeitsalltag und dem Freiheitsgefühl auf der Eisbachwelle. " +
  "Der Protagonist ist in einer Endlosschleife aus Online-Meetings gefangen. " +
  "Erst als er den Laptop zuklappt, den Schlüssel zum MINI Countryman greift und zum Eisbach fährt, öffnet sich ein anderer Raum: " +
  "ein Tagtraum voller Energie, kaltem Wasser und dynamischer Surf-Action.\n" +
  "Filmische Umsetzung:\n" +
  "Kamera: Sony FX30\n" +
  "Bildsprache: Kontraste zwischen statischen, leicht humorvollen Büroszenen und dynamisch geschnittenen Surf-Montagen.\n" +
  "Color Grading: Cineastischer Look in DaVinci Resolve Studio.\n" +
  "Ton: Mischung aus bewusst steriler Meeting-Atmosphäre und energiegeladenem Sounddesign für die Surf-Sequenzen.\n" +
  "Das Ergebnis ist ein Spot, der den MINI-Claim „Whatever drives you, we’ll get you there“ persönlich übersetzt: " +
  "Egal ob Alltag oder Abenteuer – es geht darum, den eigenen Antrieb zu finden und ihm konsequent zu folgen.",


      // CV Translation
      about_me_title: "ÜBER MICH",
      about_me_text: "Ich bin ein Mediendesign-Absolvent mit einer Leidenschaft für visuelles Storytelling, Videoschnitt und Outdoor-Abenteuer. Ob hinter der Kamera, im Schnitt oder in der Konzeption – ich liebe es, Ideen zum Leben zu erwecken. Meine Arbeit reicht von Branded Content über dokumentarisches Erzählen bis hin zu kreativen Social-Media-Formaten.",
      work_experience_title: "BERUFSERFAHRUNG",

      job1_title: "Produktionsassistent & Cutter (duales Studium)",
      job1_company: "Schwarzbild Medienproduktion GmbH, München",
      job1_duration: "09/2021 – 03/2025",
      job1_d1: "Videoschnitt für Werbe-, Event- und Social Media-Projekte",
      job1_d2: "Motion Design & Color Grading (Adobe CC, Avid, DaVinci)",
      job1_d3: "Mitarbeit an Projekten für u. a. Airbus und NDA-Kunden",
      job1_d4: "Einsatz eigener Ausrüstung (Sony FX30, Drohne, GoPro) für Set-Erweiterungen",
    
      job2_title: "Surf Coach & Lifeguard",
      job2_place: "O2 Surftown München (Midijob)",
      job2_dates: "05/2024 – 11/2024",
      job2_bullet1: "Durchführung von Surfkursen für Kinder und Erwachsene",
      job2_bullet2: "Sicherheitseinsätze und Rettung im größten Wavepool Europas",
      job2_bullet3: "Zertifiziert in Wasserrettung (DLRG o. ä.)",

      education_title: "AUSBILDUNG",
      education_degree: "Bachelor of Arts – Medien Design",
      education_school: "IU Internationale Hochschule, München",
      education_graduation: "Abschluss: 07/2025",

      skills_title: "SKILLS",
      skills_software_heading: "Software & Tools",
      skills_software1: "Adobe CC Suite: Premiere Pro, After Effects, Audition, Photoshop, Illustrator, InDesign, Figma",
      skills_software2: "Schnitt & Compositing: Avid Media Composer, DaVinci Resolve",
      skills_software3: "3D & Game Engines: Unreal Engine 5",
      skills_software4: "Kameratechnik: Sony FX30, GoPro, Drohnenaufnahmen",

      skills_languages_heading: "Sprachen",
      skills_lang1: "Deutsch – Muttersprache oder zweisprachig",
      skills_lang2: "Englisch – Muttersprache oder zweisprachig",
      skills_lang3: "Afrikaans – Verhandlungssicher",

      interests_title: "PERSÖNLICHE PROJEKTE & INTERESSEN",
      interests1: "Eigener YouTube-Kanal mit Surf-, Outdoor- und Reise-Dokumentationen",
      interests2: "Leidenschaft für: Surfen, Snowboarden, Skitouren, Volleyball, Wandern, Klettern, Camping, Reisen, Abenteuerfilm & Schnittkunst"
    }
  };

  setLang(storedLang);
})();






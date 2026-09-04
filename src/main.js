const buttons = document.querySelectorAll('[data-lang]');
const translatable = document.querySelectorAll('[data-i18n]');
const translatedAlt = document.querySelectorAll('[data-i18n-alt]');
const translatedAria = document.querySelectorAll('[data-i18n-aria]');
const certificateDialog = document.querySelector('#certificate-dialog');
const certificateImage = document.querySelector('[data-certificate-image]');
const certificateTitle = document.querySelector('#certificate-dialog-title');
const certificateClose = document.querySelector('[data-certificate-close]');

const english = Object.fromEntries(Array.from(translatable, (element) => [element.dataset.i18n, element.textContent.trim()]));
const englishAlt = Object.fromEntries(Array.from(translatedAlt, (element) => [element.dataset.i18nAlt, element.alt]));
const englishAria = Object.fromEntries(Array.from(translatedAria, (element) => [element.dataset.i18nAria, element.getAttribute('aria-label')]));

const translations = {
    ua: {
        heroEyebrow: 'Java backend розробник · Хузум, Німеччина',
        heroTitle: 'Я створюю корисні backend-інструменти — і люблю розуміти всю систему.',
        heroIntro: 'Я Руслан, розробник Java та Spring Boot з досвідом у промисловій автоматизації, освіті та управлінні невеликим бізнесом. Мені подобається перетворювати повторювану або складну роботу на інструменти, якими люди справді можуть користуватися.',
        trySandbox: 'Спробувати Java Sandbox',
        exploreProjects: 'Переглянути проєкти',
        connect: 'Зв’язатися',
        availability: 'Живу в Хузумі, Німеччина · Відкритий до Java backend позицій · Готовий до переїзду в межах Німеччини',
        projectsEyebrow: 'Те, що мені справді подобається створювати',
        projectsTitle: 'Проєкти, за якими стоїть причина',
        sandboxStatus: 'Активний експериментальний прототип',
        personalProject: 'Особистий проєкт',
        sandboxIntro: 'Я почав цей проєкт, бо хотів зрозуміти весь шлях: від запиту в браузері до безпечного виконання Java-коду на реальному сервері. Він виріс в активний прототип, у якому користувачі можуть писати Java в браузері та запускати код в одноразових Docker-контейнерах з обмеженнями.',
        whatBuilt: 'Що я створив',
        built1: 'backend на Java та Spring Boot',
        built2: 'автентифікацію GitHub OAuth 2.0',
        built3: 'збереження даних у PostgreSQL',
        built4: 'ізольоване виконання в Docker',
        built5: 'автоматизовані тести та GitHub Actions',
        built6: 'перевірки якості Checkstyle і SonarQube Cloud',
        built7: 'self-hosting на Raspberry Pi',
        sharedTitle: 'Створено для співпраці',
        sharedText: 'Проєкт почався як мій власний експеримент. Згодом я відкрив його для контриб’юторів, задокументував архітектуру та створив спрощений режим розробки, щоб інші розробники могли долучатися без відтворення всього production-середовища.',
        tryPrototype: 'Спробувати прототип',
        sourceArchitecture: 'Код та архітектура',
        sandboxCaption: 'Інтерфейс режиму розробки, зібраний з актуального коду проєкту.',
        teamProject: 'Командний проєкт',
        shortenerText: 'Командний Java-проєкт із п’ятьма учасниками, де я працював Team Lead і backend-розробником. Окрім реалізації сервісу, я допомагав організовувати роботу через Trello, pull requests і code review та запровадив спільні Postman Collections, щоб зробити тестування API послідовнішим.',
        viewRepository: 'Переглянути репозиторій',
        contributionTitle: 'Прочитати про мій внесок',
        contributionText: 'Я поєднував backend-розробку з координацією команди: уточнював задачі, переглядав pull requests і створив спільний процес тестування API.',
        botText: 'Командний Java-бот, що інтегрує API валютних курсів ПриватБанку та Monobank. Я працював Scrum Master і backend-розробником, реалізував інтеграцію API та налаштовуване TTL-кешування й допоміг команді випустити функціональний MVP.',
        cache1: 'Повторні запити',
        cache2: 'відповідь із кешу',
        cache3: 'оновлення API після завершення TTL',
        cacheNote: 'У сценарії тестування нашої команди з п’яти осіб кеш, за оцінкою, скорочував кількість запитів до зовнішніх API щонайменше на 90%, зменшуючи ризик блокування через rate limit.',
        quizOwnership: 'Спроєктував · Створив · Розгорнув',
        quizText1: 'QuizForger почався як вебпроєкт CS50 і продовжив розвиватися як інструмент для створення, поширення та проходження квізів. Замість розміщення AI-моделі й оплати серверних токенів я спроєктував багаторазовий JSON-import workflow: користувачі можуть згенерувати зміст квізу обраним AI-інструментом, імпортувати його та відредагувати в браузері.',
        quizText2: 'Друзі й студенти мовних курсів тестували застосунок, а їхній feedback вплинув на подальші покращення. Я самостійно спроєктував, розробив, розгорнув і підтримую застосунок на Linux-based Raspberry Pi homelab.',
        tryQuiz: 'Спробувати QuizForger',
        viewSource: 'Переглянути код',
        experimentsEyebrow: 'Невеликі експерименти',
        experimentsTitle: 'Інструменти, які я створив для людей, з якими навчаюся',
        experimentsIntro: 'Вивчаючи німецьку, я помітив, що звичайні робочі аркуші не завжди дають достатньо повторень або миттєвого зворотного зв’язку. Тому я створив невеликі браузерні інструменти для себе й одногрупників та вдосконалював їх, спостерігаючи, як ними користуються люди з різним мовним і технічним рівнем.',
        smallExperiment: 'Невеликий експеримент',
        tool1: 'Закінчення прикметників у контексті.',
        tool2: 'Порядок слів і граматичні шаблони.',
        tool3: 'Відмінки й займенники в контексті.',
        tool4: 'Артиклі з миттєвим feedback.',
        experimentsStack: 'Невеликі експерименти на HTML, CSS і JavaScript, сформовані реальним feedback від учнів.',
        thinkingEyebrow: 'Як я мислю',
        thinkingTitle: 'Системи, люди та практичне розв’язання задач',
        story1: 'Мій шлях у backend-розробку не був цілком прямим. Я починав із промислової автоматизації, працюючи з програмним забезпеченням, виробничим обладнанням і операторами. Згодом управління мовним центром навчило мене слухати користувачів, пояснювати складні речі та відповідати за повний результат. Backend-розробка поєднує цей досвід: системи, людей і практичне розв’язання задач.',
        story2: 'Сьогодні, паралельно з програмними проєктами, я працюю у гнучкій ролі технічних комунікацій у Smart Industry Group. Я перетворюю промислові вимоги та інформацію від розробників на зрозумілі й технічно точні матеріали про продукт. Це зберігає мій зв’язок із промисловим ПЗ, поки я розвиваю кар’єру в Java backend.',
        exploringTitle: 'Що я досліджую зараз',
        exploringText: 'Зараз я покращую архітектуру та межі безпеки Java Sandbox, розширюю автоматизовані тести й спрощую участь інших розробників. Я надаю перевагу вивченню технології тоді, коли реальний проєкт дає причину її застосувати.',
        principle1: 'Розуміти всю систему, а не лише окрему задачу.',
        principle2: 'Автоматизувати роботу, що стає повторюваною.',
        principle3: 'Ставити запитання завчасно й робити технічні рішення видимими.',
        aiTitle: 'AI у моєму workflow.',
        aiText: 'Я використовую Codex і Claude для аналізу коду, рефакторингу, тестів і документації. Згенерований код для мене — це пропозиція: його все одно потрібно зрозуміти, перевірити та протестувати.',
        learningEyebrow: 'Навчання та сертифікація',
        learningTitle: 'Програма GoIT Java Developer',
        learningDate: 'Завершено у жовтні 2025 року',
        viewCertificate: 'Переглянути сертифікат',
        contactEyebrow: 'Розмова — гарний початок',
        contactTitle: 'Створімо щось корисне',
        contactText: 'Мене цікавлять Java backend ролі, де я можу приносити користь практичною інженерією, поглиблювати backend-експертизу та застосовувати незвичне поєднання досвіду в ПЗ, промислових системах і орієнтованому на користувача мисленні.',
        selfHosted: 'Створено та self-hosted на моєму Raspberry Pi homelab.',
        updated: 'Оновлено: вересень 2026.'
    },
    de: {
        heroEyebrow: 'Java-Backend-Entwickler · Husum, Deutschland',
        heroTitle: 'Ich entwickle nützliche Backend-Werkzeuge – und möchte das gesamte System verstehen.',
        heroIntro: 'Ich bin Ruslan, Java- und Spring-Boot-Entwickler mit Erfahrung in Industrieautomatisierung, Bildung und der Führung eines kleinen Unternehmens. Ich verwandle gern wiederkehrende oder komplizierte Arbeit in Werkzeuge, die Menschen tatsächlich nutzen können.',
        trySandbox: 'Java Sandbox testen',
        exploreProjects: 'Projekte ansehen',
        connect: 'Kontakt aufnehmen',
        availability: 'In Husum, Deutschland · Offen für Java-Backend-Stellen · Umzugsbereit innerhalb Deutschlands',
        projectsEyebrow: 'Dinge, die ich wirklich gern entwickle',
        projectsTitle: 'Projekte mit einem persönlichen Grund',
        sandboxStatus: 'Aktiver experimenteller Prototyp',
        personalProject: 'Persönliches Projekt',
        sandboxIntro: 'Ich begann dieses Projekt, weil ich den gesamten Weg von einer Browseranfrage bis zur sicheren Ausführung von Java-Code auf einem echten Server verstehen wollte. Daraus entstand ein aktiver Prototyp, in dem Nutzer Java im Browser schreiben und in kurzlebigen, eingeschränkten Docker-Containern ausführen können.',
        whatBuilt: 'Was ich gebaut habe',
        built1: 'Backend mit Java und Spring Boot',
        built2: 'GitHub-OAuth-2.0-Authentifizierung',
        built3: 'Persistenz mit PostgreSQL',
        built4: 'isolierte Docker-Ausführung',
        built5: 'automatisierte Tests und GitHub Actions',
        built6: 'Qualitätsprüfungen mit Checkstyle und SonarQube Cloud',
        built7: 'Self-Hosting auf einem Raspberry Pi',
        sharedTitle: 'Für Zusammenarbeit geöffnet',
        sharedText: 'Das Projekt begann als Soloexperiment. Später öffnete ich es für Mitwirkende, dokumentierte die Architektur und schuf einen einfacheren Entwicklungsmodus, damit andere Entwickler ohne die vollständige Produktionsumgebung beitragen können.',
        tryPrototype: 'Live-Prototyp testen',
        sourceArchitecture: 'Code und Architektur',
        sandboxCaption: 'Entwicklungsoberfläche aus dem aktuellen Projektcode.',
        teamProject: 'Teamprojekt',
        shortenerText: 'Ein Java-Teamprojekt mit fünf Personen, bei dem ich als Team Lead und Backend-Entwickler tätig war. Neben der Implementierung organisierte ich Arbeit über Trello, Pull Requests und Code Reviews und führte gemeinsame Postman Collections für konsistentere API-Tests ein.',
        viewRepository: 'Repository ansehen',
        contributionTitle: 'Mehr über meinen Beitrag',
        contributionText: 'Ich verband praktische Backend-Arbeit mit Teamkoordination: Aufgaben klären, Pull Requests prüfen und einen wiederholbaren API-Testprozess für das gesamte Team schaffen.',
        botText: 'Ein im Team entwickelter Java-Bot, der die Wechselkurs-APIs von PrivatBank und Monobank integriert. Als Scrum Master und Backend-Entwickler implementierte ich die API-Integration und konfigurierbares TTL-Caching und half dem Team, ein funktionsfähiges MVP auszuliefern.',
        cache1: 'Wiederholte Anfragen',
        cache2: 'Antwort aus Cache',
        cache3: 'Bank-API erst nach TTL-Ablauf aktualisiert',
        cacheNote: 'In unserem Testszenario mit fünf Teammitgliedern reduzierte der Cache die Anfragen an externe APIs schätzungsweise um mindestens 90 Prozent und senkte damit das Risiko einer Rate-Limit-Sperre.',
        quizOwnership: 'Konzipiert · Entwickelt · Bereitgestellt',
        quizText1: 'QuizForger begann als CS50-Webprojekt und entwickelte sich zu einem Werkzeug zum Erstellen, Teilen und Spielen von Quizzen. Statt ein KI-Modell zu hosten und serverseitige Tokens zu bezahlen, entwickelte ich einen wiederverwendbaren JSON-Import: Nutzer können Inhalte mit einem KI-Werkzeug ihrer Wahl erzeugen, importieren und im Browser verfeinern.',
        quizText2: 'Freunde und Teilnehmer meines Sprachkurses testeten die Anwendung; ihr Feedback beeinflusste spätere Verbesserungen. Ich habe die Anwendung selbst konzipiert, entwickelt, bereitgestellt und auf meinem Linux-basierten Raspberry-Pi-Homelab gewartet.',
        tryQuiz: 'QuizForger testen',
        viewSource: 'Quellcode ansehen',
        experimentsEyebrow: 'Kleine Experimente',
        experimentsTitle: 'Kleine Werkzeuge für Menschen, mit denen ich lerne',
        experimentsIntro: 'Beim Deutschlernen bemerkte ich, dass klassische Arbeitsblätter nicht immer genügend Wiederholung oder unmittelbares Feedback bieten. Deshalb baute ich kleine Browserwerkzeuge für mich und meine Mitschüler und passte sie an, nachdem ich beobachtet hatte, wie Menschen mit unterschiedlichen sprachlichen und technischen Kenntnissen sie verwenden.',
        smallExperiment: 'Kleines Experiment',
        tool1: 'Adjektivendungen im Satzkontext üben.',
        tool2: 'Wortstellung und Grammatikmuster wiederholen.',
        tool3: 'Kasus und Pronomen im Kontext trainieren.',
        tool4: 'Artikel mit direktem Feedback festigen.',
        experimentsStack: 'Kleine HTML-, CSS- und JavaScript-Experimente, geprägt durch echtes Feedback von Lernenden.',
        thinkingEyebrow: 'Wie ich arbeite',
        thinkingTitle: 'Systeme, Menschen und praktische Problemlösung',
        story1: 'Mein Weg in die Backend-Entwicklung war nicht ganz geradlinig. Ich begann in der Industrieautomatisierung und arbeitete mit Software, Produktionsanlagen und Bedienern. Später lehrte mich die Leitung eines Sprachzentrums, Nutzern zuzuhören, schwierige Ideen zu erklären und Verantwortung für das Gesamtergebnis zu übernehmen. Backend-Entwicklung verbindet diese Erfahrungen: Systeme, Menschen und praktische Problemlösung.',
        story2: 'Heute arbeite ich neben meinen Softwareprojekten in einer flexiblen Rolle in der technischen Kommunikation bei Smart Industry Group. Ich übersetze industrielle Anforderungen und Beiträge von Entwicklern in klare, technisch präzise Produktinformationen. So bleibe ich nah an industrieller Software, während ich meine Karriere auf Java-Backend-Entwicklung ausrichte.',
        exploringTitle: 'Was ich gerade vertiefe',
        exploringText: 'Aktuell verbessere ich Architektur und Sicherheitsgrenzen der Java Sandbox, erweitere die automatisierten Tests und erleichtere anderen Entwicklern die Mitarbeit. Ich lerne eine Technologie am liebsten dann, wenn ein echtes Projekt einen Grund für ihren Einsatz liefert.',
        principle1: 'Das gesamte System verstehen, nicht nur das einzelne Ticket.',
        principle2: 'Arbeit automatisieren, sobald sie sich wiederholt.',
        principle3: 'Früh fragen und technische Entscheidungen sichtbar machen.',
        aiTitle: 'KI in meinem Arbeitsablauf.',
        aiText: 'Ich nutze Codex und Claude für Codeanalyse, Refactoring, Tests und Dokumentation. Generierter Code ist für mich ein Vorschlag: Er muss weiterhin verstanden, geprüft und verifiziert werden.',
        learningEyebrow: 'Lernen und Zertifizierung',
        learningTitle: 'GoIT Java Developer Program',
        learningDate: 'Abgeschlossen im Oktober 2025',
        viewCertificate: 'Zertifikat ansehen',
        contactEyebrow: 'Ein Gespräch ist ein guter Anfang',
        contactTitle: 'Lassen Sie uns etwas Nützliches bauen',
        contactText: 'Ich interessiere mich für Java-Backend-Rollen, in denen ich praktische Entwicklung beitragen, meine Backend-Expertise vertiefen und meine ungewöhnliche Kombination aus Software, Industriesystemen und nutzerorientiertem Denken einbringen kann.',
        selfHosted: 'Gebaut und selbst gehostet auf meinem Raspberry-Pi-Homelab.',
        updated: 'Zuletzt aktualisiert: September 2026.'
    }
};

const altTranslations = {
    ua: { portraitAlt: 'Портрет Руслана Ломаки', sandboxAlt: 'Інтерфейс Online Java Sandbox у режимі розробки', quizAlt: 'Інтерфейс QuizForger зі списком квізів', experimentsAlt: 'Об’єднаний вигляд трьох інструментів для вивчення німецької', certificateAlt: 'Попередній перегляд сертифіката GoIT Java Developer' },
    de: { portraitAlt: 'Porträt von Ruslan Lomaka', sandboxAlt: 'Entwicklungsoberfläche der Online Java Sandbox', quizAlt: 'QuizForger-Oberfläche mit Quizliste', experimentsAlt: 'Kombinierte Ansicht von drei Deutschlern-Werkzeugen', certificateAlt: 'Vorschau des GoIT-Java-Developer-Zertifikats' }
};

const ariaTranslations = {
    ua: { cacheLabel: 'Схема кешування' },
    de: { cacheLabel: 'Cache-Ablauf' }
};

const locale = {
    en: { lang: 'en', certificate: 'GoIT Java Developer Certificate', close: 'Close certificate' },
    ua: { lang: 'uk', certificate: 'Сертифікат GoIT Java Developer', close: 'Закрити сертифікат' },
    de: { lang: 'de', certificate: 'GoIT Java Developer Zertifikat', close: 'Zertifikat schließen' }
};

function switchLanguage(language) {
    const selected = locale[language] ? language : 'en';
    const copy = selected === 'en' ? english : translations[selected];
    const altCopy = selected === 'en' ? englishAlt : altTranslations[selected];
    const ariaCopy = selected === 'en' ? englishAria : ariaTranslations[selected];

    translatable.forEach((element) => {
        const value = copy[element.dataset.i18n];
        if (value) element.textContent = value;
    });
    translatedAlt.forEach((element) => {
        const value = altCopy[element.dataset.i18nAlt];
        if (value) element.alt = value;
    });
    translatedAria.forEach((element) => {
        const value = ariaCopy[element.dataset.i18nAria];
        if (value) element.setAttribute('aria-label', value);
    });
    buttons.forEach((button) => {
        const isActive = button.dataset.lang === selected;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
    });
    document.documentElement.lang = locale[selected].lang;
    certificateTitle.textContent = locale[selected].certificate;
    certificateClose.setAttribute('aria-label', locale[selected].close);
}

buttons.forEach((button) => button.addEventListener('click', () => {
    switchLanguage(button.dataset.lang);
    button.blur();
}));

document.querySelectorAll('[data-certificate-open]').forEach((button) => {
    button.addEventListener('click', () => {
        if (!certificateImage.src) certificateImage.src = certificateImage.dataset.src;
        certificateDialog.showModal();
    });
});

certificateClose.addEventListener('click', () => certificateDialog.close());
certificateDialog.addEventListener('click', (event) => {
    if (event.target === certificateDialog) certificateDialog.close();
});

const browserLanguage = (navigator.language || 'en').toLowerCase();
if (browserLanguage.startsWith('uk')) switchLanguage('ua');
else if (browserLanguage.startsWith('de')) switchLanguage('de');
else switchLanguage('en');

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    let parallaxFrame = 0;
    const updateParallax = () => {
        const depth = Math.tanh(window.scrollY / (window.innerHeight * 1.8)) * window.innerHeight;
        document.documentElement.style.setProperty('--parallax-slow', `${depth * 0.06}px`);
        document.documentElement.style.setProperty('--parallax-mid', `${depth * -0.04}px`);
        parallaxFrame = 0;
    };
    window.addEventListener('scroll', () => {
        if (!parallaxFrame) parallaxFrame = window.requestAnimationFrame(updateParallax);
    }, { passive: true });
    updateParallax();
}

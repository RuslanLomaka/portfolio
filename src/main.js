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
        slotCaption: "Трохи практики артиклів — просто з телефона.",
        skipContent: "Перейти до вмісту",
        heroEyebrow: "Руслан Ломака · Мій куточок інтернету",
        heroTitle: "Моя цікавість часто закінчується новим проєктом.",
        heroIntro: "Я Руслан. Пишу код, вчу німецьку й тримаю домашній сервер на Raspberry Pi. Тут зібрані речі, які я створюю, запитання, з яких усе почалося, і те, у чому ще розбираюся.",
        trySandbox: "Почати з мовних інструментів",
        exploreProjects: "Інші мої проєкти",
        connect: "Написати мені",
        availability: "Живу в Хузумі, Німеччина. Створюю з цікавості й продовжую вдосконалювати.",
        projectsEyebrow: "Коли хочеться копнути глибше",
        projectsTitle: "Одне запитання веде до іншого",
        sandboxStatus: 'Активний експериментальний прототип',
        personalProject: 'Особистий проєкт',
        sandboxIntro: "Що насправді відбувається між натисканням «Run» і виконанням Java-коду на сервері? Щоб розібратися, я створив цю пісочницю. Це прототип, який розвивається: редактор у браузері, Java backend та одноразові Docker-контейнери на моєму Raspberry Pi.",
        whatBuilt: "Що всередині",
        built1: 'backend на Java та Spring Boot',
        built2: 'автентифікацію GitHub OAuth 2.0',
        built3: 'збереження даних у PostgreSQL',
        built4: 'ізольоване виконання в Docker',
        built5: 'автоматизовані тести та GitHub Actions',
        built6: 'перевірки якості Checkstyle і SonarQube Cloud',
        built7: 'self-hosting на Raspberry Pi',
        sharedTitle: "Місце для інших розробників",
        sharedText: "Створити це самому — одна задача. Зробити зрозумілим для іншої людини — зовсім інша. Я описав архітектуру й додав простіший режим розробки, щоб долучитися можна було без відтворення мого домашнього сервера.",
        tryPrototype: 'Спробувати прототип',
        sourceArchitecture: 'Код та архітектура',
        sandboxCaption: 'Інтерфейс режиму розробки, зібраний з актуального коду проєкту.',
        teamProject: 'Командний проєкт',
        shortenerText: "П’ятеро людей, один скорочувач посилань і чимало спільних рішень. Я писав backend і координував команду. Спільні колекції Postman, pull requests і перегляд коду допомагали працювати над одним сервісом і розуміти, що роблять інші.",
        viewRepository: 'Переглянути репозиторій',
        contributionTitle: 'Прочитати про мій внесок',
        contributionText: 'Я поєднував backend-розробку з координацією команди: уточнював задачі, переглядав pull requests і створив спільний процес тестування API.',
        botText: "Наша команда створила Telegram-бота для перевірки курсів валют. Я долучився до інтеграції банківських API та кешування відповідей. Мені сподобалася ця задача: однакове запитання не має щоразу вимагати нового звернення до банку.",
        cache1: 'Повторні запити',
        cache2: 'відповідь із кешу',
        cache3: 'оновлення API після завершення TTL',
        cacheNote: 'У сценарії тестування нашої команди з п’яти осіб кеш, за оцінкою, скорочував кількість запитів до зовнішніх API щонайменше на 90%, зменшуючи ризик блокування через rate limit.',
        quizOwnership: 'Спроєктував · Створив · Розгорнув',
        quizText1: "Мені хотілося перетворювати навчальний матеріал на щось, із чим можна погратися. QuizForger почався як мій вебпроєкт CS50. Тут можна створити квіз самостійно або імпортувати запитання з AI-інструмента через JSON, відредагувати їх і поділитися.",
        quizText2: "Друзі й люди з мого мовного курсу спробували застосунок і допомогли побачити, що варто змінити. Я сам його створив, розгорнув і підтримую на домашньому Raspberry Pi.",
        tryQuiz: 'Спробувати QuizForger',
        viewSource: 'Переглянути код',
        experimentsEyebrow: "З моїх занять німецькою",
        experimentsTitle: "Вчу німецьку. Заодно створюю інструменти.",
        experimentsIntro: "Мені бракувало практики з артиклями, закінченнями прикметників і займенниками. Тож я зробив браузерні вправи для себе й людей, з якими навчаюся. Спільні спроби навчили мене не лише німецької, а й того, як робити інструменти зручнішими.",
        smallExperiment: 'Невеликий експеримент',
        tool1: 'Закінчення прикметників у контексті.',
        tool2: 'Порядок слів і граматичні шаблони.',
        tool3: 'Відмінки й займенники в контексті.',
        tool4: 'Артиклі з миттєвим feedback.',
        experimentsStack: "Створені для практики. Покращені завдяки відгукам тих, хто вчиться поруч.",
        thinkingEyebrow: "Трохи про мене",
        thinkingTitle: "Різні етапи. Та сама цікавість.",
        story1: "Мій шлях пройшов через промислову автоматизацію та власний мовний центр. Робота з обладнанням навчила цікавитися системами. Робота з учнями — слухати, пояснювати й помічати, що очевидне для мене не завжди очевидне для іншої людини.",
        story2: "Цей досвід досі зустрічається в моїх проєктах: щось потрібно пояснити, потренувати чи спростити — і я починаю думати, чи можу зробити для цього інструмент. Робота з технічними комунікаціями в Smart Industry Group також зберігає мій зв’язок із промисловим ПЗ.",
        exploringTitle: 'Що я досліджую зараз',
        exploringText: 'Зараз я покращую архітектуру та межі безпеки Java Sandbox, розширюю автоматизовані тести й спрощую участь інших розробників. Я надаю перевагу вивченню технології тоді, коли реальний проєкт дає причину її застосувати.',
        principle1: "Йти за запитанням, поки система не стане зрозумілою.",
        principle2: "Якщо постійно це повторюю — мабуть, зроблю інструмент.",
        principle3: "Дати іншій людині спробувати. А потім послухати.",
        aiTitle: 'AI у моєму workflow.',
        aiText: 'Я використовую Codex і Claude для аналізу коду, рефакторингу, тестів і документації. Згенерований код для мене — це пропозиція: його все одно потрібно зрозуміти, перевірити та протестувати.',
        learningEyebrow: 'Навчання та сертифікація',
        learningTitle: 'Програма GoIT Java Developer',
        learningDate: 'Завершено у жовтні 2025 року',
        viewCertificate: 'Переглянути сертифікат',
        contactEyebrow: "Можемо продовжити розмову",
        contactTitle: "А над чим працюєш ти?",
        contactText: "Спробував один з інструментів? Щось було незрозумілим? Або створюєш щось своє? Буду радий почути.",
        selfHosted: 'Створено та self-hosted на моєму Raspberry Pi homelab.',
        updated: 'Оновлено: вересень 2026.'
    },
    de: {
        slotCaption: "Ein bisschen Artikeltraining, direkt auf dem Handy.",
        skipContent: "Zum Inhalt",
        heroEyebrow: "Ruslan Lomaka · Mein Platz im Web",
        heroTitle: "Aus Neugier wird meistens ein Projekt.",
        heroIntro: "Ich bin Ruslan. Ich schreibe Code, lerne Deutsch und betreibe ein Raspberry-Pi-Homelab. Hier teile ich, was dabei entsteht, welche Fragen dahinterstecken und woran ich noch tüftle.",
        trySandbox: "Zu den Lernwerkzeugen",
        exploreProjects: "Weitere Projekte entdecken",
        connect: "Hallo sagen",
        availability: "Zu Hause in Husum. Aus Neugier gebaut und immer noch in Arbeit.",
        projectsEyebrow: "Ein bisschen tiefer graben",
        projectsTitle: "Eine Frage führt zur nächsten",
        sandboxStatus: 'Aktiver experimenteller Prototyp',
        personalProject: 'Persönliches Projekt',
        sandboxIntro: "Was passiert eigentlich zwischen dem Klick auf „Run“ und der Ausführung von Java-Code auf einem Server? Um das herauszufinden, habe ich diese Sandbox gebaut. Ein Prototyp in Entwicklung: Browsereditor, Java-Backend und kurzlebige Docker-Container auf meinem Raspberry Pi.",
        whatBuilt: "Ein Blick unter die Haube",
        built1: 'Backend mit Java und Spring Boot',
        built2: 'GitHub-OAuth-2.0-Authentifizierung',
        built3: 'Persistenz mit PostgreSQL',
        built4: 'isolierte Docker-Ausführung',
        built5: 'automatisierte Tests und GitHub Actions',
        built6: 'Qualitätsprüfungen mit Checkstyle und SonarQube Cloud',
        built7: 'Self-Hosting auf einem Raspberry Pi',
        sharedTitle: "Platz für andere schaffen",
        sharedText: "Es allein zu bauen war eine Herausforderung. Es für andere verständlich zu machen, eine weitere. Ich habe die Architektur dokumentiert und einen einfacheren Entwicklungsmodus ergänzt, damit Mitwirkende nicht erst meinen Heimserver nachbauen müssen.",
        tryPrototype: 'Live-Prototyp testen',
        sourceArchitecture: 'Code und Architektur',
        sandboxCaption: 'Entwicklungsoberfläche aus dem aktuellen Projektcode.',
        teamProject: 'Teamprojekt',
        shortenerText: "Fünf Leute, ein Link-Shortener und viele gemeinsame Entscheidungen. Ich habe Backend-Code geschrieben und das Team koordiniert. Gemeinsame Postman-Collections, Pull Requests und Code Reviews halfen uns, bei der Arbeit am selben Dienst den Überblick zu behalten.",
        viewRepository: 'Repository ansehen',
        contributionTitle: 'Mehr über meinen Beitrag',
        contributionText: 'Ich verband praktische Backend-Arbeit mit Teamkoordination: Aufgaben klären, Pull Requests prüfen und einen wiederholbaren API-Testprozess für das gesamte Team schaffen.',
        botText: "Unser Team hat einen Telegram-Bot für Wechselkurse gebaut. Ich habe unter anderem die Bank-APIs angebunden und Antworten zwischengespeichert. Diese Aufgabe mochte ich: Dieselbe Frage sollte nicht jedes Mal eine neue Anfrage an die Bank brauchen.",
        cache1: 'Wiederholte Anfragen',
        cache2: 'Antwort aus Cache',
        cache3: 'Bank-API erst nach TTL-Ablauf aktualisiert',
        cacheNote: 'In unserem Testszenario mit fünf Teammitgliedern reduzierte der Cache die Anfragen an externe APIs schätzungsweise um mindestens 90 Prozent und senkte damit das Risiko einer Rate-Limit-Sperre.',
        quizOwnership: 'Konzipiert · Entwickelt · Bereitgestellt',
        quizText1: "Ich wollte aus Lernstoff etwas machen, mit dem man spielen kann. QuizForger begann als mein CS50-Webprojekt. Man kann ein Quiz selbst erstellen oder Fragen aus einem KI-Werkzeug als JSON importieren, bearbeiten und teilen.",
        quizText2: "Freunde und Leute aus meinem Sprachkurs haben es ausprobiert und mir gezeigt, was sich verbessern lässt. Ich habe die Anwendung selbst gebaut und bereitgestellt und betreibe sie in meinem Raspberry-Pi-Homelab.",
        tryQuiz: 'QuizForger testen',
        viewSource: 'Quellcode ansehen',
        experimentsEyebrow: "Aus meinem Deutschkurs",
        experimentsTitle: "Deutsch lernen. Nebenbei Werkzeuge bauen.",
        experimentsIntro: "Ich brauchte mehr Übung mit Artikeln, Adjektivendungen und Pronomen. Also habe ich Browserübungen für mich und die Leute aus meinem Kurs gebaut. Beim gemeinsamen Ausprobieren habe ich genauso viel über nützliche Werkzeuge gelernt wie über Deutsch.",
        smallExperiment: 'Kleines Experiment',
        tool1: 'Adjektivendungen im Satzkontext üben.',
        tool2: 'Wortstellung und Grammatikmuster wiederholen.',
        tool3: 'Kasus und Pronomen im Kontext trainieren.',
        tool4: 'Artikel mit direktem Feedback festigen.',
        experimentsStack: "Zum Üben gebaut. Durch Rückmeldungen von Mitlernenden verbessert.",
        thinkingEyebrow: "Der Mensch hinter den Projekten",
        thinkingTitle: "Andere Kapitel, dieselbe Neugier.",
        story1: "Mein Weg führte über die Industrieautomatisierung und ein eigenes Sprachzentrum. Die Arbeit mit Anlagen weckte mein Interesse an Systemen. Die Arbeit mit Lernenden lehrte mich zuzuhören, zu erklären und zu merken, wenn etwas für andere nicht so selbstverständlich ist wie für mich.",
        story2: "Diese Erfahrungen treffen sich in meinen Projekten: Etwas braucht eine Erklärung, mehr Übung oder einen einfacheren Ablauf, und ich frage mich, ob ich dafür etwas bauen kann. Meine Arbeit in der technischen Kommunikation bei Smart Industry Group hält mich außerdem nah an industrieller Software.",
        exploringTitle: 'Was ich gerade vertiefe',
        exploringText: 'Aktuell verbessere ich Architektur und Sicherheitsgrenzen der Java Sandbox, erweitere die automatisierten Tests und erleichtere anderen Entwicklern die Mitarbeit. Ich lerne eine Technologie am liebsten dann, wenn ein echtes Projekt einen Grund für ihren Einsatz liefert.',
        principle1: "Der Frage folgen, bis das System verständlich wird.",
        principle2: "Wenn ich es ständig wiederhole, baue ich wohl ein Werkzeug dafür.",
        principle3: "Jemand anderen ausprobieren lassen. Dann zuhören.",
        aiTitle: 'KI in meinem Arbeitsablauf.',
        aiText: 'Ich nutze Codex und Claude für Codeanalyse, Refactoring, Tests und Dokumentation. Generierter Code ist für mich ein Vorschlag: Er muss weiterhin verstanden, geprüft und verifiziert werden.',
        learningEyebrow: 'Lernen und Zertifizierung',
        learningTitle: 'GoIT Java Developer Program',
        learningDate: 'Abgeschlossen im Oktober 2025',
        viewCertificate: 'Zertifikat ansehen',
        contactEyebrow: "Das Gespräch kann weitergehen",
        contactTitle: "Woran arbeitest du gerade?",
        contactText: "Ein Werkzeug ausprobiert? War etwas unklar? Oder baust du selbst gerade etwas? Ich würde gern davon hören.",
        selfHosted: 'Gebaut und selbst gehostet auf meinem Raspberry-Pi-Homelab.',
        updated: 'Zuletzt aktualisiert: September 2026.'
    }
};

const altTranslations = {
    ua: { slotAlt: "Slot Deutsch на екрані розміру смартфона: картка слова й кнопки der, die, das", adjectiveAlt: "Adjektivendungen із завантаженим реченням і чотирма варіантами відповіді", pronomenAlt: "Deutsche Pronomen із реченням і чотирма варіантами займенників", portraitAlt: 'Портрет Руслана Ломаки', sandboxAlt: 'Інтерфейс Online Java Sandbox у режимі розробки', quizAlt: 'Інтерфейс QuizForger зі списком квізів', experimentsAlt: 'Об’єднаний вигляд трьох інструментів для вивчення німецької', certificateAlt: 'Попередній перегляд сертифіката GoIT Java Developer' },
    de: { slotAlt: "Slot Deutsch im Smartphoneformat mit Wortkarte und Schaltflächen für der, die und das", adjectiveAlt: "Adjektivendungen mit geladener Satzübung und vier Antwortmöglichkeiten", pronomenAlt: "Deutsche Pronomen mit einem Satz und vier Antwortmöglichkeiten", portraitAlt: 'Porträt von Ruslan Lomaka', sandboxAlt: 'Entwicklungsoberfläche der Online Java Sandbox', quizAlt: 'QuizForger-Oberfläche mit Quizliste', experimentsAlt: 'Kombinierte Ansicht von drei Deutschlern-Werkzeugen', certificateAlt: 'Vorschau des GoIT-Java-Developer-Zertifikats' }
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
    try { localStorage.setItem('portfolio-language', button.dataset.lang); } catch { /* Storage can be unavailable in private browsing. */ }
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
let savedLanguage;
try { savedLanguage = localStorage.getItem('portfolio-language'); } catch { /* Fall back to the browser language. */ }
if (Object.hasOwn(locale, savedLanguage)) switchLanguage(savedLanguage);
else if (browserLanguage.startsWith('uk')) switchLanguage('ua');
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

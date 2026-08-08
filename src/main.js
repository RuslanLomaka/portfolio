const buttons = document.querySelectorAll('[data-lang]');
const sections = document.querySelectorAll('[data-section]');
const headlineRole = document.querySelector('[data-headline="role"]');
const headlineStatement = document.querySelector('[data-headline="statement"]');
const langs = Array.from(buttons).map((btn) => btn.dataset.lang);

const headlines = {
    en: {
        role: 'Java Backend Developer',
        statement: 'building real, deployable systems.'
    },
    ua: {
        role: 'Java Backend розробник',
        statement: 'створює реальні системи, готові до розгортання.'
    },
    de: {
        role: 'Java-Backend-Entwickler',
        statement: 'baut reale, einsatzbereite Systeme.'
    }
};

function switchLang(lang) {
    buttons.forEach((btn) => {
        const isActive = btn.dataset.lang === lang;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-pressed', String(isActive));
    });

    sections.forEach((section) => {
        section.hidden = section.dataset.section !== lang;
    });

    const headline = headlines[lang] || headlines.en;
    headlineRole.textContent = headline.role;
    headlineStatement.textContent = headline.statement;
    document.documentElement.lang = lang === 'ua' ? 'uk' : lang;
}

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        switchLang(btn.dataset.lang);
        btn.blur();
    });
});

const browserLang = (navigator.language || 'en').toLowerCase();
if (browserLang.startsWith('uk')) switchLang('ua');
else if (browserLang.startsWith('de')) switchLang('de');
else switchLang('en');

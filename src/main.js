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
        statement: 'створюю реальні системи, готові до розгортання.'
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

let parallaxFrame = 0;

function updateParallax() {
    const scrollY = window.scrollY;
    const depth = Math.tanh(scrollY / (window.innerHeight * 1.8)) * window.innerHeight;
    const rootStyle = document.documentElement.style;

    rootStyle.setProperty('--parallax-slow', `${depth * 0.09}px`);
    rootStyle.setProperty('--parallax-mid', `${depth * -0.055}px`);
    rootStyle.setProperty('--parallax-fast', `${depth * -0.11}px`);
    rootStyle.setProperty('--parallax-spin', `${depth * 0.03}deg`);
    parallaxFrame = 0;
}

window.addEventListener('scroll', () => {
    if (!parallaxFrame) {
        parallaxFrame = window.requestAnimationFrame(updateParallax);
    }
}, { passive: true });

updateParallax();

const buttons = document.querySelectorAll('[data-lang]');
const sections = document.querySelectorAll('[data-section]');
const langs = Array.from(buttons).map((btn) => btn.dataset.lang);

function switchLang(lang) {
    buttons.forEach((btn) => {
        const isActive = btn.dataset.lang === lang;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-pressed', String(isActive));
    });

    sections.forEach((section) => {
        section.hidden = section.dataset.section !== lang;
    });
}

buttons.forEach((btn) => {
    btn.addEventListener('click', () => switchLang(btn.dataset.lang));
});

const browserLang = (navigator.language || 'en').toLowerCase();
if (browserLang.startsWith('uk')) switchLang('ua');
else if (browserLang.startsWith('de')) switchLang('de');
else switchLang('en');

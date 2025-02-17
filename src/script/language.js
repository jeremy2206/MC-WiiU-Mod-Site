document.addEventListener('DOMContentLoaded', () => {
    const defaultLang = 'fr';
    const savedLang = localStorage.getItem('lang') || defaultLang;

    loadLanguage(savedLang);

    document.querySelectorAll('.language-switch').forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.dataset.lang;
            localStorage.setItem('lang', lang);
            loadLanguage(lang);
        });
    });
});

function loadLanguage(lang) {
    fetch(`https://minecraft.jeremestici.wstr.fr/version/wiiu/mc-wiiu-mod-site/src/script/lang/${lang}.json`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Cannot load language file for: ${lang}`);
            }
            return response.json();
        })
        .then(translations => {
            document.querySelectorAll('[data-translate]').forEach(element => {
                const key = element.dataset.translate;
                if (translations[key]) {
                    element.textContent = translations[key];
                }
            });
        })
        .catch(error => console.error('Error loading language file:', error));
}


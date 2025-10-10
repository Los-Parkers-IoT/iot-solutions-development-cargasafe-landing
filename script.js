let currentLanguage = 'en'; 


function translatePage(lang) {
  currentLanguage = lang;

    const APP_URL = 'https://carga-safe.web.app/dashboard';

    document.querySelectorAll('.pricing-btn').forEach(el => {
        el.addEventListener('click', () => { window.location.href = APP_URL; });
    });

  const elements = document.querySelectorAll('[data-i18n]');
  
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    const translation = translations[lang][key];
    
    if (translation) {

      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translation;
      } else {
        element.textContent = translation;
      }
    }
  });

    const platformBtn = document.querySelector('.platform-btn');
    if (platformBtn) {
        platformBtn.addEventListener('click', () => {
            window.location.href = 'https://carga-safe.web.app/dashboard';
        });
    }


    const languageSelector = document.getElementById('swithLanguage');
  if (languageSelector) {
    languageSelector.value = lang;
  }
  
  try {
    localStorage.setItem('preferredLanguage', lang);
  } catch (e) {
    console.warn('localStorage not available');
  }
}

function setupLanguageSwitcher() {
  const languageSelector = document.getElementById('swithLanguage');
  
  if (languageSelector) {
    languageSelector.addEventListener('change', (e) => {
      translatePage(e.target.value);
    });
  }
}

const handleFixedHeaderOnScroll = () => {
  const headerEl = document.querySelector('#header');
  const heroEl = document.querySelector('#hero');
  
  if (!headerEl || !heroEl) {
    console.warn('Header or Hero element not found');
    return;
  }

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) {
        headerEl.classList.add('fixed-header');
      } else {
        headerEl.classList.remove('fixed-header');
      }
    },
    {
      root: null,
      threshold: 0.3,
    }
  );
  
  observer.observe(heroEl);
};

const init = function () {
  let storedLanguage = 'en';
  try {
    storedLanguage = localStorage.getItem('preferredLanguage') || 'en';
  } catch (e) {
    console.warn('localStorage not available, using default language');
  }
  
  setupLanguageSwitcher();
  
  translatePage(storedLanguage);
  
  handleFixedHeaderOnScroll();
};

document.addEventListener('DOMContentLoaded', init);

// ===== i18n engine =====
const DEFAULT_LANG = 'en';

function resolveLang() {
    const saved = localStorage.getItem('lang');
    if (saved) return saved;
    return navigator.language && navigator.language.toLowerCase().startsWith('es') ? 'es' : DEFAULT_LANG;
}

function applyTranslations(lang) {
    // Fallback seguro
    const dict = translations[lang] || translations[DEFAULT_LANG];

    // <html lang="..">
    document.documentElement.setAttribute('lang', lang);

    // Text nodes
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const txt = dict[key];
        if (typeof txt === 'string') el.textContent = txt;
    });

    // Placeholders (inputs/textarea)
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const txt = dict[key];
        if (typeof txt === 'string') el.setAttribute('placeholder', txt);
    });
}

document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) el.setAttribute('placeholder', translations[lang][key]);
});


// Init on load
document.addEventListener('DOMContentLoaded', () => {
    const lang = resolveLang();
    applyTranslations(lang);

    // Language switches: any element with data-lang="en|es"
    document.querySelectorAll('[data-lang]').forEach(el => {
        el.addEventListener('click', () => {
            const newLang = el.getAttribute('data-lang');
            localStorage.setItem('lang', newLang);
            applyTranslations(newLang);
        });
    });
});

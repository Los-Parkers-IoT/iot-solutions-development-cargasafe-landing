let currentLanguage = 'en'; 


function translatePage(lang) {
  currentLanguage = lang;
  
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
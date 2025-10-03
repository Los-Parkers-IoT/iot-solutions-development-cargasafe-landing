document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('.nav-button');
    
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.toLowerCase();
            //TO DO: Agregar funcionalidad de navegación según el texto del botón
        });
    });
    
    const btnWeb = document.querySelector('.btn-web');
    btnWeb.addEventListener('click', function() {
        //TO DO: Agregar funcionalidad para acceder vía web
    });
    
    const btnApp = document.querySelector('.btn-app');
    btnApp.addEventListener('click', function() {
        //TO DO: Agregar funcionalidad para la descarga de la app
    });
    
    const btnQuote = document.querySelector('.btn-quote');
    btnQuote.addEventListener('click', function() {
        //TO DO: Agregar funcionalidad para la cotización
    });
    
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        } else {
            navbar.style.backgroundColor = 'transparent';
        }
    });
});

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}
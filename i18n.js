// Translation dictionary
const translations = {
    en: {
        // Navbar
        'nav.features': 'Features',
        'nav.benefits': 'Benefits',
        'nav.testimonials': 'Testimonials',
        'nav.pricing': 'Plans',
        'nav.contact': 'Contact Us',
        'nav.webAccess': 'Web Access',
        'nav.downloadApp': 'Download App',

        // Hero
        'hero.title': 'Carga Safe',
        'hero.subtitle': 'Smart monitoring for reliable transportation.',
        'hero.cta': 'Get a Quote Now!',

        // Features
        'features.overline': 'FEATURES',
        'features.title': 'What does CargaSafe do?',
        'features.realtime.title': 'Real-time Monitoring',
        'features.realtime.desc': 'View the location, temperature, and status of your cargo from any device. Stay informed minute by minute with accurate data.',
        'features.alerts.title': 'Smart Alerts',
        'features.alerts.desc': 'Receive immediate notifications when your cargo is at risk (temperature variations, delays, unauthorized openings). Act before it\'s too late.',
        'features.management.title': 'Centralized Management',
        'features.management.desc': 'Manage all your shipments on a single platform. Access reports, history, and metrics to optimize your logistics chain.',

        // Benefits
        'benefits.overline': 'BENEFITS',
        'benefits.title': 'What do you gain with CargaSafe?',
        'benefits.risks.title': 'Reduction of Operational Risks',
        'benefits.risks.desc': 'Detect incidents in real-time and avoid losses due to failures, theft, or delays. Immediate response ensures operations and protects the integrity of each shipment.',
        'benefits.costs.title': 'Logistics Cost Optimization',
        'benefits.costs.desc': 'Reduce returns, claims, and unnecessary waste. With real-time information, better decisions are made that increase efficiency and improve profitability.',
        'benefits.transparency.title': 'Greater Transparency and Business Trust',
        'benefits.transparency.desc': 'Provide access to clear and verifiable information for each shipment. Complete traceability generates greater trust, strengthens business relationships, and opens new business opportunities.',

        // Testimonials
        'testimonials.overline': 'TESTIMONIALS',
        'testimonials.title': 'What people say',
        'testimonials.t1.role': 'LOGISTICS COORDINATOR',
        'testimonials.t1.name': 'Andrea Salazar',
        'testimonials.t1.quote': 'With CargaSafe we can monitor each shipment in real-time and respond to any alert. This reduced risks and improved security throughout the operation.',
        'testimonials.t2.role': 'LOGISTICS MANAGER',
        'testimonials.t2.name': 'José Ramírez',
        'testimonials.t2.quote': 'The platform\'s transparency allows us to see where the cargo is at all times. Now we have more control and fewer incidents in our deliveries.',
        'testimonials.t3.role': 'RETAIL CLIENT',
        'testimonials.t3.name': 'Claudia Ortega',
        'testimonials.t3.quote': 'It gives me confidence knowing I receive alerts at each stage and can track my order in real-time. CargaSafe guarantees punctuality and transparency.',
        'testimonials.t4.role': 'INDEPENDENT CLIENT',
        'testimonials.t4.name': 'Miguel Paredes',
        'testimonials.t4.quote': 'Before, I didn\'t know what was happening with my shipments, now I can track them at all times. CargaSafe alerts give me peace of mind and total confidence.',

        // Pricing
        'pricing.overline': 'SUBSCRIPTIONS',
        'pricing.title': 'Choose your plan',
        'pricing.basic.name': 'BASIC PLAN',
        'pricing.basic.subtitle': 'Up to 2 vehicles',
        'pricing.standard.name': 'STANDARD PLAN',
        'pricing.standard.subtitle': 'Up to 5 vehicles',
        'pricing.premium.name': 'PREMIUM PLAN',
        'pricing.premium.subtitle': 'Unlimited vehicles',
        'pricing.period': '/month',
        'pricing.feature1': 'Real-time monitoring',
        'pricing.feature2': 'Smart alerts',
        'pricing.feature3': 'Centralized management',
        'pricing.button': 'Choose plan',

        // About (NEW)
        'about.title': 'About the product',
        'about.subtitle': 'Watch how CargaSafe connects your fleet, sensors, and data in real time.',

        // Team (NEW)
        'team.title': 'Our Team',

        'team.marcelo.role': 'Frontend & UI/UX',
        'team.marcelo.bio': '22-year-old student focused on web/mobile development and intuitive UI/UX. Aims to design and build functional apps that create real impact.',

        'team.jefry.role': 'Project Support & QA',
        'team.jefry.bio': '8th-semester student, responsible and proactive. Always learning and contributing to the project’s continuous improvement.',

        'team.george.role': 'Organization & Delivery',
        'team.george.bio': '7th-semester Software Engineering student. Organized, cooperative, and focused on achieving solid performance in each milestone.',

        'team.nicolas.role': 'Full-Stack & DevOps',
        'team.nicolas.bio': '7th-semester at UPC. Enjoys data analysis and web dev. Skills in Angular, Java with SpringBoot, Docker, Python, HTML, and JS.',

        'team.daniel.role': 'Software Engineering',
        'team.daniel.bio': '6th-year student. Grew through challenges and now leads by example — organized, on time, and team-friendly.',

        'team.alessandro.role': 'Data & ML',
        'team.alessandro.bio': 'Data-driven profile with experience in freelancing and on-the-job learning. Focused on ML, predictive models and AWS.',

        'aboutTeam.title': 'About the team',


        // Quote Form
        'quote.title': 'Request your personalized quote',
        'quote.description': 'Leave us your details and an advisor will contact you with a customized logistics proposal, without obligation and with the security of CargaSafe.',
        'quote.email': 'Email',
        'quote.firstName': 'First name',
        'quote.lastName': 'Last name',
        'quote.details': 'Additional details',
        'quote.submit': 'Send request',

        // Platforms
        'platform.overline': 'DISTRIBUTION',
        'platform.title': 'Access the platform',
        'platform.web.title': 'Web Application',
        'platform.web.desc': 'Access directly from your browser, no downloads required.',
        'platform.web.button': 'Use now',
        'platform.ios.title': 'iOS Application',
        'platform.ios.desc': 'Download the app from the App Store and manage everything from your iPhone or iPad.',
        'platform.ios.button': 'Download on iOS',
        'platform.android.title': 'Android Application',
        'platform.android.desc': 'Available on Google Play to use on any Android device.',
        'platform.android.button': 'Download on Android',

        // Footer
        'footer.rights': '© 2025 CargaSafe. All rights reserved.',
        'terms.conditions': 'Terms and Conditions'
    },

    es: {
        // Navbar
        'nav.features': 'Funcionalidades',
        'nav.benefits': 'Beneficios',
        'nav.testimonials': 'Testimonios',
        'nav.pricing': 'Planes',
        'nav.contact': 'Contáctanos',
        'nav.webAccess': 'Acceder vía web',
        'nav.downloadApp': 'Descargar app',

        // Hero
        'hero.title': 'Carga Safe',
        'hero.subtitle': 'Monitoreo inteligente para un transporte confiable.',
        'hero.cta': '¡Cotízanos Ya!',

        // Features
        'features.overline': 'FUNCIONALIDADES',
        'features.title': '¿Qué hace CargaSafe?',
        'features.realtime.title': 'Monitoreo en tiempo real',
        'features.realtime.desc': 'Visualiza la ubicación, temperatura y estado de tu carga desde cualquier dispositivo. Mantente informado minuto a minuto con datos precisos.',
        'features.alerts.title': 'Alertas Inteligentes',
        'features.alerts.desc': 'Recibe notificaciones inmediatas cuando tu carga esté en riesgo (variaciones de temperatura, retrasos, aperturas no autorizadas). Actúa antes de que sea demasiado tarde.',
        'features.management.title': 'Gestión Centralizada',
        'features.management.desc': 'Administra todos tus envíos en una sola plataforma. Accede a reportes, historial y métricas para optimizar la cadena logística.',

        // Benefits
        'benefits.overline': 'BENEFICIOS',
        'benefits.title': '¿Qué ganas con CargaSafe?',
        'benefits.risks.title': 'Reducción de Riesgos Operativos',
        'benefits.risks.desc': 'Detecta incidentes en el momento y evita pérdidas por fallas, robos o retrasos. La respuesta inmediata asegura la operación y protege la integridad de cada envío.',
        'benefits.costs.title': 'Optimización de Costos Logísticos',
        'benefits.costs.desc': 'Disminuye devoluciones, reclamos y desperdicios innecesarios. Con información en tiempo real se logran mejores decisiones que incrementan la eficiencia y elevan la rentabilidad.',
        'benefits.transparency.title': 'Mayor Transparencia y Confianza Comercial',
        'benefits.transparency.desc': 'Brinda acceso a información clara y verificable en cada envío. La trazabilidad completa genera mayor confianza, fortalece relaciones comerciales y abre nuevas oportunidades de negocio.',

        // Testimonials
        'testimonials.overline': 'TESTIMONIOS',
        'testimonials.title': 'Lo que dice la gente',
        'testimonials.t1.role': 'COORDINADORA DE LOGÍSTICA',
        'testimonials.t1.name': 'Andrea Salazar',
        'testimonials.t1.quote': 'Con CargaSafe podemos monitorear cada envío en tiempo real y reaccionar ante cualquier alerta. Esto redujo riesgos y mejoró la seguridad en toda la operación.',
        'testimonials.t2.role': 'JEFE DE LOGÍSTICA',
        'testimonials.t2.name': 'José Ramírez',
        'testimonials.t2.quote': 'La transparencia de la plataforma nos permite ver en todo momento dónde está la carga. Ahora tenemos más control y menos incidentes en nuestras entregas.',
        'testimonials.t3.role': 'CLIENTE RETAIL',
        'testimonials.t3.name': 'Claudia Ortega',
        'testimonials.t3.quote': 'Me da confianza saber que recibo alertas en cada etapa y puedo seguir mi pedido en tiempo real. CargaSafe me garantiza puntualidad y transparencia.',
        'testimonials.t4.role': 'CLIENTE INDEPENDIENTE',
        'testimonials.t4.name': 'Miguel Paredes',
        'testimonials.t4.quote': 'Antes no sabía qué pasaba con mis envíos, ahora puedo rastrearlos en todo momento. Las alertas de CargaSafe me dan tranquilidad y confianza total.',

        // Pricing
        'pricing.overline': 'SUSCRIPCIONES',
        'pricing.title': 'Elige tu plan',
        'pricing.basic.name': 'PLAN BASICO',
        'pricing.basic.subtitle': 'Hasta 2 vehículos',
        'pricing.standard.name': 'PLAN ESTANDAR',
        'pricing.standard.subtitle': 'Hasta 5 vehículos',
        'pricing.premium.name': 'PLAN PREMIUM',
        'pricing.premium.subtitle': 'Vehículos ilimitados',
        'pricing.period': '/mes',
        'pricing.feature1': 'Monitoreo en tiempo real',
        'pricing.feature2': 'Alertas inteligentes',
        'pricing.feature3': 'Gestión centralizada',
        'pricing.button': 'Elegir plan',

        // About
        'about.title': 'Sobre el producto',
        'about.subtitle': 'Mira cómo CargaSafe conecta tu flota, sensores y datos en tiempo real.',

        // Team
        'team.title': 'Nuestro equipo',

        'team.marcelo.role': 'Frontend y UI/UX',
        'team.marcelo.bio': 'Estudiante de 22 años enfocado en desarrollo web/móvil y UI/UX intuitivo. Busca diseñar y construir aplicaciones funcionales con impacto real.',

        'team.jefry.role': 'Soporte de Proyecto y QA',
        'team.jefry.bio': 'Estudiante de 8.º ciclo, responsable y proactivo. Siempre aprendiendo y aportando a la mejora continua del proyecto.',

        'team.george.role': 'Organización y Entrega',
        'team.george.bio': 'Estudiante de 7.º ciclo de Ingeniería de Software. Organizado, colaborativo y enfocado en un rendimiento sólido en cada hito.',

        'team.nicolas.role': 'Full-Stack y DevOps',
        'team.nicolas.bio': '7.º ciclo en la UPC. Disfruta del análisis de datos y el desarrollo web. Habilidades en Angular, Java con SpringBoot, Docker, Python, HTML y JS.',

        'team.daniel.role': 'Ingeniería de Software',
        'team.daniel.bio': 'Estudiante de 6.º año. Creció superando desafíos y hoy lidera con el ejemplo: organizado, puntual y con buen trabajo en equipo.',

        'team.alessandro.role': 'Datos y ML',
        'team.alessandro.bio': 'Perfil orientado a datos con experiencia en freelance y aprendizaje en el trabajo. Enfocado en ML, modelos predictivos y AWS.',
        
        'aboutTeam.title': 'Sobre el equipo',


        // Quote Form
        'quote.title': 'Solicita tu cotización personalizada',
        'quote.description': 'Déjanos tus datos y un asesor te contactará con una propuesta logística a tu medida, sin compromiso y con la seguridad de CargaSafe.',
        'quote.email': 'Correo',
        'quote.firstName': 'Primer nombre',
        'quote.lastName': 'Segundo nombre',
        'quote.details': 'Detalles adicionales',
        'quote.submit': 'Enviar solicitud',

        // Platforms
        'platform.overline': 'DISTRIBUCIÓN',
        'platform.title': 'Accede a la plataforma',
        'platform.web.title': 'Aplicación web',
        'platform.web.desc': 'Accede directamente desde tu navegador, sin necesidad de descargas.',
        'platform.web.button': 'Usar ahora',
        'platform.ios.title': 'Aplicación iOS',
        'platform.ios.desc': 'Descarga la app desde la App Store y gestiona todo desde tu iPhone o iPad.',
        'platform.ios.button': 'Descarga en iOS',
        'platform.android.title': 'Aplicación Android',
        'platform.android.desc': 'Disponible en Google Play para que lo uses en cualquier dispositivo Android.',
        'platform.android.button': 'Descarga en Android',

        // Footer
        'footer.rights': '© 2025 CargaSafe. Todos los derechos reservados.',
        'terms.conditions': 'Terminos y condiciones'
    }
};

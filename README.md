# CargaSafe Landing Page

Official landing page for **CargaSafe**, the smart monitoring platform for cargo transportation. This website showcases the functionalities, benefits, and key features of the IoT tracking system.

![CargaSafe](assets/logo.png)

## Purpose

This landing page aims to:

- Present the CargaSafe IoT solution for cargo transportation monitoring
- Showcase the main functionalities: real-time monitoring, intelligent alerts, and centralized management
- Highlight benefits for logistics and transportation companies
- Capture potential customers through quotation forms
- Provide access to web and mobile platforms (iOS/Android)

## Technologies

This project is built with standard web technologies, without heavy frameworks to ensure maximum speed and compatibility:

- **HTML5** - Semantic and accessible structure
- **CSS3** - Responsive design with Flexbox and Grid
- **JavaScript (Vanilla)** - Interactivity and dynamic functionality
- **Google Fonts** - Source Sans 3 typography
- **Iconify** - Scalable vector icons
- **GitHub Pages** - Automatic hosting and deployment

### Technical Features

- Responsive design (Mobile-first)
- Multi-language support (Spanish/English)
- Performance optimized
- Compatible with all devices
- Web accessibility (WCAG)
- SEO friendly

## Project Structure

```
carga-safe-landing-page/
├── assets/                    # Media resources
│   ├── logo.png              # CargaSafe logo
│   ├── portada.jpg           # Main hero image
│   ├── benefits/             # Benefits images
│   │   ├── bn1.png
│   │   ├── bn2.png
│   │   └── bn3.png
│   ├── features/             # Features images
│   │   ├── fn1.png
│   │   ├── fn2.png
│   │   └── fn3.jpg
│   ├── platforms/            # Platform images
│   │   ├── android.png
│   │   ├── iOS.png
│   │   └── web-platform.png
│   ├── social/               # Social media icons
│   │   ├── facebook.svg
│   │   ├── instagram.svg
│   │   ├── linkedin.svg
│   │   └── tiktok.svg
│   └── testimonials/         # Testimonial photos
│       ├── avatar1.png
│       ├── avatar2.png
│       ├── avatar3.png
│       └── avatar4.png
├── docs/                      # Additional documentation
├── index.html                 # Main page
├── terms-conditions.html      # Terms and conditions
├── styles.css                 # Global styles
├── script.js                  # JavaScript functionality
├── i18n.js                    # Internationalization system
├── .gitignore                 # Git ignored files
└── README.md                  # This file

```

## Landing Page Sections

### 1. **Hero Section**
- Impactful background image
- Navbar with navigation and quick access
- Main call-to-action
- Language selector (ES/EN)

### 2. **Features** (`#features`)
- Real-time monitoring
- Intelligent alerts
- Centralized management

### 3. **Benefits** (`#benefits`)
- Reduction of logistics costs
- Improved delivery times
- Greater transportation security

### 4. **Testimonials** (`#testimonials`)
- Real customer reviews
- Star ratings
- Card design with avatars

### 5. **Plans and Pricing** (`#pricing`)
- Quotation form
- Customer data capture
- Design with orange gradient (#FF9233 → #FFC300)

### 6. **Platforms** (`#platforms`)
- Web platform access
- iOS download
- Android download

### 7. **Footer**
- Corporate logo
- Social media links
- Terms and conditions links

## Local Installation and Execution

### Prerequisites

No special dependencies required. You only need:
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local server (optional, for development)

### Option 1: Open directly

```powershell
# Navigate to the project folder
cd c:\projects\CargaSafe\carga-safe-landing-page

# Open index.html in your browser
start index.html
```

### Option 2: With local server (recommended)

#### Using Python:
```powershell
# If you have Python 3 installed
python -m http.server 8000

# Open in your browser: http://localhost:8000
```

#### Using Node.js (http-server):
```powershell
# Install http-server globally (only once)
npm install -g http-server

# Run the server
http-server -p 8000

# Open in your browser: http://localhost:8000
```

#### Using Live Server (VS Code):
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## GitHub Pages Deployment

### Initial Setup

1. **Make sure the repository is public** (or you have GitHub Pro for private repos)

2. **Go to repository settings:**
   ```
   Repository → Settings → Pages
   ```

3. **Configure the deployment source:**
   - Source: Deploy from a branch
   - Branch: `main` (or your preferred branch)
   - Folder: `/ (root)`
   - Click **Save**

4. **Wait a few minutes** and your site will be available at:
   ```
   https://los-parkers-iot.github.io/iot-solutions-development-cargasafe-landing/
   ```

### Site Update

Every time you make changes and push them to the repository, GitHub Pages will automatically update:

```powershell
# 1. Make your file changes
# 2. Add the changes
git add .

# 3. Create a commit
git commit -m "Content update"

# 4. Push the changes
git push origin main

# 5. Wait 1-2 minutes for GitHub Pages to update
```

### Deployment Verification

You can verify the deployment status at:
```
Repository → Actions
```

There you will see the deployment history and any errors.

## Color Palette

```css
/* Main colors */
--primary-orange: #FF9233;      /* Main orange */
--secondary-yellow: #FFC300;    /* Yellow for gradients */
--dark-gray: #2F2F2F;           /* Dark text */
--light-gray: #ADB5BD;          /* Borders and secondary text */
--white: #FFFFFF;               /* Backgrounds */
--black: #000000;               /* Main text */

/* Corporate gradient */
background: linear-gradient(135deg, #FF9233 0%, #FFC300 100%);
```

## Responsive Breakpoints

```css
/* Desktop large */
@media (max-width: 1200px) { ... }

/* Tablet landscape */
@media (max-width: 900px) { ... }

/* Tablet portrait */
@media (max-width: 768px) { ... }

/* Mobile */
@media (max-width: 480px) { ... }
```

## Internationalization (i18n)

The site supports two languages:

- **Spanish (ES)** - Default language
- **English (EN)** - Alternative language

The translation system is managed in `i18n.js` with `data-i18n` attributes in the HTML.

### Adding new translations:

1. Open `i18n.js`
2. Add your text in both languages:
```javascript
const translations = {
  en: {
    "hero.title": "Safe Cargo",
    "hero.subtitle": "Smart monitoring..."
  },
  es: {
    "hero.title": "Carga Segura",
    "hero.subtitle": "Monitoreo inteligente..."
  }
};
```

## Maintenance

### Changing images:
1. Replace the files in the corresponding `assets/` folder
2. Keep the same names or update the paths in `index.html`

### Modifying styles:
1. Edit `styles.css`
2. Use existing CSS variables to maintain consistency
3. Test on different devices

### Updating content:
1. Edit the text directly in `index.html`
2. If using i18n, also update `i18n.js`

## SEO and Meta Tags

Make sure to customize the meta tags in `index.html`:

```html
<title>CargaSafe - Smart monitoring for reliable transportation</title>
<meta name="description" content="Your description here">
<meta name="keywords" content="IoT, transport, logistics, monitoring">
```

---

**Last update:** October 2025  
**Version:** 1.0.0  
**Status:** In production

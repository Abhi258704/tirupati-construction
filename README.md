# Tirupati Construction - Modern Website

A premium, production-ready construction company website built with Next.js 15, React, Tailwind CSS, Framer Motion, and Lucide React.

## 🚀 Features

### Design & UX
- **Mobile-First Responsive Design**: Perfect on all devices (mobile, tablet, desktop)
- **Dark Slate + Teal Branding**: Professional color scheme matching company identity
- **Modern Agency-Quality UI**: Contemporary design with premium feel
- **Smooth Animations**: Subtle, intentional motion using Framer Motion
- **Professional Industrial Look**: Tailored specifically for construction industry

### Sections
1. **Navbar** - Fixed navigation with mobile menu
2. **Hero** - Eye-catching hero section with stats and CTA
3. **About** - Company story, mission, and leadership
4. **Services** - 6 service offerings with icons and descriptions
5. **Projects** - Showcase of 50+ completed projects with details
6. **Why Choose Us** - Trust signals and differentiators
7. **Machinery & Equipment** - 12+ equipment items listed
8. **Clients** - Trusted client logos and testimonials
9. **Gallery** - Visual project showcase
10. **Contact** - Contact form and information
11. **Footer** - Complete footer with links and info

### Technical Features
- ✅ Production-ready code
- ✅ Reusable components with clean architecture
- ✅ Modern cards with hover effects
- ✅ Form validation and submission handling
- ✅ SEO optimized
- ✅ Accessibility best practices
- ✅ Zero external API dependencies
- ✅ Optimized performance

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

## 🛠️ Installation

1. **Clone or download the project**
```bash
cd tirupati-construction
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open in browser**
Navigate to `http://localhost:3000`

## 📁 Project Structure

```
tirupati-construction/
├── src/
│   ├── app/
│   │   ├── layout.jsx          # Root layout
│   │   └── page.jsx            # Home page
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar
│   │   ├── Hero.jsx            # Hero section
│   │   ├── About.jsx           # About section
│   │   ├── Services.jsx        # Services section
│   │   ├── Projects.jsx        # Projects showcase
│   │   ├── WhyChooseUs.jsx    # Why Choose Us section
│   │   ├── Machinery.jsx       # Equipment section
│   │   ├── Clients.jsx         # Clients section
│   │   ├── Gallery.jsx         # Gallery section
│   │   ├── Contact.jsx         # Contact section
│   │   └── Footer.jsx          # Footer
│   └── styles/
│       └── globals.css         # Global styles
├── public/                      # Static assets
├── next.config.js              # Next.js config
├── tailwind.config.js          # Tailwind config
├── postcss.config.js           # PostCSS config
├── package.json                # Dependencies
└── README.md                   # This file
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  'slate-dark': '#1a3a3a',
  'slate': '#2d5a5a',
  'teal-primary': '#0891b2',
  'teal-bright': '#06b6d4',
}
```

### Content
Edit individual component files in `src/components/` to update:
- Company information
- Service descriptions
- Project details
- Team members
- Contact information

### Typography
Modify font family and scale in `tailwind.config.js`:
```javascript
fontFamily: {
  sans: ['Inter', 'sans-serif'],
}
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Deploy the 'out' folder to Netlify
```

### Deploy to Other Platforms
1. Build the project: `npm run build`
2. Start production server: `npm run start`
3. Deploy the `.next` folder and public assets

## 📱 Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔧 Available Scripts

```bash
# Development
npm run dev           # Start development server

# Production
npm run build         # Build for production
npm run start         # Start production server

# Linting
npm run lint          # Run ESLint
```

## 📈 Performance Optimizations
- Lazy loading of components with Framer Motion
- Optimized images and assets
- CSS minification with Tailwind
- Smooth scroll behavior
- Efficient animations

## ♿ Accessibility
- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance
- Reduced motion support

## 📞 Contact Information
Default contact details (update in components):
- **Phone**: +91 98986 70453 / 70439 62610
- **Email**: janralsingh99@gmail.com
- **Address**: 402, Mahaveer Galaxy, Shantivan Society, Umbergaon (east) -396 170

## 📝 License
This project is proprietary. All rights reserved to Tirupati Construction.

## 🤝 Support
For technical support or customization requests, contact the development team.

---

**Built with** ❤️ using Next.js 15, React 19, Tailwind CSS, and Framer Motion
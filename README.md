# 🚀 ReactfolioX - Modern Portfolio Website

A **cutting-edge, mobile-first portfolio website** built with Next.js 15, featuring advanced mobile optimizations, PWA capabilities, and enterprise-level performance enhancements.

![Portfolio Preview](https://img.shields.io/badge/Next.js-15.3.3-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC)
![PWA](https://img.shields.io/badge/PWA-Ready-green)
![Mobile Optimized](https://img.shields.io/badge/Mobile-First-orange)

## 🌟 Live Demo

**View the live portfolio:** [https://portfolio-gurleen.vercel.app/](https://portfolio-gurleen.vercel.app/)

## ✨ Key Features

### 🎨 **Modern UI/UX**
- **Responsive Design** - Perfect on all devices (mobile, tablet, desktop)
- **Dark/Light Theme** - System-aware theme switching
- **Smooth Animations** - Hardware-accelerated transitions
- **Professional Typography** - Inter & Space Grotesk fonts
- **Accessibility First** - WCAG 2.1 AA compliant

### 📱 **Advanced Mobile Experience**
- **App-like Scrolling** - CSS Scroll Snap with momentum
- **Touch-Optimized** - 44px+ touch targets, gesture support
- **Pull-to-Refresh** - Native mobile refresh functionality
- **PWA Ready** - Installable web app with offline support
- **Performance Adaptive** - Adjusts to device capabilities

### 🛠️ **Technical Excellence**
- **Next.js 15** - Latest App Router with Server Components
- **TypeScript** - Full type safety and IntelliSense
- **Tailwind CSS** - Utility-first styling with custom design system
- **Radix UI** - Accessible, unstyled UI primitives
- **React Hook Form** - Performant forms with Zod validation

## 📱 Mobile Optimizations

### 🚀 **Performance Enhancements**
- **Battery-Aware** - Reduces animations on low battery (<20%)
- **Network Adaptive** - Respects save-data preferences
- **Memory Optimized** - Adapts to device memory constraints
- **Hardware Acceleration** - GPU-accelerated animations
- **Lazy Loading** - Images load progressively

### 🎯 **Mobile-First Features**
- **Enhanced Scroll Snap** - App-like section transitions
- **Touch Gestures** - Swipe detection and momentum scrolling
- **Safe Area Support** - Compatible with notched devices
- **Foldable Device Ready** - Adapts to new form factors
- **Cross-Platform** - iOS Safari, Android Chrome, Windows Mobile

### 🔧 **PWA Capabilities**
- **Service Worker** - Offline caching and background sync
- **Web App Manifest** - Native app-like installation
- **Push Notifications** - Ready for future enhancements
- **Home Screen Icons** - Multiple sizes and formats
- **Splash Screen** - Professional loading experience

### ♿ **Accessibility Features**
- **Keyboard Navigation** - Full keyboard support
- **Screen Reader** - ARIA labels and semantic HTML
- **Focus Management** - Visible focus indicators
- **Reduced Motion** - Respects user preferences
- **High Contrast** - Enhanced visibility options

## 🛠️ Tech Stack

### **Core Framework**
- **Next.js 15.3.3** - React framework with App Router
- **React 18.3.1** - UI library with concurrent features
- **TypeScript 5.0** - Type-safe JavaScript

### **Styling & UI**
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **Tailwind Animate** - Animation utilities

### **Forms & Validation**
- **React Hook Form** - Performant form handling
- **Zod** - TypeScript-first schema validation
- **@hookform/resolvers** - Form validation integration

### **Performance & PWA**
- **Service Worker** - Offline functionality
- **Web App Manifest** - PWA configuration
- **Next.js Image** - Optimized image loading

### **Development Tools**
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Turbopack** - Fast development bundler

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── favicon.ico
│   ├── manifest.json          # PWA manifest
│   ├── sw.js                  # Service worker
│   └── browserconfig.xml      # Windows tile config
├── src/
│   ├── app/
│   │   ├── globals.css        # Global styles + mobile optimizations
│   │   ├── layout.tsx         # Root layout with PWA meta tags
│   │   ├── page.tsx           # Main page with enhanced scrolling
│   │   └── loading.tsx        # Loading states
│   ├── components/
│   │   ├── ui/                # Reusable UI components
│   │   ├── sections/          # Page sections (Hero, About, etc.)
│   │   ├── header.tsx         # Navigation header
│   │   ├── sidebar.tsx        # Desktop sidebar navigation
│   │   └── theme-provider.tsx # Theme management
│   └── lib/
│       └── utils.ts           # Utility functions
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- **Node.js 18+**
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/grlnsngh/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   ```
   http://localhost:9002
   ```

### Build for Production

```bash
npm run build
npm run start
```

### Development Scripts

```bash
npm run dev      # Start development server with Turbopack
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
npm run typecheck # Run TypeScript type checking
```

## � Mobile Testing

### Device Testing
- **Chrome DevTools** - Device emulation
- **BrowserStack** - Cross-browser testing
- **Physical Devices** - Real device testing

### Performance Testing
- **Lighthouse** - Mobile performance audit
- **WebPageTest** - Real device testing
- **PageSpeed Insights** - Google performance metrics

## 🎨 Customization

### Theme Configuration
Edit `src/app/globals.css` to customize:
- Color palette
- Typography
- Spacing
- Mobile breakpoints

### Content Updates
Modify sections in `src/components/sections/`:
- `hero.tsx` - Main introduction
- `about.tsx` - Personal information
- `projects.tsx` - Portfolio showcase
- `skills.tsx` - Technical skills
- `contact.tsx` - Contact form

### PWA Configuration
Update `public/manifest.json` for:
- App name and description
- Icons and splash screens
- Theme colors
- Display preferences

## 🚀 Deployment

### Vercel (Recommended)
1. **Connect GitHub repository**
2. **Deploy automatically** on push to main
3. **Custom domain** support included

### Other Platforms
- **Netlify** - Drag & drop deployment
- **Railway** - Full-stack deployment
- **Render** - Cloud hosting

## 📊 Performance Metrics

### Core Web Vitals
- **Lighthouse Score:** 95+ (Mobile & Desktop)
- **First Contentful Paint:** <1.5s
- **Largest Contentful Paint:** <2.5s
- **Cumulative Layout Shift:** <0.1

### Mobile Optimization
- **Mobile-Friendly:** 100/100 (Google)
- **PWA Score:** Perfect (Lighthouse)
- **Accessibility:** WCAG 2.1 AA Compliant

## 🤝 Contributing

1. **Fork the repository**
2. **Create feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit changes** (`git commit -m 'Add amazing feature'`)
4. **Push to branch** (`git push origin feature/amazing-feature`)
5. **Open Pull Request**

### Development Guidelines
- Follow **TypeScript** best practices
- Maintain **accessibility standards**
- Test on **multiple devices**
- Follow **conventional commits**

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** - Amazing React framework
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component library
- **Vercel** - Excellent deployment platform

## 📧 Contact

**Gurleen Singh**
- **Portfolio:** [portfolio-gurleen.vercel.app](https://portfolio-gurleen.vercel.app/)
- **LinkedIn:** [linkedin.com/in/grlnsngh](https://www.linkedin.com/in/grlnsngh/)
- **Email:** grlnsngh@gmail.com
- **GitHub:** [github.com/grlnsngh](https://github.com/grlnsngh)

---

**⭐ Star this repo if you found it helpful!**

*Built with ❤️ using Next.js, TypeScript, and modern web technologies*

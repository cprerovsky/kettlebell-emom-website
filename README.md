# Kettlebell EMOM Builder Website

**Built with Astro** • **Powered by merox-erudite theme**

> Stronger through structure. Train for decades, not for likes. Smart kettlebell workouts built in seconds.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📂 Project Structure

```
kettlebell-emom-website/
├── src/
│   ├── components/         # Reusable UI components
│   ├── content/           # Blog posts and authors
│   │   ├── blog/         # Blog post MDX files
│   │   └── authors/      # Author profiles
│   ├── layouts/          # Page layouts
│   ├── pages/            # Route pages
│   ├── styles/           # Global styles
│   ├── lib/              # Utility functions
│   └── consts.ts         # Site configuration
├── public/               # Static assets
│   ├── media/           # Images and app icons
│   ├── CNAME            # Custom domain
│   └── robots.txt       # SEO configuration
├── _archive/            # Original HTML site backup
└── dist/                # Production build output
```

---

## 🎨 Brand & Design

### Colors
- **Background:** Gray-900 (`#111827`)
- **Primary:** Blue-400 (`#60A5FA`)
- **Accent:** Indigo-600 (`#4F46E5`)
- **Success:** Green-500 (`#10B981`)

### Typography
- **Font:** Inter (weights 400, 600, 800)
- **Loaded from:** Google Fonts

### Theme
- **Mode:** Permanent dark theme
- **No light mode toggle** (intentional design choice)

---

## 📝 Content

### Pages
- **Homepage** (`/`) - Hero, features, screenshots, latest blog posts
- **Blog** (`/blog`) - Marketing blog posts
- **Support** (`/support`) - Contact form
- **Imprint** (`/imprint`) - Legal disclosure
- **Privacy** (`/privacy`) - GDPR-compliant privacy policy
- **Terms** (`/terms`) - Terms of use

### Blog Posts
1. **Welcome to Kettlebell EMOM Builder** - Introduction and brand philosophy
2. **Structure Beats Motivation Every Time** - Core training philosophy
3. **Why Kettlebells Work for Sustainable Strength** - Equipment philosophy

### Authors
- **Kettlebell EMOM Builder** - Brand voice for blog posts

---

## 🔧 Features

### Built-in
- ✅ Blog with MDX support
- ✅ Google Analytics with GDPR consent banner
- ✅ RSS feed (`/rss.xml`)
- ✅ Sitemap generation
- ✅ SEO optimization
- ✅ Open Graph images
- ✅ Responsive design
- ✅ Dark theme
- ✅ Contact form (FormSubmit.co integration)

### Astro Features
- ⚡ Fast build times (~3.7s)
- 📦 Optimized bundle size (14MB with images)
- 🎯 Zero JavaScript by default (progressively enhanced)
- 🔄 Hot module replacement in dev mode

---

## 📊 Migration Status

**Status:** ✅ **Phase 5 In Progress** - Automated testing complete

### Completed Phases
- ✅ Phase 1: Environment Setup
- ✅ Phase 2: Theme Customization
- ✅ Phase 3: Content Migration
- ✅ Phase 4: Blog Setup
- 🔄 Phase 5: Testing & Optimization (automated checks done)

### Remaining Phases
- ⏳ Phase 5: Manual browser testing
- ⏳ Phase 6: Deployment Setup
- ⏳ Phase 7: GitHub Actions CI/CD
- ⏳ Phase 8: Final Launch

See [ASTRO_MIGRATION_PLAN.md](./ASTRO_MIGRATION_PLAN.md) for detailed progress.

---

## 🧪 Testing

### Automated Testing ✅
- Production build: **Success** (20 pages)
- TypeScript: **No errors**
- Build time: **3.77s**
- RSS feed: **Valid XML**
- Sitemap: **Generated correctly**
- SEO files: **All present** (robots.txt, CNAME)

### Manual Testing Required ⚠️
See [TESTING-SUMMARY.md](./TESTING-SUMMARY.md) for comprehensive testing checklist:
- Visual testing in browser
- Mobile responsiveness
- Cross-browser compatibility
- Lighthouse performance audit
- Interactive features (carousel, forms, analytics)

---

## 🛠️ Tech Stack

- **Framework:** [Astro](https://astro.build) v5.16.6
- **Theme:** [merox-erudite](https://github.com/meroxes/merox-erudite) (customized)
- **Styling:** Tailwind CSS v4.1.17
- **React:** v19.2.0 (for interactive components)
- **Content:** MDX for blog posts
- **Analytics:** Google Analytics 4
- **Forms:** FormSubmit.co
- **Fonts:** Inter via Google Fonts
- **Node:** v22.19.0
- **Package Manager:** npm v11.6.2

---

## 📦 Deployment

### Recommended Platforms
1. **Vercel** (recommended)
   - Zero-config Astro support
   - Automatic deployments
   - Free tier available

2. **Netlify**
   - Good Astro support
   - GitHub integration
   - Free tier available

3. **GitHub Pages**
   - Free for public repos
   - Requires GitHub Actions setup

### Build Command
```bash
npm run build
```

### Output Directory
```
dist/
```

### Environment Variables
```env
PUBLIC_GA_ID=G-FX1ZDC9DSW
```

---

## 📄 License

Content and design © 2026 Kettlebell EMOM Builder

Built with [Astro](https://astro.build) using the [merox-erudite](https://github.com/meroxes/merox-erudite) theme.

---

## 🤝 Contributing

This is a private project for Kettlebell EMOM Builder. For questions or support, contact: contact@kbemom.com

---

## 📚 Documentation

- [Astro Documentation](https://docs.astro.build)
- [merox-erudite Theme](https://github.com/meroxes/merox-erudite)
- [Migration Plan](./ASTRO_MIGRATION_PLAN.md)
- [Testing Summary](./TESTING-SUMMARY.md)
- [Brand Guide](./brand-guide.md)
- [Product Brief](./product-brief.md)

---

**Built with ❤️ for sustainable strength training**

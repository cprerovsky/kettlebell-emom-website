# GitHub Pages Deployment Guide

**Repository:** cprerovsky/kettlebell-emom-website  
**Domain:** https://kbemom.com  
**Branch:** `astro` (development) → `gh-pages` (production)

---

## Quick Deployment

### Prerequisites
- All changes committed to `astro` branch
- Build tested locally with `npm run build`
- Preview tested locally with `npm run preview`

### Deployment Steps

```bash
# 1. Ensure you're on the astro branch
git checkout astro

# 2. Pull latest changes (if working with others)
git pull origin astro

# 3. Build the site
npm run build

# 4. Verify build output
ls -lh dist/  # Should show ~14MB, 20+ HTML files

# 5. Deploy to GitHub Pages (Option A - Recommended)
git subtree push --prefix dist origin gh-pages

# 6. Wait 1-2 minutes for GitHub Pages to update

# 7. Test the live site
open https://kbemom.com
```

---

## Deployment Options

### Option A: Git Subtree (Recommended)
Push only the `dist/` folder to `gh-pages` branch:

```bash
git subtree push --prefix dist origin gh-pages
```

**Pros:**
- Simple one-command deployment
- Keeps gh-pages branch clean (only contains built files)
- No need to switch branches

**Cons:**
- Can be slow for large sites
- Creates merge commits

### Option B: Manual Copy
More control, but requires branch switching:

```bash
# Build on astro branch
git checkout astro
npm run build

# Switch to gh-pages and copy files
git checkout gh-pages
rm -rf !(CNAME|.git)  # Clean old files (keep CNAME and .git)
cp -r dist/* .
git add .
git commit -m "Deploy: [describe changes]"
git push origin gh-pages

# Return to astro branch
git checkout astro
```

**Pros:**
- Full control over deployment
- Can review changes before pushing
- Clean commit history

**Cons:**
- More steps
- Easy to make mistakes

---

## Pre-Deployment Checklist

Before deploying, verify:

- [ ] `npm run build` completes without errors
- [ ] `npm run preview` shows correct site at localhost:1234
- [ ] All blog posts display correctly
- [ ] Images load (WebP screenshots)
- [ ] Analytics consent banner works
- [ ] Contact form works
- [ ] No console errors (F12 in browser)
- [ ] All links work (header, footer, blog)
- [ ] Lighthouse scores acceptable (run in Incognito)

---

## Post-Deployment Verification

After deployment, test on live site:

1. **Homepage:** https://kbemom.com
   - [ ] Hero section loads
   - [ ] Screenshot carousel rotates
   - [ ] "Latest from the Blog" shows 3 posts
   - [ ] App Store button works

2. **Blog:** https://kbemom.com/blog
   - [ ] All posts listed
   - [ ] Post pages load correctly
   - [ ] Images display
   - [ ] Navigation works

3. **Pages:**
   - [ ] Support form works: https://kbemom.com/support
   - [ ] Imprint address reveal works: https://kbemom.com/imprint
   - [ ] Privacy policy loads: https://kbemom.com/privacy
   - [ ] Terms load: https://kbemom.com/terms

4. **Technical:**
   - [ ] Sitemap accessible: https://kbemom.com/sitemap-index.xml
   - [ ] RSS feed works: https://kbemom.com/rss.xml
   - [ ] robots.txt present: https://kbemom.com/robots.txt
   - [ ] Analytics tracking fires (check Network tab)
   - [ ] No 404 errors in Console

5. **Mobile:** Test on actual device or DevTools responsive mode
   - [ ] Layout responsive
   - [ ] Touch interactions work
   - [ ] Images scale correctly

---

## Rollback Procedure

If deployment has issues:

```bash
# Option 1: Revert to previous commit on gh-pages
git checkout gh-pages
git log  # Find previous good commit
git reset --hard <commit-hash>
git push -f origin gh-pages

# Option 2: Redeploy from known good astro branch commit
git checkout astro
git checkout <good-commit-hash>
npm run build
git subtree push --prefix dist origin gh-pages
git checkout astro  # Return to latest
```

---

## Blog Publishing Workflow

### Adding a New Blog Post

1. **Create the post:**
   ```bash
   mkdir -p src/content/blog/your-post-slug
   touch src/content/blog/your-post-slug/index.mdx
   ```

2. **Add frontmatter:**
   ```mdx
   ---
   title: "Your Post Title"
   description: "Brief description for SEO"
   publishDate: 2026-01-15
   tags: ["training-philosophy", "mindset"]
   author: kettlebell-emom
   image:
     src: ./cover.jpg
     alt: "Image description"
   draft: false
   ---
   
   Your content here...
   ```

3. **Preview locally:**
   ```bash
   npm run dev
   open http://localhost:1235/blog/your-post-slug
   ```

4. **Review:**
   - Check formatting
   - Test links
   - Verify images
   - Read for typos
   - Check mobile view

5. **Commit:**
   ```bash
   git add src/content/blog/your-post-slug
   git commit -m "Add blog post: Your Post Title"
   ```

6. **Deploy:**
   ```bash
   npm run build
   git subtree push --prefix dist origin gh-pages
   ```

7. **Verify live:**
   - Visit https://kbemom.com/blog/your-post-slug
   - Check it appears in blog listing
   - Check it appears on homepage (if one of latest 3)

### Draft Posts

To work on a post without publishing:

```mdx
---
draft: true  # Won't appear in production
---
```

Remove `draft: true` when ready to publish.

---

## Troubleshooting

### Build Fails
```bash
# Check for errors
npm run build 2>&1 | tee build.log

# Common fixes:
npm ci  # Reinstall dependencies
rm -rf node_modules package-lock.json && npm install
```

### Deployment Fails
```bash
# If subtree push fails, force push:
git push origin `git subtree split --prefix dist astro`:gh-pages --force

# Or use manual copy method (Option B)
```

### Site Shows Old Content
```bash
# Clear GitHub Pages cache:
# 1. Push an empty commit:
git commit --allow-empty -m "Clear cache"
git subtree push --prefix dist origin gh-pages

# 2. Wait 5 minutes
# 3. Hard refresh browser: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
```

### Images Not Loading
- Check paths use `/` prefix: `/media/screenshot-1.webp`
- Verify files in `public/media/` directory
- Check `dist/media/` after build
- Clear browser cache

### Analytics Not Tracking
- Check `.env` has correct GA ID: `G-FX1ZDC9DSW`
- Verify consent banner appears
- Click "Accept" to enable tracking
- Check Network tab for gtag.js requests

---

## Emergency Contacts

**Domain Registrar:** Check DNS settings if domain stops resolving  
**GitHub Pages Status:** https://www.githubstatus.com/  
**Repository Issues:** https://github.com/cprerovsky/kettlebell-emom-website/issues

---

## Useful Commands

```bash
# Development
npm run dev          # Start dev server (localhost:1235)
npm run build        # Build for production
npm run preview      # Preview production build (localhost:1234)

# Testing
npm run astro check  # Type check Astro files
grep -r "TODO" src/  # Find TODO comments

# Git
git status           # Check uncommitted changes
git log --oneline    # View recent commits
git diff astro gh-pages  # Compare branches

# Deployment
git subtree push --prefix dist origin gh-pages  # Deploy
git push origin astro                          # Push source code
```

---

## Maintenance Notes

**Regular Tasks:**
- Update dependencies monthly: `npm update`
- Check Lighthouse scores quarterly
- Review Analytics quarterly
- Update blog posts regularly (aim for 1-2 per month)

**Performance Monitoring:**
- Target: Performance 85+, Accessibility 95+, SEO 95+
- Current: Performance 70, Accessibility 95, Best Practices 96, SEO 92
- WebP conversion improved performance significantly

**Backup Strategy:**
- Source code: Git repository (GitHub)
- Built site: `gh-pages` branch
- Images: Stored in `public/media/`
- Environment variables: Documented in `.env.example`

---

Last Updated: January 2, 2026

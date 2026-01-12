# Deployment Guide

This guide explains how to deploy your Angular portfolio to various cloud platforms.

## 🚀 Quick Deploy Options

### Option 1: Netlify (Recommended - Easiest)

1. **Sign up/Login**: Go to [netlify.com](https://netlify.com) and create a free account
2. **Connect GitHub**: Click "Add new site" → "Import an existing project"
3. **Select Repository**: Choose `deebak18/deebak-portfolio`
4. **Configure Build**:
   - Build command: `npm run build`
   - Publish directory: `dist/deebak-portfolio-new/browser`
   - Branch: `Portfolio`
5. **Deploy**: Click "Deploy site"
6. **Custom Domain**: Go to Site settings → Domain management to add a custom domain

Your site will be live at: `https://your-site-name.netlify.app`

---

### Option 2: Vercel (Also Very Easy)

1. **Sign up/Login**: Go to [vercel.com](https://vercel.com) and create a free account
2. **Import Project**: Click "Add New Project" → Import from GitHub
3. **Select Repository**: Choose `deebak18/deebak-portfolio`
4. **Configure**:
   - Framework Preset: Angular
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `dist/deebak-portfolio-new/browser`
5. **Deploy**: Click "Deploy"

Your site will be live at: `https://your-site-name.vercel.app`

---

### Option 3: GitHub Pages (Free)

1. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Settings → Pages
   - Source: Select "GitHub Actions"
   
2. **Push the workflow file** (already created):
   ```bash
   git add .github/workflows/deploy.yml
   git commit -m "Add GitHub Pages deployment workflow"
   git push origin Portfolio
   ```

3. **Wait for deployment**: GitHub Actions will automatically deploy your site

4. **Access your site**: `https://deebak18.github.io/deebak-portfolio/`

---

## 📝 Important Notes

- **Resume File**: Make sure to add your `resume.pdf` file to `src/assets/` before deploying
- **Environment**: All platforms will automatically build and deploy on every push to your repository
- **Custom Domain**: You can add a custom domain (like `yourname.com`) on any platform

## 🔧 Manual Build & Deploy

If you want to manually deploy:

```bash
# Build the project
npm run build

# The built files will be in: dist/deebak-portfolio-new/browser
# Upload these files to any static hosting service
```

---

## ✅ Recommended: Netlify

Netlify is recommended because:
- ✅ Easiest setup (just connect GitHub)
- ✅ Free SSL certificate
- ✅ Custom domain support
- ✅ Automatic deployments on every push
- ✅ Great performance (CDN)
- ✅ No configuration needed (netlify.toml is already set up)

---

## 🎯 Next Steps

1. Choose a platform (Netlify recommended)
2. Deploy your site
3. Share the URL with HR and recruiters!
4. Add your resume PDF to `src/assets/resume.pdf`
5. Commit and push - it will auto-deploy

Good luck! 🚀

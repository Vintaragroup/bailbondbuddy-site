# Deployment Guide - BailBondBuddy.com

## Overview

This guide will help you deploy your Bail Bond Buddy marketing site to your domain. Your site is a static React application that can be hosted on any modern hosting platform.

---

## Quick Start (Recommended: Vercel)

**Vercel is the fastest and easiest option for React apps.**

### Step 1: Prepare Your Code

1. **Download all files** from this project
2. **Create a project folder** on your computer (e.g., `bailbondbuddy-site`)
3. **Copy all files** into this folder, maintaining the structure:
   ```
   bailbondbuddy-site/
   ├── App.tsx
   ├── components/
   ├── styles/
   ├── utils/
   ├── package.json (you'll create this)
   └── vite.config.ts (you'll create this)
   ```

### Step 2: Create Required Configuration Files

Create `package.json` in your root folder:

```json
{
  "name": "bailbondbuddy-site",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "lucide-react": "^0.544.0",
    "motion": "^10.18.0",
    "sonner": "^2.0.3",
    "recharts": "^2.12.7",
    "@radix-ui/react-accordion": "^1.2.2",
    "@radix-ui/react-alert-dialog": "^1.1.4",
    "@radix-ui/react-aspect-ratio": "^1.1.1",
    "@radix-ui/react-avatar": "^1.1.2",
    "@radix-ui/react-checkbox": "^1.1.3",
    "@radix-ui/react-dialog": "^1.1.4",
    "@radix-ui/react-dropdown-menu": "^2.1.4",
    "@radix-ui/react-label": "^2.1.1",
    "@radix-ui/react-popover": "^1.1.4",
    "@radix-ui/react-progress": "^1.1.1",
    "@radix-ui/react-radio-group": "^1.2.2",
    "@radix-ui/react-select": "^2.1.4",
    "@radix-ui/react-separator": "^1.1.1",
    "@radix-ui/react-slider": "^1.2.2",
    "@radix-ui/react-switch": "^1.1.2",
    "@radix-ui/react-tabs": "^1.1.2",
    "@radix-ui/react-tooltip": "^1.1.6",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.5.5"
  },
  "devDependencies": {
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.4",
    "typescript": "^5.6.3",
    "vite": "^5.4.11",
    "tailwindcss": "^4.0.0",
    "@tailwindcss/vite": "^4.0.0"
  }
}
```

Create `vite.config.ts` in your root folder:

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
      },
    },
  },
});
```

Create `tsconfig.json` in your root folder:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["."],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

Create `tsconfig.node.json`:

```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
```

Create `index.html` in your root folder:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Modern CRM and operations platform for bail bond agencies. Case management, GPS tracking, automated messaging, and compliance tools." />
    <title>Bail Bond Buddy - Modern CRM for Bail Bond Agencies</title>
    
    <!-- Preconnect to external resources for performance -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/main.tsx"></script>
  </body>
</html>
```

Create `main.tsx` in your root folder:

```typescript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/globals.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### Step 3: Deploy to Vercel

**Option A: Deploy via GitHub (Recommended)**

1. **Install Git** (if not already installed)
2. **Create a GitHub account** at https://github.com
3. **Create a new repository** named `bailbondbuddy-site`
4. **Push your code to GitHub:**
   ```bash
   cd bailbondbuddy-site
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/bailbondbuddy-site.git
   git push -u origin main
   ```

5. **Go to Vercel:**
   - Visit https://vercel.com
   - Sign up with your GitHub account
   - Click "New Project"
   - Import your `bailbondbuddy-site` repository
   - Vercel will auto-detect it's a Vite project
   - Click "Deploy"

6. **Done!** Your site will be live at `your-project.vercel.app` in ~2 minutes

**Option B: Deploy via Vercel CLI**

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   cd bailbondbuddy-site
   npm install
   vercel
   ```

3. Follow the prompts - Vercel will build and deploy automatically

### Step 4: Add Your Custom Domain

1. **In Vercel Dashboard:**
   - Go to your project
   - Click "Settings" → "Domains"
   - Enter `bailbondbuddy.com`
   - Click "Add"

2. **Update DNS Records** (in your domain registrar):

   **Option A: Using Nameservers (Recommended)**
   - Vercel will provide nameservers (e.g., `ns1.vercel-dns.com`)
   - Go to your domain registrar (GoDaddy, Namecheap, etc.)
   - Update nameservers to Vercel's nameservers
   - Wait 24-48 hours for DNS propagation

   **Option B: Using A Records**
   - Add these A records in your DNS settings:
     ```
     Type: A
     Name: @
     Value: 76.76.21.21
     ```
   - Add CNAME for www:
     ```
     Type: CNAME
     Name: www
     Value: cname.vercel-dns.com
     ```

3. **Enable HTTPS:** Vercel automatically provisions SSL certificates

---

## Alternative Hosting Options

### Option 2: Netlify

**Similar to Vercel, great for static sites**

1. **Build your site locally:**
   ```bash
   npm install
   npm run build
   ```

2. **Deploy to Netlify:**
   - Go to https://netlify.com
   - Drag and drop your `dist` folder
   - Or connect via GitHub (like Vercel)

3. **Add custom domain:**
   - Netlify Dashboard → Domain Settings
   - Add `bailbondbuddy.com`
   - Update DNS records as instructed

**Netlify Build Settings:**
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 18

### Option 3: Cloudflare Pages

**Free, fast CDN included**

1. **Push to GitHub** (same as Vercel)
2. **Go to Cloudflare Pages:**
   - https://pages.cloudflare.com
   - Connect GitHub repository
   - Build command: `npm run build`
   - Build output: `dist`
   - Click Deploy

3. **Add domain in Cloudflare:**
   - Transfer your domain to Cloudflare (free)
   - Or point nameservers to Cloudflare
   - Pages automatically connects to your domain

### Option 4: GitHub Pages

**Free, but slightly more complex for React apps**

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json:**
   ```json
   {
     "homepage": "https://bailbondbuddy.com",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

4. **Configure custom domain** in GitHub repo settings

### Option 5: Traditional Web Hosting (cPanel/FTP)

**If you have existing hosting with cPanel**

1. **Build locally:**
   ```bash
   npm install
   npm run build
   ```

2. **Upload `dist` folder contents:**
   - Use FTP client (FileZilla, etc.)
   - Upload everything from `dist/` to your `public_html/` folder

3. **Create `.htaccess` file** in `public_html/`:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

---

## Post-Deployment Checklist

### Immediate Tasks

- [ ] **Configure Analytics**
  - Add your GA4 Measurement ID in `/utils/analytics.ts`
  - Redeploy to activate tracking

- [ ] **Test All Pages**
  - Home: https://bailbondbuddy.com
  - Product: https://bailbondbuddy.com (click Product in nav)
  - Pricing: https://bailbondbuddy.com (click Pricing)
  - Contact: https://bailbondbuddy.com (click Contact)
  - All other pages

- [ ] **Test Contact Form**
  - Submit a test message
  - Verify you receive the email

- [ ] **Test on Mobile Devices**
  - iPhone/iPad
  - Android phones/tablets

- [ ] **Run Lighthouse Audit**
  - Open Chrome DevTools
  - Run Lighthouse
  - Target: 90+ on all metrics

- [ ] **Verify SSL Certificate**
  - Check for green padlock in browser
  - Visit https://bailbondbuddy.com

### SEO & Marketing

- [ ] **Submit to Google Search Console**
  - https://search.google.com/search-console
  - Add property: bailbondbuddy.com
  - Verify ownership
  - Submit sitemap (optional)

- [ ] **Create XML Sitemap** (optional)
  - Use https://www.xml-sitemaps.com
  - Upload to root directory
  - Submit to Google Search Console

- [ ] **Set up Google Analytics**
  - Already configured in code
  - Just add your Measurement ID

- [ ] **Social Media Meta Tags** (optional enhancement)
  - Add Open Graph tags for Facebook
  - Add Twitter Card tags

### Ongoing Maintenance

- [ ] **Monitor Analytics Weekly**
  - Page views
  - Contact form submissions
  - User behavior

- [ ] **Check Performance Monthly**
  - Run Lighthouse audit
  - Monitor Core Web Vitals
  - Check page load speed

- [ ] **Update Content Quarterly**
  - Blog articles on Resources page
  - FAQ updates
  - Pricing updates if needed

---

## Troubleshooting

### Build Errors

**Error: Module not found**
- Run `npm install` to install all dependencies
- Check that all import paths are correct

**Error: TypeScript errors**
- Run `npm run build` to see specific errors
- Check that all files use correct types

### Deployment Issues

**Site shows blank page**
- Check browser console for errors
- Verify all files uploaded correctly
- Check that `index.html` is in root

**404 errors on page refresh**
- Add redirect rules (see `.htaccess` above)
- For Vercel/Netlify: Create `vercel.json` or `_redirects`

**Images not loading**
- Check image paths are relative
- Verify images are in `dist` folder after build

### DNS Issues

**Domain not connecting**
- Wait 24-48 hours for DNS propagation
- Use https://dnschecker.org to verify DNS
- Double-check nameservers/A records

**SSL certificate issues**
- Most platforms auto-provision SSL
- May take 10-60 minutes after domain connection
- Check platform documentation

---

## Performance Tips

### Optimize Images (Optional)

1. **Compress images** before uploading:
   - Use https://tinypng.com
   - Or https://squoosh.app

2. **Use WebP format** for better compression:
   - Convert images to WebP
   - Update image paths in code

### Enable Caching

**Vercel/Netlify:** Automatic caching enabled

**Traditional hosting:** Add to `.htaccess`:
```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

---

## Cost Comparison

| Platform | Free Tier | Pricing | Best For |
|----------|-----------|---------|----------|
| **Vercel** | Generous free tier | $20/mo Pro | React apps, auto-deploy |
| **Netlify** | 100GB bandwidth | $19/mo Pro | Static sites, forms |
| **Cloudflare Pages** | Unlimited bandwidth | $20/mo | Global CDN, DNS |
| **GitHub Pages** | Free (public repos) | Free | Open source projects |
| **Traditional Hosting** | Varies | $5-20/mo | Existing hosting |

**Recommendation:** Use Vercel free tier initially. It's perfect for your site.

---

## Support & Resources

### Documentation
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)

### Community Support
- [Vercel Discord](https://vercel.com/discord)
- [Stack Overflow](https://stackoverflow.com)
- [GitHub Issues](https://github.com)

---

## Quick Reference Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to Vercel
vercel

# Deploy to Netlify
netlify deploy --prod
```

---

## Need Help?

If you run into any issues:

1. **Check the error message** in console/terminal
2. **Search Google** for the specific error
3. **Check platform documentation** (Vercel/Netlify/etc.)
4. **Ask on Stack Overflow** with the error message

---

**You're Ready to Deploy!** 🚀

Choose Vercel for the easiest deployment, or pick any option that fits your needs. Your site is fully optimized and ready to go live!

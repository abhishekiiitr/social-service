# AquaCare Lucknow - Deployment Guide

## Production Build
```bash
npm run build:prod
```

## Deployment Checklist
- ✅ Removed unused contact component
- ✅ Optimized images and backgrounds for mobile
- ✅ Professional typography implemented
- ✅ Clean header with single call-to-action
- ✅ No console.log statements
- ✅ Production build optimization enabled

## Server Configuration
For deployment to static hosting (Netlify, Vercel, etc.):
1. Build with `npm run build:prod`
2. Upload the `dist/ro-lucknow/browser` folder
3. Configure routing redirects for SPA

## Environment Variables (if needed)
- Set production URLs in environment files
- Update contact information in `src/app/shared/contact-info.ts`
- Verify all meta tags in `src/index.html`

## Performance Features
- Optimized fonts with preload
- Mobile-first responsive design
- Lazy loading ready
- SEO optimized with meta tags and schema markup
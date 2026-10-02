# Happy Boyfriend Day Scrapbook 💖

An interactive, romantic digital scrapbook created with love for National Boyfriend Day. Designed with cute scrapbook textures, washi tape ribbons, interactive love coupons, an evasive runaway "NO" button, dream date cards, photo dumps, ambient lofi chime music box, and personal couple polaroids.

---

## 🚀 Features

- **Personalized Polaroids**: Features real photo memories integrated directly into the scrapbook.
- **Interactive Love Coupons**: 5 redeemable date vouchers with live timestamps, stamp bounce animations, cat reactions, and `localStorage` persistence.
- **Runaway "NO" Button**: Evasive physics with funny excuses and surrender form.
- **Dream Date Selector**: Tap to pick coffee, food feast, movie & cuddle, night walk, or cozy cuddles.
- **Ambient Lofi Music**: Built-in romantic music box chime synthesized with pure Web Audio API (100% offline, zero network lag, zero expired CDNs).
- **Romantic Micro-Interactions**: Particle heart & sparkle explosions, flower bouquet blooming, animated cat break, horizontal film strip, and hall-of-fame glowing polaroid.
- **Fully Responsive**: Mobile-first design that looks like an authentic paper scrapbook journal on mobile devices and renders as an elegant framed experience on tablets and desktop monitors.

---

## 📦 Project Structure

```
├── assets/
│   └── images/               # All project image assets & real couple photos
├── index.html                # Main production-ready entrypoint
├── server.js                 # Production Node/Express server with health checks
├── package.json              # NPM scripts and production dependencies
├── vercel.json               # Zero-config deployment for Vercel
├── netlify.toml              # Zero-config deployment for Netlify
├── .env.example              # Template for environment variables (Cloudinary, PORT)
├── .gitignore                # Protects secrets (.env) and node_modules
└── README.md
```

---

## 🌐 Production Deployment

This project is **100% deployment-ready** and contains no localhost-only or computer-specific paths.

### Option 1: Vercel (Recommended — 1-Click Static Deployment)
1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Keep default settings (`Framework Preset: Other`, `Root Directory: ./`).
4. Click **Deploy**. Your site will be live immediately with HTTPS!

### Option 2: Netlify
1. Push this repository to GitHub.
2. Go to [netlify.com](https://netlify.com) and click **Add new site** > **Import an existing project**.
3. Select your repository. Build command can remain blank and publish directory is `.`.
4. Click **Deploy site**.

### Option 3: GitHub Pages
1. In your GitHub repository, navigate to **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
3. Select `main` branch and `/ (root)` folder.
4. Click **Save**.

### Option 4: Render / Railway / Node Hosts
1. Push to GitHub and connect to [Render](https://render.com) or [Railway](https://railway.app).
2. Set Environment to `Node`.
3. Build command: `npm install`
4. Start command: `npm start`
5. The server will automatically bind to `process.env.PORT`.

---

## 💻 Local Development

### Running with Node:
```bash
npm install
npm start
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Running with any Static Server:
You can also open `index.html` directly in your browser or run:
```bash
npx serve .
```

---

## 🔐 Environment Variables

No secrets are committed to this repository. All environment variables can be configured using `.env` locally or in your deployment dashboard:

- `PORT` (Default: `3000`): Port for the Node server.
- `CLOUDINARY_CLOUD_NAME` (Optional): Cloudinary cloud name if external image hosting is desired.
- `CLOUDINARY_API_KEY` (Optional): Cloudinary API key.
- `CLOUDINARY_API_SECRET` (Optional): Cloudinary API secret.

---

## 🎀 Made with Love
Created for Omkar by Srusthi for National Boyfriend Day 2026.

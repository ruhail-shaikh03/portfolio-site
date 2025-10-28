# 🚀 Ruhail's AI Engineer Portfolio

A modern, professional portfolio website with Next.js, TypeScript, Framer Motion, and Sanity CMS.

**Live:** https://RuhailellRizwan.com

---

## 📋 Quick Start

### Prerequisites
- Node.js 16+, npm/yarn, Sanity account

### Setup

```bash
# Install dependencies
npm install
cd sanity && npm install && cd ..

# Create .env.local (add your Sanity Project ID)
cp .env.example .env.local

# Run development servers
npm run dev                  # Terminal 1: Frontend (localhost:3000)
cd sanity && npm run start   # Terminal 2: CMS (localhost:3333)

# Production
npm run build
npm run start
```

---

## 🛠️ Tech Stack

- **Next.js 13** | **React 18** | **TypeScript 4.8**
- **Tailwind CSS 3.3** | **Framer Motion 7.6**
- **Sanity 2.35** | **React Hook Form 7.39**

---

## 📁 Structure

```
components/    → About, Hero, Skills, Projects, Contact
pages/         → index.tsx + API routes
hooks/         → useMotionVariants (animations)
utils/         → Sanity data fetchers
styles/        → globals.css + Tailwind
sanity/        → CMS schemas & config
```

---

## 🎨 Design - "The Blueprint"

**Colors:** Navy Dark #0A192F | Mint Green #64FFDA | Ice White #CCD6F6

**Alternating Sections:** Hero/About/Skills/Contact (dark) ↔ Experience/Projects (light)

---

## ⚙️ Environment

`.env.local`:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_id
NEXT_PUBLIC_SANITY_DATASET=production
```

Get from [sanity.io/manage](https://sanity.io/manage)

---

## 📝 Content Management

Access Sanity Studio at `http://localhost:3333`

Add:
- **Experience** - Job title, company, dates, tech, achievements
- **Projects** - Title, image, description, link
- **Skills** - Name, icon, proficiency (0-100)
- **Page Info** - Bio, images, contact

---

## 🚀 Deploy

### Vercel
```bash
git push origin main
# Vercel auto-deploys, add env vars in dashboard
```

### Sanity
```bash
cd sanity && sanity deploy
```

---

## 📊 Analytics

Google Analytics: `G-VS643WZDTS`

View at [analytics.google.com](https://analytics.google.com/)

Change in `pages/index.tsx` lines 58-69

---

## 🔧 Commands

```bash
npm run dev      # Development
npm run build    # Build
npm run start    # Production
npm run lint     # Linting
```

---

## 🔍 Customization

**Colors:** Edit `tailwind.config.js`

**Fonts:** Update `styles/globals.css` imports + `tailwind.config.js`

**Sections:** Create component → import in `pages/index.tsx` → add to Header

**Animations:** Modify `hooks/useMotionVariants.ts`

---

## ⚠️ Troubleshooting

| Issue | Fix |
|-------|-----|
| Module errors | `rm -rf node_modules && npm install` |
| Sanity fails | Check `.env.local` + API settings |
| Images broken | Verify Sanity uploads |
| Port taken | `npm run dev -- -p 3001` |
| Build fails | `npx eslint --fix .` |

---

## 📚 Resources

[Next.js](https://nextjs.org/docs) | [Tailwind](https://tailwindcss.com) | [Framer Motion](https://www.framer.com/motion) | [Sanity](https://sanity.io/docs)

---

**Author:** Ruhail Shaikh | **Email:** Ruhailrizwan@gmail.com | **Status:** ✅ Production Ready

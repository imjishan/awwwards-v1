# HORIZON - Award-Winning Portfolio

A stunning portfolio website featuring an immersive 3D hero section with cosmic animations and cutting-edge web technologies.

## ✨ Features

### 🌌 HORIZON Hero Section
- **3D Starfield**: 5000+ animated particles with depth and rotation
- **Dynamic Nebula**: Shader-based cosmic backgrounds with color transitions  
- **Parallax Mountains**: Multi-layered silhouettes with scroll-based movement
- **Smooth Camera**: Cinematic transitions through cosmic scenes
- **GSAP Animations**: Professional character-by-character text reveals
- **Scroll Progress**: Beautiful vertical progress indicator
- **Responsive Design**: Optimized for all devices

### 🚀 Technologies
- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS 4** for styling
- **Three.js** for 3D graphics
- **GSAP** for animations
- **shadcn/ui** component structure

## 🛠️ Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Visit `http://localhost:3000` to see the HORIZON hero section in action.

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles + hero animations
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main page with hero section
├── components/
│   └── ui/
│       └── horizon-hero-section.tsx  # 3D hero component
├── lib/
│   └── utils.ts           # Utility functions
└── components.json        # shadcn/ui configuration
```

## 🎯 Performance

- **Bundle Size**: 176 kB (optimized)
- **First Load JS**: 276 kB total
- **SSR Safe**: Server-side rendering compatible
- **Mobile Optimized**: Reduced complexity on mobile devices

## 🚀 Deployment

This project is optimized for Vercel deployment:

1. **Push to GitHub**: All changes committed and ready
2. **Vercel Auto-Deploy**: Connects to your repository
3. **Build Success**: ✅ All TypeScript and build errors resolved
4. **Performance**: Fast loading with optimized bundles

### Vercel Configuration
- **Framework**: Next.js (auto-detected)
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Node.js Version**: 18.x (recommended)

## 🎨 Customization

### Hero Content
Edit the hero text in `components/ui/horizon-hero-section.tsx`:
```tsx
// Update title
{splitTitle("YOUR_TITLE")}

// Update subtitle
<p className="subtitle-line">Your custom subtitle</p>
```

### Colors & Animations
Modify the cosmic theme in `app/globals.css`:
- Gradient colors
- Animation timings
- Responsive breakpoints

## 🐛 Troubleshooting

### Build Issues
- Clear cache: `rm -rf .next`
- Reinstall: `rm -rf node_modules && npm install`
- Check TypeScript: All imports properly typed

### Performance
- Three.js loads only on client-side
- Fallback rendering for SSR
- Optimized star count for mobile

## 📄 License

MIT License - feel free to use for your own portfolio!

---

**Built with ❤️ using cutting-edge web technologies**

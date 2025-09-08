# SwapniResume - Interactive Portfolio Website

🚀 **A modern, interactive portfolio website showcasing software development expertise with stunning animations and AI-themed elements.**

## ✨ Features

### 🎬 **Techie Loading Screen**
- 4-second interactive loading animation
- Matrix-style terminal interface with lavender theme
- Typewriter effect with realistic coding commands
- Smooth fade-out transition

### 🎯 **Enhanced Hero Section**
- Interactive floating code snippets and AI icons
- Professional profile image integration
- Real-time animations (particles, glitch effects, typing)
- LinkedIn profile integration
- Smooth scroll indicator for better UX

### 🛠️ **Technical Stack**
- **Frontend**: React 19 + TypeScript
- **UI Library**: Material-UI (MUI) v7
- **Styling**: Emotion + CSS-in-JS
- **Build Tool**: Vite 6
- **Theme**: Modern dark theme with gradient accents

### 🎨 **Design Highlights**
- Modern glassmorphism design
- Sophisticated animation sequences
- Responsive layout for all devices
- Software development themed interactions
- Professional lavender color scheme

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/akashraks-cloud/SwapniResume.git

# Navigate to project directory
cd SwapniResume

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## 🎯 Key Components

### `LoadingScreen.tsx`
Interactive loading screen with:
- Matrix rain animation
- Terminal typewriter effect
- Scanning line effects
- 4-second duration with smooth transitions

### `HeroSection.tsx`
Main landing section featuring:
- Profile image with glow effects
- Floating code elements and tech icons
- Interactive animations
- LinkedIn integration
- Scroll down indicator

### `SkillsShowcase.tsx`
Technical skills presentation with:
- Interactive skill cards
- Progress bars with animations
- Hover effects and transitions

## 📁 Project Structure

```
SwapniResume/
├── src/
│   ├── components/          # React components
│   │   ├── LoadingScreen.tsx
│   │   ├── HeroSection.tsx
│   │   ├── SkillsShowcase.tsx
│   │   └── ...
│   ├── img/                 # Image assets
│   ├── theme/              # MUI theme configuration
│   └── types/              # TypeScript declarations
├── public/                 # Static assets
└── package.json
```

## 🎨 Customization

### Adding Your Profile Image
1. Place your image in `src/img/` folder
2. Update the import in `HeroSection.tsx`:
   ```typescript
   import profileImage from '../img/your-image.jpg';
   ```

### Modifying Colors
Update the theme in `src/theme/theme.ts` to customize:
- Primary/secondary colors
- Background gradients
- Text colors
- Animation colors

### Adjusting Animations
Animation timings and effects can be modified in individual component files using the `keyframes` definitions.

## 🌟 Live Demo

View the live portfolio at: [Your GitHub Pages URL]

## 👨‍💻 About

**Swapnil Pande**  
Senior Software Developer & AI Enthusiast  
14+ Years of Excellence in Java & React  

📧 swapnilbipinpande@gmail.com  
🔗 [LinkedIn Profile](https://www.linkedin.com/in/swapnil-pande)  

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🚀 Deployment

### GitHub Pages
1. Build the project: `npm run build`
2. Deploy the `dist` folder to GitHub Pages

### Vercel/Netlify
1. Connect your repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

---

⭐ **If you found this portfolio impressive, please star this repository!**

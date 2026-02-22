# Bhargava-Portfolio

A modern, ASCII art-themed portfolio website built with Next.js, React, and TypeScript. Features a sleek black background with vibrant magenta accents, showcasing projects, skills, and professional experience.

## 🎨 Features

- **ASCII Art Header** - Eye-catching animated ASCII art display of name
- **Dark Theme** - Black background with white text and magenta accents
- **Responsive Design** - Mobile-friendly layout that works on all devices
- **Project Showcase** - Highlight your best projects with descriptions and links
- **Skill Display** - Interactive skill bars showing proficiency levels
- **Experience Section** - Display work history and organizational roles
- **Education** - Academic background and achievements
- **Contact Links** - Social media and direct contact information
- **Smooth Animations** - Scan lines and visual effects for enhanced aesthetics

## 🚀 Tech Stack

- **Framework**: Next.js 16.1.0
- **UI Library**: React 19.2.0
- **Styling**: Tailwind CSS 4.1.9
- **Components**: Radix UI (40+ accessible components)
- **Language**: TypeScript
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Font**: JetBrains Mono
- **Analytics**: Vercel Analytics

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Bhargi777/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Configure your portfolio data**
   - Edit `/public/resumeData.json` with your personal information:
     - Personal details (name, email, phone, location)
     - Education
     - Work experience
     - Projects
     - Skills
     - Social links

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   - Navigate to `http://localhost:3000`

## 📝 Configuration

### Update Resume Data
Edit `/public/resumeData.json` to customize:
- **main**: Personal info, bio, contact details, social links
- **resume**: Education, work experience, skills
- **portfolio**: Featured projects with descriptions and links

### Customize Header
Edit `/components/hero.tsx` to change the ASCII art header:
```tsx
<pre className="text-[10px] sm:text-xs md:text-sm lg:text-base neon-text">
  {`
  [Your ASCII art here]
  `}
</pre>
```

### Theme Colors
Colors are defined in `/app/globals.css` using OKLCH color space:
- **Background**: `oklch(0.08 0.01 264)` (Near black)
- **Foreground**: `oklch(0.95 0.005 264)` (White)
- **Accent**: `oklch(0.65 0.2 310)` (Magenta)

## 📦 Build & Deploy

### Local Build
```bash
npm run build
npm start
```

### Deploy to Vercel
1. Push your code to GitHub
2. Import the repository in [Vercel Dashboard](https://vercel.com)
3. Vercel will automatically detect Next.js and build
4. Your portfolio will be live at a Vercel URL

**Note**: The project uses `.npmrc` with `legacy-peer-deps=true` to handle React 19.2.0 compatibility with older Radix UI packages.

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles and color variables
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── hero.tsx             # ASCII header section
│   ├── about.tsx            # Bio and introduction
│   ├── experience.tsx       # Work experience
│   ├── projects.tsx         # Project showcase
│   ├── skills.tsx           # Skills display
│   ├── education.tsx        # Education section
│   ├── contact.tsx          # Contact section
│   ├── footer.tsx           # Footer
│   ├── theme-provider.tsx   # Theme management
│   └── ui/                  # Radix UI components
├── hooks/                   # Custom React hooks
├── lib/                     # Utility functions
├── public/
│   └── resumeData.json      # Portfolio content (EDIT THIS!)
├── styles/                  # Component styles
├── package.json
├── tsconfig.json
├── next.config.mjs
├── tailwind.config.ts
├── postcss.config.mjs
└── .npmrc                   # npm configuration for legacy peer deps
```

## 🎯 Key Sections

### Hero Section
ASCII art header with name and occupation title

### About Section
Bio, contact information, and social media links

### Experience Section
Work experience and organizational roles with dates

### Projects Section
Featured projects with descriptions, images, and GitHub links

### Skills Section
Technical skills with proficiency level bars

### Education Section
Academic background and credentials

### Contact Section
Email and social media links for easy connection

## 🌐 Environment Variables

No additional environment variables needed for basic functionality. Vercel Analytics will automatically collect data if connected.

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this repository and customize it for your own portfolio!

## 📞 Contact

- **Email**: bhargavasrisai7@gmail.com
- **GitHub**: [Bhargi777](https://github.com/Bhargi777)
- **LinkedIn**: [Bhargava Sri Sai M K](https://www.linkedin.com/in/bhargava-sri-sai-m-k-79b574341)

---

**Made with ❤️ by Bhargava Sri Sai M K**

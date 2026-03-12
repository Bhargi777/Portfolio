# Bhargava-Portfolio

A modern, ASCII art-themed portfolio website built with Next.js, React, and TypeScript. Features an elegant light theme by default with vibrant magenta accents, dynamic GitHub project integration, and smooth animations.

## Overview

This portfolio serves as a dynamic, fully customizable platform to showcase professional work, experiences, skills, and education. Projects are automatically fetched from GitHub API, ensuring your portfolio always stays up-to-date with your latest repositories.

## Features

- **ASCII Art Hero Section** - Animated ASCII art display with matrix text effects
- **Dynamic GitHub Integration** - Auto-sync projects directly from GitHub repositories
- **Responsive Design** - Fully mobile-friendly with adaptive layouts
- **Light and Dark Themes** - Light mode by default with vibrant magenta highlights
- **Multiple Pages** - Home, About, Projects, and Contact sections
- **Smooth Animations** - Scan lines, matrix effects, and transition animations
- **Interactive Elements** - Hover effects, animated buttons, and transitions
- **Accessible Components** - Built with Radix UI for best accessibility practices
- **Performance Optimized** - Vercel Analytics integration and optimizations
- **Theme Toggle** - Light/Dark mode support

## Tech Stack

- **Framework**: Next.js 16.1.0
- **UI Library**: React 19.2.0
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.1.9
- **Component Library**: Radix UI (40+ accessible components)
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Typography**: JetBrains Mono font
- **Analytics**: Vercel Analytics
- **API Integration**: GitHub REST API

## Prerequisites

- Node.js 18 or higher
- npm or yarn package manager
- Git (for cloning and deployment)
- GitHub account (optional, for fetching your projects)

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Bhargi777/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```
   The `--legacy-peer-deps` flag is required due to React 19.2.0 compatibility with older Radix UI packages.

3. **Configure your portfolio data**
   - Edit `/public/resumeData.json` with your personal information:
     - **main**: Name, bio, occupation, email, location, social links
     - **resume**: Education, work experience, technical skills
     - **portfolio**: Fallback projects (optional, GitHub API takes precedence)

4. **Update avatar (optional)**
   - Place your profile picture as `/public/profile.jpg`
   - The site will show a placeholder if missing

5. **Start the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser

## Configuration

### Resume Data
Edit `/public/resumeData.json` to customize your portfolio:

```json
{
  "main": {
    "name": "Your Name",
    "occupation": "Your Title",
    "bio": "Your bio/about text",
    "email": "your.email@example.com",
    "address": { "city": "City", "state": "State" },
    "website": "https://yourwebsite.com",
    "social": [
      { "name": "github", "url": "https://github.com/yourname" },
      { "name": "linkedin", "url": "https://linkedin.com/in/yourname" }
    ]
  },
  "resume": {
    "education": [...],
    "work": [...],
    "skills": [...]
  }
}
```

### GitHub Projects Integration

Projects are fetched from your GitHub repositories automatically. The site:
- Fetches all public repositories from your GitHub account
- Filters out forks and repos without descriptions
- Sorts by star count and update date
- Caches results in session storage to avoid API rate limits

To use a custom GitHub username, edit the API endpoint in `/components/projects.tsx`:
```tsx
const res = await fetch("https://api.github.com/users/YOUR_USERNAME/repos?per_page=100")
```

### Customize ASCII Art Header

Edit `/components/hero.tsx` to change the ASCII art display or add your own custom art.

### Theme Colors

Colors use OKLCH color space and are defined in `/app/globals.css`:
- **Primary/Background**: `oklch(0.08 0.01 264)` - Near black
- **Foreground**: `oklch(0.95 0.005 264)` - White
- **Accent**: `oklch(0.65 0.2 310)` - Magenta

Modify these values to customize the color scheme.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles and color variables
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── projects/
│   │   └── page.tsx        # Projects page
│   └── contact/
│       └── page.tsx        # Contact page
├── components/
│   ├── hero.tsx            # Hero section with ASCII art
│   ├── about.tsx           # About section
│   ├── experience.tsx      # Work experience
│   ├── projects.tsx        # Projects with GitHub sync
│   ├── skills.tsx          # Skills display
│   ├── education.tsx       # Education section
│   ├── contact.tsx         # Contact section
│   ├── footer.tsx          # Footer
│   ├── navbar.tsx          # Navigation bar
│   ├── matrix-text.tsx     # Matrix text effect component
│   ├── loading-screen.tsx  # Loading screen
│   ├── theme-provider.tsx  # Theme management
│   ├── theme-toggle.tsx    # Light/Dark mode toggle
│   └── ui/                 # Radix UI component library
├── hooks/
│   ├── use-mobile.ts       # Mobile detection hook
│   └── use-toast.ts        # Toast notification hook
├── lib/
│   └── utils.ts            # Utility functions
├── public/
│   ├── resumeData.json     # Portfolio content
│   ├── profile.jpg         # Profile picture (optional)
│   └── Bhargava_Resume.pdf # Resume download
├── styles/                 # CSS modules
├── package.json
├── tsconfig.json
├── next.config.mjs
├── tailwind.config.ts
├── postcss.config.mjs
├── .npmrc                  # npm configuration
└── components.json         # Component metadata
```

## Building & Deployment

### Local Build
```bash
npm run build
npm start
```

### Deploy to Vercel
The easiest way to deploy is to push to GitHub and connect with Vercel:

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com)
3. Click "New Project" and import your GitHub repository
4. Vercel automatically detects it's a Next.js project
5. Click "Deploy" - your portfolio will be live!

Vercel provides:
- Automatic deployments on every push
- Custom domain support
- SSL certificates
- Analytics integration
- Serverless functions support

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Run production server
- `npm run lint` - Run ESLint

## Pages & Routes

- `/` - Home page with hero section
- `/about` - Full about section with biography and contact info
- `/projects` - Projects showcase (GitHub-synced)
- `/contact` - Contact form and information

## Performance Notes

- GitHub repos are cached in session storage to avoid API rate limits
- Lazy-loaded components for optimal performance
- Optimized images with next/image
- CSS optimizations with Tailwind CSS

## Customization Guide

### Adding Social Links
Edit the `social` array in `/public/resumeData.json`:
```json
"social": [
  { "name": "github", "url": "https://github.com/yourname" },
  { "name": "linkedin", "url": "https://linkedin.com/in/yourname" },
  { "name": "twitter", "url": "https://twitter.com/yourhandle" }
]
```

### Adding Skills
Edit the `skills` array in `/public/resumeData.json`:
```json
"skills": [
  { "name": "JavaScript", "level": "95%" },
  { "name": "React", "level": "90%" }
]
```

### Adding Work Experience
Edit the `work` array in `/public/resumeData.json`:
```json
"work": [
  {
    "company": "Company Name",
    "title": "Your Title",
    "years": "2024 - Present"
  }
]
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contributing

Feel free to fork this repository and customize it for your own portfolio! If you have improvements or bug fixes, pull requests are welcome.

## Support & Issues

If you encounter any issues or have questions:
- Check existing GitHub issues
- Create a new issue with detailed description
- Include error messages and steps to reproduce

## Contact

- Email: bhargi07@icloud.com
- GitHub: [Bhargi777](https://github.com/Bhargi777)
- LinkedIn: [Bhargava Sri Sai M K](https://www.linkedin.com/in/bhargava-sri-sai-m-k-79b574341)
- Portfolio: [bhargi.vercel.app](https://bhargi.vercel.app)

---

Built with passion by Bhargava Sri Sai M K

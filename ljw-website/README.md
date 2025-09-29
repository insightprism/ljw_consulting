# LJW Consulting Website

A professional React-based multi-page website for LJW Consulting, a turnaround and transformation consulting firm.

## Features

- **Multi-page Architecture**: Clean navigation with separate pages for Home, Team, Services, Case Studies, About, and Contact
- **Executive Bio Templates**: Reusable component system for team member profiles with expandable bios
- **Responsive Design**: Mobile-first approach with full responsiveness across all devices
- **Modern Tech Stack**: Built with React 18, Vite, Tailwind CSS, and Framer Motion
- **Professional Styling**: Navy and gold color scheme with professional typography
- **Interactive Elements**: Smooth animations and transitions for enhanced user experience

## Tech Stack

- **React 18.3** - UI framework
- **Vite 4.5** - Build tool and dev server
- **React Router v6** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Hook Form** - Form handling
- **React Helmet Async** - SEO management
- **React Icons** - Icon library

## Installation

1. Navigate to the project directory:
```bash
cd /home/markly2/claude_code/ljw_consulting/ljw-website
```

2. Install dependencies:
```bash
npm install
```

## Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173` (or another port if 5173 is in use)

## Building for Production

Build the optimized production bundle:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
ljw-website/
├── src/
│   ├── components/       # Reusable components
│   │   ├── layout/       # Header, Footer, Layout
│   │   ├── cards/        # ExecutiveBio, CaseStudyCard
│   │   └── ui/           # Button, Modal, etc.
│   ├── pages/            # Page components
│   │   ├── Home.jsx
│   │   ├── Team.jsx
│   │   ├── Services.jsx
│   │   ├── CaseStudies.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── data/             # Content data
│   │   ├── executives.js # Team member data
│   │   └── caseStudies.js # Case study content
│   ├── router.jsx        # Route configuration
│   └── App.jsx           # Main app component
├── public/               # Static assets
│   └── images/           # Images and icons
└── package.json          # Dependencies

```

## Adding New Content

### Adding Team Members

Edit `src/data/executives.js` and add a new executive object:

```javascript
{
  id: "john-doe",
  name: "John Doe",
  title: "Partner - Operations",
  image: "/images/team/john-doe.jpg",
  expertise: ["Operations", "Supply Chain"],
  bio: {
    summary: "Short bio summary...",
    detailed: "Full detailed biography..."
  },
  achievements: [
    { metric: "$10M", description: "Cost savings achieved" }
  ],
  education: ["MBA - Harvard", "BS Engineering - MIT"],
  linkedIn: "https://linkedin.com/in/johndoe"
}
```

### Adding Case Studies

Edit `src/data/caseStudies.js` and add a new case study:

```javascript
{
  id: "new-case",
  client: "Client Name",
  industry: "Industry",
  revenue: "$XXM",
  challenge: "Brief challenge description",
  situation: "Detailed situation...",
  solution: ["Solution point 1", "Solution point 2"],
  results: {
    roi: "4X",
    timeline: "6 months",
    ebitdaImprovement: "$15M"
  },
  testimonial: "Client testimonial...",
  testimonialAuthor: "CEO",
  tags: ["Tag1", "Tag2"]
}
```

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/router.jsx`
3. Add navigation link in `src/components/layout/Header.jsx`

## Customization

### Colors

Edit the color palette in `tailwind.config.js`:

```javascript
colors: {
  navy: {
    900: '#0A1628',
    700: '#0A2540',
    500: '#1E3A5F',
  },
  gold: '#D4AF37',
  // Add more custom colors
}
```

### Typography

Fonts are loaded via Google Fonts in `src/index.css`. To change:
- Heading font: Playfair Display
- Body font: Inter

## Deployment

The built files in `dist/` can be deployed to any static hosting service:

- **Netlify**: Drop the `dist` folder or connect GitHub repo
- **Vercel**: Import project and deploy
- **AWS S3**: Upload `dist` contents to S3 bucket with static hosting
- **GitHub Pages**: Use GitHub Actions to deploy

## Environment Variables

Create a `.env` file for environment-specific variables:

```env
VITE_API_URL=https://api.ljwconsulting.com
VITE_CONTACT_EMAIL=info@ljwconsulting.com
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

## Contact Form Integration

The contact form currently logs to console. To integrate with a backend:

1. Set up an API endpoint or service (e.g., Formspree, EmailJS)
2. Update the `onSubmit` function in `src/pages/Contact.jsx`
3. Add proper error handling and success messages

## Performance Optimization

- Images: Add WebP versions with fallbacks
- Lazy Loading: Already implemented for route components
- Code Splitting: Automatic with Vite and React Router
- Caching: Configure in hosting service

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

© 2024 LJW Consulting. All rights reserved.
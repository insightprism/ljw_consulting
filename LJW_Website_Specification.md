# LJW Consulting Website Development Specification

## Executive Summary

This document specifies the requirements for developing a professional React-based multi-page website for LJW Consulting, a turnaround and transformation consulting firm specializing in hands-on executive leadership for distressed mid-market companies.

## 1. Business Context & Purpose

### 1.1 About LJW Consulting

LJW Consulting is a unique consulting firm founded by three veteran executives with 90+ combined years of experience. Unlike traditional consulting firms that provide theoretical advice, LJW Consulting acts as an extension of the client's executive team, taking direct operational control to stabilize and transform businesses.

**Key Differentiators:**
- Full-suite executive team (CFO/CTO, CHRO/Legal, CEO/Sales) in one engagement
- Hands-on execution with signatory authority, not just advisory
- Performance-based compensation aligned with client success
- Proven track record: typical 3-5X ROI within 12 months

### 1.2 Website Objectives

**Primary Goals:**
1. **Credibility Building**: Establish LJW as the premier turnaround firm for mid-market companies
2. **Lead Generation**: Convert distressed company executives and PE firms into qualified leads
3. **Differentiation**: Clearly communicate the "we execute, not just advise" value proposition
4. **Trust Building**: Showcase real results with concrete numbers and case studies
5. **Conversion**: Drive visitors to book a "30-Minute Reality Check" consultation

**Target Audience:**
- CEOs/Boards of distressed mid-market companies ($50M-$500M revenue)
- Private equity partners with portfolio companies in crisis
- Investment bankers seeking operational partners
- Corporate development executives evaluating turnaround options

### 1.3 Success Metrics

- **Conversion Rate**: 5-10% of visitors request consultation
- **Engagement**: Average 3+ minutes on site
- **Credibility**: 70% of visitors view case studies
- **Mobile Usage**: 40% of traffic from mobile devices
- **SEO Performance**: Rank for "turnaround consulting" keywords

## 2. Technical Requirements

### 2.1 Technology Stack

```
Frontend Framework:    React 18.2+
Routing:              React Router v6
Styling:              Tailwind CSS 3.3+ or Styled Components
State Management:     React Context API (simple state needs)
Build Tool:           Vite (faster than CRA)
Animations:           Framer Motion
Forms:                React Hook Form
SEO:                  React Helmet Async
Icons:                React Icons or Heroicons
HTTP Client:          Axios (for future API needs)
```

### 2.2 Browser & Device Support

- **Desktop**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile
- **Responsive Breakpoints**:
  - Mobile: 320px - 767px
  - Tablet: 768px - 1023px
  - Desktop: 1024px+
  - Large Desktop: 1440px+

### 2.3 Performance Requirements

- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Lighthouse Score**: > 90
- **Bundle Size**: < 200KB initial JS
- **Image Optimization**: WebP format with fallbacks

## 3. Information Architecture

### 3.1 Site Map

```
/                           (Home - Landing page)
/about                      (About Us - Company philosophy)
/team                       (Team - Executive bios)
/services                   (Services - 270-day transformation)
/case-studies              (Case Studies - Success stories)
/approach                   (Our Approach - Methodology)
/contact                    (Contact - 30-minute reality check)
/resources                  (Resources - Future blog/insights)
```

### 3.2 Navigation Structure

**Primary Navigation:**
- Home
- About
- Our Team
- Services
- Case Studies
- Contact

**Call-to-Action Button:**
- "Get Your Reality Check" (persistent, right side of nav)

**Footer Navigation:**
- All primary pages
- Privacy Policy
- Terms of Service
- LinkedIn profiles

## 4. Page Specifications

### 4.1 Home Page (/)

**Hero Section:**
```javascript
{
  headline: "We Don't Just Advise. We Fix, Execute, and Deliver.",
  subheadline: "When 70% of turnarounds fail, you need executives who make decisions, not PowerPoints.",
  primaryCTA: "Get Your 30-Minute Reality Check",
  secondaryCTA: "View Case Studies",
  backgroundImage: "subtle-gradient-or-pattern"
}
```

**Section 2 - The Problem:**
- Statistics-driven section about turnaround failures
- Pain points of distressed companies
- Why traditional consulting fails

**Section 3 - Our Solution:**
- Three-pillar approach (Finance, HR, Operations)
- Authority to execute
- Integrated team approach

**Section 4 - The 270-Day Transformation:**
- Interactive timeline component
- Four phases with hover details
- Visual progress indicators

**Section 5 - Proof of Results:**
- 3 featured case study cards
- Key metrics highlighted
- Link to full case studies

**Section 6 - Why LJW:**
- 6 key differentiators in grid layout
- Icons for each differentiator
- Brief explanations

**Section 7 - CTA:**
- Full-width CTA section
- Contact form or scheduling widget

### 4.2 Team Page (/team)

**Page Structure:**
```javascript
const executiveData = [
  {
    id: "wu-chau",
    name: "Wu Chau",
    title: "Managing Partner - CFO & CTO",
    image: "/images/team/wu-chau.jpg",
    expertise: [
      "Financial Restructuring",
      "Technology Transformation",
      "Operational Excellence"
    ],
    bio: {
      summary: "30+ years leading financial turnarounds and digital transformations across manufacturing, distribution, and technology sectors.",
      detailed: "Wu has served as CFO/CTO for multiple $100M+ companies...",
    },
    achievements: [
      {
        metric: "$45M",
        description: "Cash flow improvement at $300M manufacturer"
      },
      {
        metric: "18 months",
        description: "Average time to positive EBITDA"
      }
    ],
    education: [
      "MBA, Wharton School",
      "BS Computer Science, MIT"
    ],
    linkedIn: "https://linkedin.com/in/wuchau"
  },
  // Similar structure for Latoya and Jack
]
```

**Executive Bio Component Template:**
```javascript
const ExecutiveBio = ({ executive }) => {
  return (
    <div className="executive-card">
      <img src={executive.image} alt={executive.name} />
      <h2>{executive.name}</h2>
      <h3>{executive.title}</h3>
      <div className="expertise-tags">
        {executive.expertise.map(tag => <span>{tag}</span>)}
      </div>
      <p className="bio-summary">{executive.bio.summary}</p>
      <div className="achievements">
        {executive.achievements.map(achievement => (
          <div>
            <span className="metric">{achievement.metric}</span>
            <span className="description">{achievement.description}</span>
          </div>
        ))}
      </div>
      <button onClick={() => expandBio()}>Read Full Bio</button>
    </div>
  )
}
```

### 4.3 Services Page (/services)

**Content Structure:**
- Overview of integrated approach
- Detailed 270-day methodology
- Each phase expandable with specifics
- Engagement models (Performance vs Traditional)
- Industries served
- Minimum engagement criteria

### 4.4 Case Studies Page (/case-studies)

**Data Structure:**
```javascript
const caseStudies = [
  {
    id: "manufacturing-turnaround",
    client: "Manufacturing Firm",
    industry: "Manufacturing",
    revenue: "$200M",
    challenge: "Bleeding $2M/month, bank default threat",
    solution: [
      "Took control of cash management Day 1",
      "Exited unprofitable product lines",
      "Renegotiated union contract"
    ],
    results: {
      ebitdaImprovement: "$20M",
      timeToPositiveCash: "90 days",
      roi: "5.2X",
      timeline: "9 months"
    },
    testimonial: "LJW saved our company. Period.",
    tags: ["Manufacturing", "Financial Crisis", "Union Relations"]
  }
]
```

**Features:**
- Filter by industry/challenge type
- Sortable by ROI or company size
- Detailed view with full story
- Downloadable PDF case studies

### 4.5 Contact Page (/contact)

**Components:**
- Hero with value proposition
- Contact form with fields:
  - Name, Title, Company
  - Email, Phone
  - Company Revenue (dropdown)
  - Primary Challenge (dropdown)
  - Urgency (dropdown)
  - Message (optional)
- Direct contact information
- Office location (if applicable)
- Calendar scheduling widget (Calendly integration)

## 5. Component Library

### 5.1 Core Components

```
/components
  /layout
    - Header.jsx          (Navigation bar)
    - Footer.jsx          (Footer with links)
    - Layout.jsx          (Page wrapper)

  /sections
    - Hero.jsx            (Reusable hero section)
    - CTASection.jsx      (Call-to-action blocks)
    - Timeline.jsx        (270-day methodology)
    - Statistics.jsx     (Key metrics display)

  /cards
    - ExecutiveBio.jsx    (Team member card)
    - CaseStudyCard.jsx   (Case study preview)
    - ServiceCard.jsx     (Service offering card)
    - TestimonialCard.jsx (Client testimonial)

  /forms
    - ContactForm.jsx     (Main contact form)
    - NewsletterSignup.jsx (Email capture)
    - ConsultationForm.jsx (Reality check booking)

  /ui
    - Button.jsx          (Styled buttons)
    - Card.jsx           (Base card component)
    - Modal.jsx          (Modal dialogs)
    - Accordion.jsx      (Expandable sections)
    - Badge.jsx          (Tags and labels)
```

### 5.2 Component Properties

**Button Component Example:**
```javascript
<Button
  variant="primary|secondary|outline"
  size="small|medium|large"
  onClick={handleClick}
  loading={isLoading}
  disabled={isDisabled}
  fullWidth={true|false}
  icon={<IconComponent />}
>
  Button Text
</Button>
```

## 6. Content Management

### 6.1 Data Structure

Create JSON/JS files for easy content updates:

```
/src/data
  - executives.js      (Team member data)
  - caseStudies.js     (Case study content)
  - services.js        (Service offerings)
  - methodology.js     (270-day process)
  - testimonials.js    (Client quotes)
  - faqs.js           (Common questions)
```

### 6.2 Content Guidelines

**Tone of Voice:**
- Confident and authoritative
- Direct and results-focused
- Professional but not corporate
- Action-oriented language
- Use specific numbers and metrics

**Key Messages:**
- "We don't just advise, we execute"
- "90+ years of battle-tested experience"
- "Minimum 2X ROI guarantee"
- "We take the wheel"
- "Fix, execute, deliver"

## 7. Design System

### 7.1 Color Palette

```css
:root {
  /* Primary Colors */
  --navy-900: #0A1628;      /* Darkest navy */
  --navy-700: #0A2540;      /* Primary navy */
  --navy-500: #1E3A5F;      /* Medium navy */

  /* Secondary Colors */
  --gray-900: #1A202C;      /* Text primary */
  --gray-700: #4A5568;      /* Text secondary */
  --gray-500: #718096;      /* Text muted */
  --gray-300: #E2E8F0;      /* Borders */
  --gray-100: #F7FAFC;      /* Backgrounds */

  /* Accent Colors */
  --gold: #D4AF37;          /* Premium accent */
  --success: #10B981;       /* Success states */
  --danger: #EF4444;        /* Error states */

  /* Neutral */
  --white: #FFFFFF;
  --black: #000000;
}
```

### 7.2 Typography

```css
/* Font Families */
--font-heading: 'Playfair Display', Georgia, serif;
--font-body: 'Inter', -apple-system, sans-serif;
--font-mono: 'Fira Code', monospace;

/* Font Sizes */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
```

### 7.3 Spacing System

```css
/* Spacing Scale */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

## 8. Implementation Guidelines

### 8.1 Project Setup

```bash
# Create React app with Vite
npm create vite@latest ljw-website -- --template react
cd ljw-website
npm install

# Install core dependencies
npm install react-router-dom@6
npm install tailwindcss postcss autoprefixer
npm install framer-motion
npm install react-helmet-async
npm install react-hook-form
npm install axios
npm install react-icons

# Initialize Tailwind
npx tailwindcss init -p
```

### 8.2 Folder Structure

```
ljw-website/
├── public/
│   ├── images/
│   │   ├── team/           (Executive photos)
│   │   ├── case-studies/   (Case study images)
│   │   └── icons/          (Company logo, favicons)
│   └── documents/          (Downloadable PDFs)
├── src/
│   ├── components/
│   ├── pages/
│   ├── data/
│   ├── styles/
│   ├── hooks/              (Custom React hooks)
│   ├── utils/              (Helper functions)
│   ├── App.jsx
│   ├── main.jsx
│   └── router.jsx
├── .env                    (Environment variables)
├── tailwind.config.js
├── vite.config.js
└── package.json
```

### 8.3 Routing Configuration

```javascript
// src/router.jsx
import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Team from './pages/Team';
import Services from './pages/Services';
import CaseStudies from './pages/CaseStudies';
import About from './pages/About';
import Contact from './pages/Contact';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'team', element: <Team /> },
      { path: 'services', element: <Services /> },
      { path: 'case-studies', element: <CaseStudies /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
    ]
  }
]);
```

### 8.4 SEO Configuration

```javascript
// src/components/SEO.jsx
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = "LJW Consulting - We Fix, Execute, and Deliver",
  description = "Turnaround consulting firm with 90+ years experience. We don't just advise - we take control and deliver results.",
  keywords = "turnaround consulting, business transformation, distressed companies, executive leadership",
  image = "/images/og-image.jpg"
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};
```

## 9. Development Phases

### Phase 1: Foundation (Week 1)
- Set up React project with routing
- Create component library structure
- Implement navigation and layout
- Set up Tailwind CSS configuration

### Phase 2: Core Pages (Week 2)
- Build Home page with all sections
- Implement Team page with bio templates
- Create Services page with methodology
- Add Contact page with form

### Phase 3: Enhanced Features (Week 3)
- Add Case Studies with filtering
- Implement animations with Framer Motion
- Add About and Approach pages
- Integrate contact form functionality

### Phase 4: Polish & Launch (Week 4)
- Mobile responsiveness testing
- Performance optimization
- SEO implementation
- Cross-browser testing
- Deploy to production

## 10. Testing Requirements

### 10.1 Functional Testing
- All navigation links work correctly
- Forms submit properly with validation
- Responsive design works on all devices
- Animations perform smoothly
- External links open in new tabs

### 10.2 Performance Testing
- Page load times < 3 seconds
- Images optimized and lazy loaded
- JavaScript bundle minimized
- CSS properly minified
- Caching headers configured

### 10.3 Accessibility Testing
- WCAG 2.1 AA compliance
- Keyboard navigation works
- Screen reader compatible
- Proper heading hierarchy
- Alt text for all images

## 11. Deployment Configuration

### 11.1 Build Configuration

```javascript
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          animations: ['framer-motion'],
        }
      }
    }
  }
});
```

### 11.2 Environment Variables

```env
# .env.production
VITE_API_URL=https://api.ljwconsulting.com
VITE_CONTACT_EMAIL=info@ljwconsulting.com
VITE_CALENDLY_URL=https://calendly.com/ljw-consulting
VITE_GA_TRACKING_ID=UA-XXXXXXXXX
```

## 12. Future Enhancements

### Phase 2 Features (Post-Launch)
- Blog/insights section with CMS
- Client portal for existing clients
- Resource library with downloadable content
- Newsletter integration with email marketing
- Advanced analytics dashboard
- Multi-language support
- Live chat integration

### Technical Enhancements
- Server-side rendering with Next.js
- Progressive Web App features
- Advanced search functionality
- A/B testing framework
- Marketing automation integration
- CRM integration (HubSpot/Salesforce)

## 13. Success Criteria

The website will be considered successful when it:

1. **Effectively communicates** LJW's unique value proposition
2. **Generates** 10+ qualified leads per month
3. **Achieves** 90+ Lighthouse performance score
4. **Maintains** <2% bounce rate on homepage
5. **Converts** 5%+ of visitors to contact form submission
6. **Ranks** on first page for target keywords within 6 months
7. **Receives** positive feedback from partners and clients

## Appendix A: Content Examples

### A.1 Hero Headline Variations
1. "We Don't Just Advise. We Fix, Execute, and Deliver."
2. "When PowerPoints Won't Save Your Business, We Will."
3. "Turnarounds Fail Without Execution. We Execute."
4. "From Crisis to Cash Flow in 270 Days."
5. "The Executives You Need When Failure Isn't an Option."

### A.2 Call-to-Action Variations
1. "Get Your 30-Minute Reality Check"
2. "Schedule Your Crisis Assessment"
3. "Book Your Turnaround Consultation"
4. "Start Your Transformation Today"
5. "Discover Your Path to Profitability"

## Appendix B: Technical Resources

### B.1 Recommended Libraries
- **Charts**: Recharts or Victory
- **Date Handling**: date-fns
- **Form Validation**: Yup or Zod
- **Animation**: Framer Motion or React Spring
- **Icons**: React Icons or Heroicons
- **Image Optimization**: react-image-optimization

### B.2 Performance Tools
- Lighthouse CI
- WebPageTest
- Bundle Analyzer
- React DevTools Profiler

### B.3 Monitoring & Analytics
- Google Analytics 4
- Hotjar (heatmaps)
- Sentry (error tracking)
- LogRocket (session replay)

---

This specification provides comprehensive guidance for building a professional, scalable, and high-performing website for LJW Consulting. The implementation should prioritize user experience, conversion optimization, and the clear communication of LJW's unique value proposition as hands-on executives who deliver real results.
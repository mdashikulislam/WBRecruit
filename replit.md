# Warner Bros Recruiting Landing Page

## Overview

This is a single-page recruiting landing page for Warner Bros Discovery, built with React and TypeScript. The application features a visually striking full-screen design with rotating background images, Warner Bros branding, and integration with Calendly for scheduling recruiting interviews. The page includes interactive dialogs for viewing job positions and company information, with social media links for broader engagement.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast hot module replacement
- Wouter for lightweight client-side routing (though this is essentially a single-page application)

**UI Component Library**
- Shadcn/ui component system with Radix UI primitives for accessible, customizable components
- Tailwind CSS for utility-first styling with custom design tokens
- Inter font family from Google Fonts for modern typography
- CSS variables for theming with support for light/dark modes

**State Management & Data Fetching**
- React Query (@tanstack/react-query) for server state management and caching
- React Hook Form with Zod resolvers for form validation (infrastructure ready, not currently used)
- Custom hooks for mobile detection and toast notifications

**Design System**
- Custom color palette centered on Warner Bros blue theme (HSL: 220 90% 25% primary, 215 85% 35% accents)
- Consistent spacing using Tailwind's scale (4, 6, 8, 12, 16)
- Full viewport height layouts with centered content
- Rotating background images with colored overlays for visual interest
- Component variants using class-variance-authority for consistent styling

### Backend Architecture

**Server Framework**
- Express.js with TypeScript for the API server
- ESM module system for modern JavaScript features
- Custom middleware for request logging and error handling

**Development Environment**
- Replit-specific plugins for development experience (cartographer, dev banner, runtime error overlay)
- Separate development and production build processes
- Hot module replacement in development via Vite middleware

**Storage Layer**
- In-memory storage implementation (MemStorage class) for user data
- Interface-based design (IStorage) allowing easy swapping to database implementations
- Drizzle ORM configured for PostgreSQL (infrastructure ready but not actively used)
- Schema definitions using Drizzle with Zod validation

### External Dependencies

**Third-Party Integrations**
- **Calendly**: Embedded scheduling widget for recruiting interviews (integrated via external link)
- **Social Media Platforms**: Links to Facebook, Instagram, Twitter, LinkedIn, and YouTube

**Database Configuration**
- Drizzle ORM configured with PostgreSQL dialect
- Neon Database serverless driver (@neondatabase/serverless) ready for use
- Migration system set up via drizzle-kit
- User schema defined with id, username, and password fields

**UI Component Dependencies**
- Radix UI primitives for 25+ accessible component patterns (dialogs, dropdowns, tooltips, etc.)
- Embla Carousel for potential future carousel implementations
- Lucide React for consistent iconography
- date-fns for date manipulation utilities
- cmdk for command palette patterns

**Build & Development Tools**
- PostCSS with Tailwind CSS and Autoprefixer
- esbuild for production server bundling
- tsx for TypeScript execution in development
- Path aliasing system (@/, @shared/, @assets/) for clean imports

**Session Management**
- connect-pg-simple for PostgreSQL-backed sessions (configured but not actively used in current implementation)
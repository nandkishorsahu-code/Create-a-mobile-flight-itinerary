# Flightscry - Flight Information App

## Overview

Flightscry is a modern flight tracking application built with React and Express.js that displays comprehensive flight information in a mobile-first interface. The application follows a full-stack TypeScript architecture with a clean separation between client and server components, featuring a flight information dashboard with detailed departure/arrival cards and real-time flight status tracking.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for fast development and building
- **UI Components**: Shadcn/ui component library built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with CSS variables for theming and responsive design
- **State Management**: TanStack React Query for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite with custom configuration for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ESM modules
- **API Design**: RESTful API structure with route-based organization
- **Data Storage**: In-memory storage with interface-based design for easy database integration
- **Development**: TSX for TypeScript execution in development mode

### Component Structure
- **Card-Based UI**: Modular flight information cards (FlightInfoCard, DepartureCard, ArrivalCard, FlightDetails)
- **Mobile-First Design**: Bottom navigation and responsive layouts optimized for mobile devices
- **Icon Integration**: Font Awesome icons for consistent visual elements
- **Theme System**: CSS custom properties with light/dark mode support

### Data Architecture
- **Schema Definition**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Type Safety**: Shared TypeScript types between client and server using Zod validation
- **Data Models**: Flight and User entities with comprehensive flight information fields
- **Validation**: Input validation using Drizzle-Zod integration

### Development Workflow
- **Monorepo Structure**: Organized into client/, server/, and shared/ directories
- **Hot Reload**: Vite development server with HMR for rapid development
- **Path Aliases**: TypeScript path mapping for clean imports (@/, @shared/, @assets/)
- **Error Handling**: Runtime error overlay and comprehensive error boundaries

## External Dependencies

### Database & ORM
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL support
- **@neondatabase/serverless**: Serverless PostgreSQL connection for cloud deployment
- **Database**: PostgreSQL configured for production with connection string from environment

### UI & Styling
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Shadcn/ui**: Pre-built component library extending Radix UI with Tailwind styling
- **Font Awesome**: Icon library for flight-related iconography
- **Google Fonts**: Inter font family for typography

### Development Tools
- **Vite**: Build tool and development server with React plugin
- **TypeScript**: Static type checking across the entire application
- **ESBuild**: Fast bundling for production server builds
- **PostCSS**: CSS processing with Tailwind and Autoprefixer

### Runtime & Server
- **Express.js**: Web application framework for API routes and middleware
- **TanStack React Query**: Data fetching and caching library for efficient API calls
- **Wouter**: Minimalist routing library for client-side navigation
- **React Hook Form**: Form handling with @hookform/resolvers for validation

### Replit Integration
- **@replit/vite-plugin-runtime-error-modal**: Enhanced error reporting in development
- **@replit/vite-plugin-cartographer**: Development tooling integration
- **@replit/vite-plugin-dev-banner**: Development environment indicators
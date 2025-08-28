# UniHealth - Unified Medical Records Platform

## Overview

UniHealth is a comprehensive healthcare platform that bridges the gap between patients and doctors through a unified medical record system. The application consists of a marketing landing page that showcases the platform's features and allows visitors to join a waitlist. The system is built as a full-stack web application with a React frontend and Express.js backend, designed to handle medical data with security and compliance in mind.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Shadcn/ui component library built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom medical theme variables and responsive design
- **State Management**: TanStack React Query for server state management and API data fetching
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture  
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for end-to-end type safety
- **API Design**: RESTful API endpoints for waitlist management
- **Data Storage**: In-memory storage (MemStorage) for development, with interfaces designed for easy database integration
- **Validation**: Zod schemas for request/response validation shared between frontend and backend
- **Development**: Hot module replacement with Vite integration for seamless development experience

### Database Design
- **ORM**: Drizzle ORM configured for PostgreSQL with type-safe database operations
- **Schema Management**: Centralized schema definitions in shared directory
- **Migrations**: Drizzle Kit for database schema migrations
- **Tables**: Users table for authentication and waitlist_entries table for marketing signups

### Security & Compliance
- **Database**: PostgreSQL configured with connection pooling via Neon Database serverless
- **Validation**: Input sanitization and validation using Zod schemas
- **CORS**: Configured for secure cross-origin requests
- **Environment**: Secure environment variable management for database credentials

### Development Tools
- **Hot Reloading**: Vite dev server with HMR for rapid development
- **Type Checking**: Strict TypeScript configuration across all layers
- **Code Quality**: Standardized imports and consistent file structure
- **Error Handling**: Centralized error handling with proper HTTP status codes

## External Dependencies

### UI and Styling
- **Radix UI**: Comprehensive set of accessible UI primitives (@radix-ui/react-*)
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Lucide React**: Consistent icon library for UI elements
- **Class Variance Authority**: Type-safe CSS class management

### Data Management
- **TanStack React Query**: Server state management and API data fetching
- **Drizzle ORM**: Type-safe PostgreSQL ORM with schema management
- **Drizzle Kit**: Database migration and schema management tools
- **Zod**: Runtime type validation and schema definition

### Database Services
- **Neon Database**: Serverless PostgreSQL database provider (@neondatabase/serverless)
- **PostgreSQL**: Primary database for production data storage

### Development Infrastructure
- **Vite**: Build tool and development server
- **TypeScript**: Static type checking across the entire stack
- **React Hook Form**: Form state management with validation
- **Wouter**: Lightweight routing for single-page application navigation

### Form and Input Handling
- **React Hook Form**: Performant form management with minimal re-renders
- **Hookform Resolvers**: Integration between React Hook Form and validation libraries
- **Date-fns**: Date manipulation and formatting utilities

The architecture prioritizes type safety, security, and scalability while maintaining a clean separation of concerns between the presentation layer, business logic, and data persistence. The shared schema approach ensures consistency between frontend and backend validation, while the modular component structure allows for easy maintenance and feature expansion.
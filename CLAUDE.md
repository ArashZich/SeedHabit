# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**SeedHabit** is an open-source habit tracking app built with React Native/Expo that provides professional habit tracking features completely free. The app uses the metaphor of growing habits from seeds to trees, supporting both Persian and English with full RTL support.

## Development Commands

### Core Development
```bash
# Start development server
npm start

# Platform-specific runs
npm run android        # Run on Android device/emulator
npm run ios           # Run on iOS simulator (macOS only) 
npm run web           # Run in web browser

# Code quality
npm run lint          # Run ESLint analysis
```

### Project Reset
```bash
# Reset project to fresh state (removes current app/ folder)
npm run reset-project
```

## Architecture Overview

### Tech Stack
- **React Native 0.81** with **Expo 54.0**
- **TypeScript 5.9** for type safety
- **Expo Router** for file-based navigation 
- **Zustand** for lightweight state management
- **SQLite** for local data storage
- **Styled Components** for CSS-in-JS styling
- **Victory Native** for charts and data visualization
- **React i18next** for internationalization (Persian/English)

### Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base design system components
│   ├── charts/         # Chart components  
│   ├── calendar/       # Calendar components
│   └── animations/     # Animation components
├── screens/            # App screens organized by feature
│   ├── onboarding/     # Welcome and setup screens
│   ├── habits/         # Habit management screens
│   ├── analytics/      # Progress and analytics screens
│   ├── settings/       # App settings screens
│   └── profile/        # User profile screens
├── services/           # Business logic and data services
│   ├── database/       # SQLite operations and schemas
│   ├── backup/         # Google Drive sync functionality
│   ├── notifications/  # Push notification management
│   └── analytics/      # Data analysis and insights
├── hooks/              # Custom React hooks
├── utils/              # Helper functions and utilities
├── constants/          # App constants and configuration
├── types/              # TypeScript type definitions (modularized)
├── i18n/              # Internationalization setup and translations
└── theme/             # Design system and styling
```

### Type System Organization
Types are organized into separate modules in `src/types/`:
- `habit.ts` - Habit and entry types
- `user.ts` - User and preferences types  
- `achievement.ts` - Achievement system types
- `navigation.ts` - Navigation and routing types
- `theme.ts` - Theme and styling types
- `database.ts` - Database schema types
- `backup.ts` - Backup and sync types
- `notification.ts` - Notification types
- `charts.ts` - Chart and visualization types
- `app.ts` - Global app state types
- `index.ts` - Central export point

### Key Design Patterns

#### State Management with Zustand
```typescript
// Example store structure
interface HabitStore {
  habits: Habit[];
  entries: HabitEntry[];
  loading: boolean;
  addHabit: (habit: Habit) => void;
  updateHabit: (id: string, updates: Partial<Habit>) => void;
  deleteHabit: (id: string) => void;
}
```

#### Styled Components with Theme
```typescript
// Components use theme-aware styled components
const Container = styled.View`
  padding: ${props => props.theme.spacing.md}px;
  background-color: ${props => props.theme.colors.background};
`;
```

#### SQLite Database Layer
- Habit storage with streak tracking
- Daily entry logging
- User preferences persistence
- Achievement progress tracking

#### Internationalization (i18n)
- Supports Persian (RTL) and English (LTR)
- Automatic language detection
- Cultural adaptations for Persian users
- Date formatting for both Gregorian and Persian calendars

### Key Features Implementation

#### Habit Growth Visualization
Habits progress through visual stages:
- **Seed** (0-7 days) - Initial commitment
- **Sprout** (8-21 days) - Habit formation  
- **Sapling** (22-66 days) - Strengthening
- **Tree** (67+ days) - Established habit

#### Calendar Heatmap
GitHub-style contribution graph showing daily habit completion patterns.

#### Analytics & Insights
- Completion rates and trends
- Streak tracking with recovery support
- Weekly/monthly progress summaries
- Personalized insights and recommendations

#### Notifications System
- Smart reminder scheduling
- Motivational messages
- Streak celebration alerts
- Weekly review prompts

### Development Guidelines

#### Code Organization
- Use barrel exports (`index.ts`) in component folders
- Keep components small and focused on single responsibility
- Separate business logic into custom hooks
- Use TypeScript strictly - avoid `any` types

#### Styling Approach
- Use styled-components for all styling
- Reference theme values consistently
- Support both LTR and RTL layouts
- Implement responsive design for various screen sizes

#### Database Operations
- Use transactions for data consistency
- Implement proper error handling
- Cache frequently accessed data
- Provide offline-first functionality

#### Testing Strategy
- Unit tests for utility functions
- Component testing with React Native Testing Library
- Integration tests for critical user flows
- E2E tests for core features

### Privacy & Security
- **Local-first architecture** - all data stored locally by default
- **Optional Google Drive backup** - only with explicit user consent
- **No tracking or analytics** - completely privacy-focused
- **Open source transparency** - GPL-3.0 license

### Performance Considerations
- Use FlashList for large habit lists
- Implement lazy loading for screens
- Optimize image assets and animations
- Minimize re-renders with proper memoization

### Common Development Tasks

#### Adding a New Screen
1. Create screen component in appropriate `src/screens/` subdirectory
2. Add route to navigation types in `src/types/navigation.ts`
3. Update Expo Router configuration if needed
4. Add translations for any new text content

#### Creating New Components
1. Place in appropriate `src/components/` subdirectory
2. Use styled-components with theme integration
3. Include TypeScript prop interfaces
4. Support RTL layout if applicable
5. Add to barrel export in folder's `index.ts`

#### Adding Database Tables
1. Update schema in `src/services/database/`
2. Add corresponding TypeScript types in `src/types/database.ts`
3. Create service layer functions for CRUD operations
4. Add migration logic for existing users

#### Implementing New Features
1. Design data model and update types
2. Create database layer if needed
3. Build UI components with theme integration
4. Add business logic and state management
5. Include i18n translations for both languages
6. Add appropriate navigation and routing
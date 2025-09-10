# 🌱 SeedHabit - Track Your Habits, Grow Your Life

<div align="center">
  <img src="./assets/images/icon.png" alt="SeedHabit Logo" width="120" height="120" />
  
  ![React Native](https://img.shields.io/badge/React%20Native-0.81-blue)
  ![Expo](https://img.shields.io/badge/Expo-54.0-black)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)
  ![License](https://img.shields.io/badge/License-GPL--3.0-green)
  ![Platform](https://img.shields.io/badge/Platform-Android%20|%20iOS%20|%20Web-lightgrey)
</div>

## 📱 About

**SeedHabit** is an open-source, professional habit tracking app built with React Native/Expo that provides all the features of paid apps completely free for everyone. Every good habit is like a seed that grows into a mighty tree with care and consistency - SeedHabit accompanies you on this growth journey.

### 🎯 Philosophy
Just like a seed needs consistent care to grow into a tree, habits need daily attention to become part of who you are. SeedHabit visualizes this beautiful journey with meaningful progress tracking and gentle encouragement.

## ✨ Key Features

### 🌱 Habit Management
- **Yes/No Habits**: Simple habits (exercise, reading, meditation)
- **Timed Habits**: Habits with duration tracking (20 min meditation, 2 hours study)
- **Flexible Scheduling**: Daily, weekly, monthly, custom patterns
- **Smart Reminders**: Contextual notifications with gentle encouragement

### 📊 Progress Visualization
- **Growth Metaphor**: Watch your habits grow from seed to mighty tree
- **GitHub-style Heatmap**: Visual activity tracking like GitHub contributions
- **Progress Charts**: Weekly, monthly, yearly analytics
- **Streak Tracking**: Current and best streaks with recovery support

### 🎮 Motivational System
- **Visual Growth**: Watch habits transform from seed to powerful tree
- **Achievement Badges**: Milestone rewards and success recognition
- **Gentle Failure Handling**: No harsh penalties for missed days
- **Return Encouragement**: Special motivation after breaks

### ⚡ Productivity Tools
- **Built-in Pomodoro Timer**: Focus sessions integrated with habit tracking
- **Daily Dashboard**: Today's habits and progress overview
- **Weekly/Monthly Reviews**: Reflection and adjustment tools

### 📈 Analytics & Insights
- **Smart Analysis**: Success rates, patterns, peak performance times
- **Export Options**: PDF reports, CSV data export
- **Trend Analysis**: Identify what works and what doesn't

### 🔒 Privacy & Backup
- **Local-First**: All data stored locally by default
- **Optional Google Drive**: Seamless backup and recovery
- **Multi-Device Sync**: Access your data everywhere
- **Data Portability**: Export/import functionality

### 🌍 Multilingual Support
- **Bilingual**: Persian (Farsi) and English support
- **RTL Support**: Proper right-to-left text rendering
- **Cultural Adaptations**: Appropriate icons and imagery

## 🛠️ Tech Stack

### Core Technologies
- **React Native 0.81** - Cross-platform mobile development
- **Expo 54.0** - Development platform and tools
- **TypeScript 5.9** - Type-safe development
- **SQLite** - Local database storage
- **Zustand** - Lightweight state management

### UI & Styling
- **Styled Components** - CSS-in-JS styling
- **React Native Reanimated** - Smooth animations
- **Victory Native** - Data visualization charts
- **React Native SVG** - Custom icons and graphics

### Features & Utilities
- **React i18next** - Internationalization
- **Date-fns** - Date manipulation
- **Moment Jalaali** - Persian calendar support
- **Flash List** - High-performance lists
- **Expo Notifications** - Push notifications
- **Expo File System** - File operations

## 🚀 Getting Started

### Prerequisites
- Node.js (LTS version)
- npm or yarn
- Expo CLI: `npm install -g @expo/cli`
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ArashZich/SeedHabit.git
   cd SeedHabit
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Run on device/simulator**
   ```bash
   # Android
   npm run android
   
   # iOS (macOS only)
   npm run ios
   
   # Web
   npm run web
   ```

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start Expo development server |
| `npm run android` | Run on Android device/emulator |
| `npm run ios` | Run on iOS simulator (macOS only) |
| `npm run web` | Run on web browser |
| `npm run lint` | Run ESLint code analysis |
| `npm run build:android` | Build Android APK/AAB |
| `npm run build:ios` | Build iOS app |

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Base UI elements
│   ├── charts/          # Chart components
│   ├── calendar/        # Calendar components
│   └── animations/      # Animation components
├── screens/             # App screens
│   ├── onboarding/      # Welcome and setup
│   ├── habits/          # Habit management
│   ├── analytics/       # Progress and analytics
│   ├── settings/        # App settings
│   └── profile/         # User profile
├── services/            # Business logic
│   ├── database/        # SQLite operations
│   ├── backup/          # Google Drive sync
│   ├── notifications/   # Push notifications
│   └── analytics/       # Data analysis
├── hooks/               # Custom React hooks
├── utils/               # Helper functions
├── constants/           # App constants
├── types/               # TypeScript types
├── i18n/               # Internationalization
└── theme/              # Design system
```

## 🎨 Design System

### Color Palette
- **Primary**: `#4CAF50` (Natural Green)
- **Primary Light**: `#81C784`
- **Primary Dark**: `#388E3C`
- **Background**: `#FFFFFF` / `#121212` (Dark)
- **Text**: `#212121` / `#FFFFFF` (Dark)

### Habit Growth Colors
- **Seed**: `#8BC34A` - Starting phase
- **Sprout**: `#CDDC39` - Early growth
- **Sapling**: `#4CAF50` - Developing habit
- **Tree**: `#2E7D32` - Established habit

## 🌍 Internationalization

The app supports Persian (Farsi) and English with complete RTL support:

- **Language Detection**: Automatic based on device settings
- **RTL Layout**: Proper right-to-left text and layout
- **Cultural Adaptations**: Appropriate imagery and icons
- **Date Formats**: Gregorian and Persian calendar support

## 📱 Platform Support

| Platform | Status | Features |
|----------|--------|----------|
| **Android** | ✅ Full Support | All features available |
| **iOS** | ✅ Full Support | All features available |
| **Web** | 🔄 Progressive Web App | Core features, limited native APIs |

## 🔐 Privacy & Security

- **Privacy-First**: No tracking, no analytics, no data collection
- **Local Storage**: All data stored locally by default
- **Optional Backup**: Google Drive sync only with explicit consent
- **Open Source**: Complete transparency with GPL-3.0 license
- **No Ads**: Completely ad-free experience

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and test thoroughly
4. Commit with conventional commits: `git commit -m "feat: add amazing feature"`
5. Push to your fork: `git push origin feature/amazing-feature`
6. Open a Pull Request

### Code Style
- Follow TypeScript best practices
- Use conventional commits
- Ensure all tests pass
- Maintain test coverage above 80%

## 📋 Development Roadmap & Todo List

### ✅ Phase 1: Foundation (Weeks 1-2)
- [x] Project setup with Expo + TypeScript
- [x] Package dependencies installed
- [x] Project documentation (README)
- [x] Basic project structure setup
- [x] Theme system with styled-components
- [x] Database schema design

### 🔄 Phase 2: Core Features (Weeks 3-4)
- [ ] Navigation structure
- [ ] Base UI components (Button, Card, Input)
- [ ] Habit CRUD operations
- [ ] Basic calendar view
- [ ] Progress tracking system

### ⏳ Phase 3: Advanced Features (Weeks 5-6)
- [ ] Analytics and charts
- [ ] Notification system
- [ ] Internationalization (i18n)
- [ ] Google Drive backup integration

### ⏳ Phase 4: Polish & Features (Weeks 7-8)
- [ ] Pomodoro timer integration
- [ ] Onboarding experience
- [ ] UI/UX improvements
- [ ] Performance optimization

### ⏳ Phase 5: Launch Preparation (Weeks 9-10)
- [ ] Comprehensive testing
- [ ] Bug fixes and stability
- [ ] Build configuration
- [ ] Store preparation and deployment

## 📊 Performance Goals

- **App Launch**: < 3 seconds cold start
- **Smooth Animations**: 60fps consistently
- **Bundle Size**: < 50MB total
- **Memory Usage**: < 150MB peak
- **Crash Rate**: < 0.1%

## 📞 Support & Community

- **Issues**: [GitHub Issues](https://github.com/ArashZich/SeedHabit/issues)
- **Discussions**: [GitHub Discussions](https://github.com/ArashZich/SeedHabit/discussions)
- **Email**: arashzich@gmail.com
- **Documentation**: [Wiki](https://github.com/ArashZich/SeedHabit/wiki)

## 📄 License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

### What this means:
- ✅ You can use, modify, and distribute this software
- ✅ You can use it for commercial purposes
- ✅ You must provide source code when distributing
- ✅ You must use the same license for derivative works
- ✅ You must state changes made to the original code

## 🙏 Acknowledgments

- **Expo Team** - For the amazing development platform
- **React Native Community** - For the excellent ecosystem
- **Open Source Contributors** - For making this possible
- **Users** - For trusting us with their habit tracking journey

---

<div align="center">
  <p>Made with ❤️ and ☕ by ArashZich</p>
  <p>🌱 <strong>Every great tree was once a seed that held its ground</strong> 🌱</p>
</div>

# SeedHabit - نقشه کامل پروژه

## 📋 معرفی پروژه  
**SeedHabit** یک برنامه متن‌باز و حرفه‌ای برای ردیابی عادات است که با React Native/Expo ساخته می‌شود و تمام ویژگی‌های برنامه‌های پولی را به صورت کاملاً رایگان در اختیار همه قرار می‌دهد.

## 🌱 فلسفه SeedHabit
هر عادت خوب مثل یک بذر است که با مراقبت و استمرار به درخت بزرگی تبدیل می‌شود. SeedHabit شما را در این سفر رشد همراهی می‌کند.

## 🚀 انتشار و توزیع
- **📱 F-Droid**: انتشار در بزرگترین مارکت اپن‌سورس اندروید
- **🇮🇷 مارکت‌های ایرانی**: کافه‌بازار، مایکت، پارس‌پک
- **💻 GitHub**: کد کاملاً باز و قابل مشارکت
- **🌐 Progressive Web App**: دسترسی از طریق مرورگر

## 🎯 ویژگی‌های اصلی

### 1. مدیریت عادات
- **عادات بله/خیر**: عادات ساده (ورزش کردن، کتاب خواندن و...)
- **عادات زمان‌دار**: عادات با زمان‌سنجی (20 دقیقه مدیتیشن، 2 ساعت مطالعه)
- **برنامه‌ریزی انعطاف‌پذیر**: روزانه، هفتگی، ماهانه، سفارشی
- **یادآوری‌های هوشمند**: اعلان‌های محتوایی با تشویق ملایم

### 2. نمایش پیشرفت
- **استعاره رشد**: پیشرفت از بذر تا درخت برای هر عادت
- **تقویم نقشه حرارتی**: نمایش فعالیت مثل GitHub
- **نمودارهای پیشرفت**: آنالیز هفتگی، ماهانه، سالانه
- **ردیابی روزهای پیاپی**: رکورد فعلی و بهترین رکورد با قابلیت بازیابی

### 3. سیستم انگیزشی
- **رشد بصری**: تماشای رشد عادات از بذر تا درخت قدرتمند
- **مدال‌های دستاورد**: جوایز نقاط عطف و تشخیص موفقیت
- **برخورد ملایم با شکست**: بدون جریمه سخت برای روزهای از دست رفته
- **تشویق بازگشت**: انگیزه‌های ویژه بعد از وقفه

### 4. ابزارهای بهره‌وری
- **تایمر پومودورو**: جلسات تمرکز داخلی با ادغام عادت
- **داشبورد روزانه**: عادات امروز و مرور پیشرفت
- **بررسی هفتگی/ماهانه**: ابزارهای تأمل و تنظیم

### 5. داده و آنالیز
- **آنالیز هوشمند**: نرخ موفقیت، الگوها، بهترین زمان‌های عملکرد
- **گزینه‌های صادرات**: گزارش PDF، صادرات داده CSV
- **تحلیل روند**: شناسایی چه چیزی کار می‌کند و چه چیزی نه

### 6. پشتیبان‌گیری و همگام‌سازی
- **ادغام حساب گوگل**: پشتیبان‌گیری و بازیابی بدون درز
- **همگام‌سازی چند دستگاه**: دسترسی به داده‌هایتان در همه جا
- **قابلیت انتقال داده**: عملکرد صادرات/واردات

### 7. چندزبانه‌بودن
- **پشتیبانی دوزبانه**: فارسی و انگلیسی
- **پشتیبانی RTL**: رندر صحیح متن راست به چپ
- **انطباقات فرهنگی**: آیکون‌ها و تصاویر مناسب

## 🛠️ پشته فناوری و دستورات نصب

> **📋 توجه**: این پروژه بر اساس Expo Template ساخته شده و بسیاری از پکیج‌های ضروری از قبل نصب هستند.

### ✅ پکیج‌های آماده (نیازی به نصب نیست)
```typescript
// Navigation & Routing
"@react-navigation/bottom-tabs": "^7.4.0"
"@react-navigation/native": "^7.1.8"  
"expo-router": "~6.0.0"
"react-native-screens": "~4.16.0"
"react-native-safe-area-context": "~5.6.0"

// Animation & UI
"react-native-reanimated": "~4.1.0"
"react-native-gesture-handler": "~2.28.0" 
"expo-haptics": "~15.0.6"
"@expo/vector-icons": "^15.0.2"
"expo-image": "~3.0.7"

// Core & Development
"expo": "~54.0.0"
"typescript": "~5.9.2"
"eslint": "^9.25.0"
"@types/react": "~19.1.0"
```

### 📦 پکیج‌های اضافی مورد نیاز

#### 💾 ذخیره‌سازی و پایگاه داده
```bash
# SQLite - برای ذخیره اطلاعات عادات
npx expo install expo-sqlite

# AsyncStorage - برای تنظیمات ساده  
npm install @react-native-async-storage/async-storage
```

#### 🗄️ مدیریت State
```bash
# zustand - سبک و سریع (توصیه می‌شود)
npm install zustand
```

#### 📊 نمودارها و تجسم داده
```bash
# نمودارهای مدرن
npm install victory-native

# تقویم heatmap
npm install react-native-calendar-heatmap

# SVG برای آیکون‌های سفارشی
npm install react-native-svg
```

#### 📅 تاریخ و زمان
```bash
# کار با تاریخ
npm install date-fns

# تقویم فارسی
npm install moment-jalaali
```

#### 🔔 اعلان‌ها
```bash
# اعلان‌های push
npx expo install expo-notifications expo-task-manager
```

#### 🎨 UI Components
```bash
# styled-components - انتخاب نهایی برای کنترل کامل طراحی
npm install styled-components
npm install --save-dev @types/styled-components @types/styled-components-react-native
```

#### 🔐 احراز هویت و پشتیبان‌گیری  
```bash
# Google Auth
npx expo install expo-auth-session expo-crypto

# File System
npx expo install expo-file-system

# Sharing & Document picker
npx expo install expo-sharing expo-document-picker
```

#### 🌍 چندزبانه
```bash
# i18n
npm install react-i18next i18next
npx expo install expo-localization
```

#### ⚡ Performance
```bash
# لیست بهینه
npm install @shopify/flash-list

# Code formatting
npm install --save-dev prettier
```

## 🚀 راه‌اندازی پروژه SeedHabit

### 1️⃣ ساخت پروژه جدید
```bash
# ساخت پروژه با نام SeedHabit (نه my-app!)
npx create-expo-app SeedHabit --template

# رفتن به پوشه پروژه
cd SeedHabit
```

### 2️⃣ نصب همه پکیج‌ها در یک مرحله
```bash
# Dependencies اصلی - سبک و ضروری
npm install zustand victory-native react-native-calendar-heatmap react-native-svg date-fns moment-jalaali @react-native-async-storage/async-storage react-i18next i18next @shopify/flash-list styled-components

# Expo packages
npx expo install expo-sqlite expo-notifications expo-task-manager expo-auth-session expo-crypto expo-file-system expo-sharing expo-document-picker expo-localization

# Dev dependencies  
npm install --save-dev prettier @types/styled-components @types/styled-components-react-native
```

### 3️⃣ تنظیم app.json
```json
{
  "expo": {
    "name": "SeedHabit",
    "slug": "seedhabit", 
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "automatic",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#4CAF50"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "bundleIdentifier": "com.seedhabit.app",
      "supportsTablet": true
    },
    "android": {
      "package": "com.seedhabit.app",
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#4CAF50"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png",
      "bundler": "metro"
    },
    "extra": {
      "eas": {
        "projectId": "your-project-id"
      }
    }
  }
}
```

### 4️⃣ تنظیم package.json  
```json
{
  "name": "seedhabit",
  "version": "1.0.0",
  "description": "Track your habits, grow your life 🌱",
  "main": "expo-router/entry",
  "scripts": {
    "start": "expo start",
    "android": "expo start --android", 
    "ios": "expo start --ios",
    "web": "expo start --web",
    "lint": "expo lint",
    "test": "jest",
    "build:android": "eas build --platform android",
    "build:ios": "eas build --platform ios"
  },
  "keywords": ["habit-tracker", "react-native", "expo", "open-source"],
  "author": "ArashZich",
  "license": "GPL-3.0-or-later",
  "repository": {
    "type": "git",
    "url": "https://github.com/ArashZich/SeedHabit"
  },
  "homepage": "https://github.com/ArashZich/SeedHabit#readme",
  "bugs": {
    "url": "https://github.com/ArashZich/SeedHabit/issues"
  }
}
```

### 📦 لیست پکیج‌های نهایی - بررسی شده

#### ✅ ضروری و کاربردی:
- **zustand**: مدیریت state سبک
- **victory-native**: نمودارهای مدرن و performance بالا
- **react-native-calendar-heatmap**: تقویم مثل GitHub
- **react-native-svg**: آیکون‌های سفارشی
- **date-fns**: کار با تاریخ (سبک‌تر از moment)
- **moment-jalaali**: تقویم شمسی
- **styled-components**: طراحی مینیمال
- **@shopify/flash-list**: لیست بهینه
- **react-i18next**: چندزبانه فارسی/انگلیسی

#### ✅ Expo packages:
- **expo-sqlite**: پایگاه داده محلی
- **expo-notifications**: یادآوری عادات
- **expo-auth-session**: احراز هویت گوگل
- **expo-file-system**: مدیریت فایل
- **expo-localization**: تشخیص زبان


## 🎨 سیستم طراحی با styled-components

### 🌟 مزایای استفاده از styled-components
- **کنترل کامل**: طراحی دقیقاً مطابق نیاز
- **Performance بالا**: فقط استایل‌های استفاده شده لود می‌شوند
- **TypeScript Support**: Type-safe styling
- **Theme System**: مدیریت آسان تم‌ها
- **RTL Ready**: پشتیبانی کامل از راست‌چین/چپ‌چین
- **Bundle Size کم**: بدون کامپوننت‌های اضافی

### 📐 سیستم طراحی SeedHabit

#### Theme Configuration
```typescript
// src/theme/index.ts
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const lightTheme = {
  colors: {
    // Primary Colors - سبز طبیعی برای رشد
    primary: '#4CAF50',
    primaryLight: '#81C784',
    primaryDark: '#388E3C',
    
    // Background Colors
    background: '#FFFFFF',
    surface: '#F8F9FA',
    card: '#FFFFFF',
    
    // Text Colors
    text: '#212121',
    textSecondary: '#757575',
    textTertiary: '#9E9E9E',
    textInverse: '#FFFFFF',
    
    // Status Colors
    success: '#4CAF50',
    warning: '#FF9800', 
    error: '#F44336',
    info: '#2196F3',
    
    // Border & Divider
    border: '#E0E0E0',
    divider: '#EEEEEE',
    
    // Habit Growth Colors - برای مراحل رشد
    seed: '#8BC34A',      // بذر
    sprout: '#CDDC39',    // جوانه
    sapling: '#4CAF50',   // نهال
    tree: '#2E7D32',      // درخت
  },
  
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  
  typography: {
    h1: { fontSize: 32, fontWeight: '700', lineHeight: 40 },
    h2: { fontSize: 24, fontWeight: '600', lineHeight: 32 },
    h3: { fontSize: 20, fontWeight: '600', lineHeight: 28 },
    h4: { fontSize: 18, fontWeight: '500', lineHeight: 24 },
    body1: { fontSize: 16, fontWeight: '400', lineHeight: 24 },
    body2: { fontSize: 14, fontWeight: '400', lineHeight: 20 },
    caption: { fontSize: 12, fontWeight: '400', lineHeight: 16 },
    button: { fontSize: 16, fontWeight: '600', lineHeight: 20 },
  },
  
  borderRadius: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    full: 50,
  },
  
  shadows: {
    sm: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },
    md: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 4,
      elevation: 4,
    },
    lg: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 8,
    },
  },
  
  // Screen dimensions
  dimensions: {
    width,
    height,
    isSmallScreen: width < 375,
  },
};

export const darkTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    background: '#121212',
    surface: '#1E1E1E',
    card: '#2D2D2D',
    text: '#FFFFFF',
    textSecondary: '#B3B3B3',
    textTertiary: '#8A8A8A',
    border: '#333333',
    divider: '#2D2D2D',
  },
};

export type Theme = typeof lightTheme;
```

### 🌍 RTL Support - پشتیبانی کامل راست‌چین

#### RTL Configuration
```typescript
// src/utils/rtl.ts
import { I18nManager } from 'react-native';
import { getLocales } from 'expo-localization';

export const isRTL = () => {
  const locales = getLocales();
  const primaryLocale = locales[0]?.languageCode;
  return ['fa', 'ar', 'he', 'ur'].includes(primaryLocale || '');
};

export const setupRTL = () => {
  const shouldBeRTL = isRTL();
  if (I18nManager.isRTL !== shouldBeRTL) {
    I18nManager.allowRTL(shouldBeRTL);
    I18nManager.forceRTL(shouldBeRTL);
    // نیاز به restart برای اعمال تغییرات
  }
};

// Helper function برای styled-components
export const getDirection = () => I18nManager.isRTL ? 'rtl' : 'ltr';
export const getTextAlign = () => I18nManager.isRTL ? 'right' : 'left';
export const getFlexDirection = () => I18nManager.isRTL ? 'row-reverse' : 'row';
```

#### RTL-Ready Styled Components
```typescript
// src/components/base/Container.tsx
import styled from 'styled-components/native';
import { getDirection } from '../../utils/rtl';

export const Container = styled.View<{
  padding?: keyof Theme['spacing'];
  direction?: 'row' | 'column';
}>`
  padding: ${props => props.theme.spacing[props.padding || 'md']}px;
  flex-direction: ${props => {
    if (props.direction === 'row') {
      return getDirection() === 'rtl' ? 'row-reverse' : 'row';
    }
    return 'column';
  }};
`;

export const Row = styled.View<{
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between';
  align?: 'flex-start' | 'center' | 'flex-end';
  gap?: keyof Theme['spacing'];
}>`
  flex-direction: ${() => getDirection() === 'rtl' ? 'row-reverse' : 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'flex-start'};
  gap: ${props => props.gap ? props.theme.spacing[props.gap] : 0}px;
`;

export const Text = styled.Text<{
  variant?: keyof Theme['typography'];
  color?: string;
  align?: 'left' | 'center' | 'right' | 'auto';
}>`
  ${props => props.theme.typography[props.variant || 'body1']};
  color: ${props => props.color || props.theme.colors.text};
  text-align: ${props => {
    if (props.align === 'auto') {
      return getTextAlign();
    }
    if (props.align && getDirection() === 'rtl') {
      return props.align === 'left' ? 'right' : props.align === 'right' ? 'left' : props.align;
    }
    return props.align || getTextAlign();
  }};
  writing-direction: ${() => getDirection()};
`;
```

#### Button Component با RTL Support
```typescript
// src/components/base/Button.tsx
import styled from 'styled-components/native';
import { getFlexDirection } from '../../utils/rtl';

const StyledButton = styled.TouchableOpacity<{
  variant: 'primary' | 'secondary' | 'ghost';
  size: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}>`
  background-color: ${props => {
    switch (props.variant) {
      case 'primary': return props.theme.colors.primary;
      case 'secondary': return 'transparent';
      case 'ghost': return 'transparent';
      default: return props.theme.colors.primary;
    }
  }};
  
  border: ${props => {
    if (props.variant === 'secondary') {
      return `2px solid ${props.theme.colors.primary}`;
    }
    return 'none';
  }};
  
  padding: ${props => {
    switch (props.size) {
      case 'sm': return `${props.theme.spacing.sm}px ${props.theme.spacing.md}px`;
      case 'lg': return `${props.theme.spacing.lg}px ${props.theme.spacing.xl}px`;
      default: return `${props.theme.spacing.md}px ${props.theme.spacing.lg}px`;
    }
  }};
  
  border-radius: ${props => props.theme.borderRadius.md}px;
  flex-direction: ${() => getFlexDirection()};
  align-items: center;
  justify-content: center;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  
  ${props => props.theme.shadows.sm};
`;

const ButtonText = styled.Text<{variant: string; size: string}>`
  color: ${props => {
    switch (props.variant) {
      case 'primary': return props.theme.colors.textInverse;
      case 'secondary': return props.theme.colors.primary;
      case 'ghost': return props.theme.colors.primary;
      default: return props.theme.colors.textInverse;
    }
  }};
  
  ${props => props.theme.typography.button};
  
  font-size: ${props => {
    switch (props.size) {
      case 'sm': return '14px';
      case 'lg': return '18px';
      default: return '16px';
    }
  }};
`;

export const Button = ({ 
  variant = 'primary', 
  size = 'md',
  children, 
  icon,
  ...props 
}) => (
  <StyledButton variant={variant} size={size} {...props}>
    {icon && <Icon name={icon} />}
    <ButtonText variant={variant} size={size}>
      {children}
    </ButtonText>
  </StyledButton>
);
```

### 🎯 Theme Provider Setup
```typescript
// src/providers/ThemeProvider.tsx
import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native';
import { lightTheme, darkTheme, Theme } from '../theme';

interface ThemeContextType {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  
  const theme = isDark ? darkTheme : lightTheme;
  
  const toggleTheme = () => setIsDark(!isDark);
  
  const value = {
    theme,
    isDark,
    toggleTheme,
  };
  
  return (
    <ThemeContext.Provider value={value}>
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
```

### 📱 استفاده در App
```typescript
// App.tsx
import { setupRTL } from './src/utils/rtl';
import { ThemeProvider } from './src/providers/ThemeProvider';

// راه‌اندازی RTL در شروع برنامه
setupRTL();

export default function App() {
  return (
    <ThemeProvider>
      {/* سایر کامپوننت‌ها */}
    </ThemeProvider>
  );
}
```

## 🎯 نام‌گذاری پروژه

### 🏆 نام انتخابی: **SeedHabit** 🌱

### چرا SeedHabit؟
- ✅ **مفهوم واضح**: هر عادت یک بذر است که رشد می‌کند
- ✅ **بین‌المللی**: قابل فهم در تمام زبان‌ها  
- ✅ **برندسازی آسان**: لوگو و هویت بصری ساده
- ✅ **SEO دوستانه**: کلمات کلیدی مناسب
- ✅ **دامنه در دسترس**: seedhabit.org, .com

### 🌱 هویت بصری
- **رنگ اصلی**: سبز طبیعی (#4CAF50)
- **نماد**: بذر در حال جوانه زدن
- **فونت**: مدرن و خوانا
- **استایل**: مینیمال و دوستانه

### 📱 نام‌گذاری در مارکت‌ها
- **Google Play**: SeedHabit - Habit Tracker
- **F-Droid**: SeedHabit
- **کافه‌بازار**: SeedHabit - ردیاب عادت  
- **GitHub**: SeedHabit

## 🚀 راهنمای انتشار

### 📱 F-Droid
```yaml
# نیازمندی‌های F-Droid
- کد 100% اپن‌سورس
- بدون tracker یا کتابخانه proprietary
- استفاده از Expo Bare Workflow
- ساخت reproducible build
```

#### مراحل انتشار در F-Droid:
1. **آماده‌سازی کد**
   ```bash
   # حذف expo managed dependencies
   npx expo eject
   
   # اضافه کردن build script
   echo "android.enableJetifier=true" >> android/gradle.properties
   ```

2. **ساخت metadata**
   ```yaml
   # metadata/com.seedhabit.app.yml
   Categories:
     - Sports & Health
   License: GPL-3.0-or-later
   AuthorName: ArashZich
   WebSite: https://github.com/ArashZich/SeedHabit
   SourceCode: https://github.com/ArashZich/SeedHabit
   IssueTracker: https://github.com/ArashZich/SeedHabit/issues
   Summary: Track your habits, grow your life
   Description: |-
     SeedHabit is an open-source habit tracking app that helps you build 
     positive habits through gamification and beautiful visualizations.
     
     Features:
     * Visual habit growth from seed to tree
     * GitHub-style heatmap calendar
     * Persian and English support
     * Local data storage with Google Drive backup
     * No tracking or analytics
   ```

3. **درخواست انتشار**
   - Fork کردن fdroiddata repository
   - اضافه کردن metadata
   - ارسال Pull Request

### 🇮🇷 مارکت‌های ایرانی

#### کافه‌بازار
- **فرمت**: AAB (Android App Bundle)
- **حداقل API**: 21 (Android 5.0)
- **حداکثر حجم**: 150MB
- **گواهی**: باید signed باشد

```bash
# ساخت release build
cd android
./gradlew bundleRelease

# فایل خروجی
# android/app/build/outputs/bundle/release/app-release.aab
```

#### مایکت
- **فرمت**: APK یا AAB
- **مدارک**: کارت ملی و کد اقتصادی
- **بررسی**: 2-5 روز کاری

#### پارس‌پک
- **فرمت**: APK
- **حداکثر حجم**: 100MB
- **ویژگی**: پشتیبانی از پرداخت داخلی

### 💻 GitHub و متن‌باز

#### ساختار Repository
```
https://github.com/ArashZich/SeedHabit/
├── src/                # کد اصلی برنامه
│   ├── components/     # کامپوننت‌های UI
│   ├── screens/        # صفحات برنامه
│   ├── services/       # منطق تجاری
│   ├── utils/          # توابع کمکی
│   └── theme/          # سیستم طراحی
├── assets/             # تصاویر و آیکون‌ها
├── docs/               # مستندات
├── .github/            # GitHub Actions
│   └── workflows/
│       ├── build.yml
│       ├── test.yml
│       └── release.yml
├── README.md           # توضیحات پروژه
├── CONTRIBUTING.md     # راهنمای مشارکت
├── PRIVACY.md          # سیاست حریم خصوصی
├── LICENSE            # مجوز GPL-3.0
└── PERSIAN_PROJECT_PLAN.md  # این همین فایل!
```

#### GitHub Actions برای CI/CD
```yaml
# .github/workflows/build.yml
name: Build and Test
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm test
      - run: npx expo build:android
```

### 🌐 Progressive Web App (PWA)

#### تنظیمات PWA
```bash
# فعال‌سازی PWA
npx expo install @expo/webpack-config
npx expo customize web

# تنظیم manifest
# web/manifest.json
{
  "name": "SeedHabit",
  "short_name": "SeedHabit", 
  "description": "Track your habits, grow your life",
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#4CAF50",
  "background_color": "#ffffff"
}
```

#### استقرار PWA
```bash
# ساخت web build
npx expo export:web

# استقرار در Netlify/Vercel/GitHub Pages
npm run deploy
```

### 📊 آمار و نظارت (Privacy-First)

#### آنالیز محلی
```typescript
// بدون ارسال داده به سرور خارجی
const analytics = {
  trackHabitComplete: (habitId: string) => {
    // ذخیره محلی برای آمار شخصی
    localStorage.setItem('habit_stats', JSON.stringify({
      date: new Date(),
      habitId,
      action: 'complete'
    }));
  }
};
```

### 🔒 حریم خصوصی و امنیت

#### اصول حریم خصوصی
- **داده‌ها محلی**: هیچ داده‌ای به سرور ارسال نمی‌شود
- **Backup اختیاری**: فقط با رضایت کاربر
- **بدون Tracker**: هیچ کتابخانه ردیابی استفاده نمی‌شود
- **شفافیت کامل**: کد کاملاً باز

#### مجوز GPL-3.0
```
این برنامه نرم‌افزار آزاد است: می‌توانید آن را تحت شرایط 
مجوز عمومی GNU که توسط بنیاد نرم‌افزار آزاد منتشر شده، 
نسخه 3 یا هر نسخه بعدی (به انتخاب شما) دوباره توزیع 
و/یا تغییر دهید.
```

## 🗂️ ساختار پروژه

```
src/
├── components/           # کامپوننت‌های قابل استفاده مجدد
│   ├── ui/              # عناصر رابط کاربری پایه
│   ├── charts/          # کامپوننت‌های نمودار
│   ├── calendar/        # کامپوننت‌های تقویم
│   └── animations/      # کامپوننت‌های انیمیشن
├── screens/             # صفحات برنامه
│   ├── onboarding/      # خوش‌آمدگویی و راه‌اندازی
│   ├── habits/          # مدیریت عادات
│   ├── analytics/       # پیشرفت و آنالیز
│   ├── settings/        # تنظیمات برنامه
│   └── profile/         # پروفایل کاربر
├── services/            # منطق تجاری
│   ├── database/        # عملیات SQLite
│   ├── backup/          # همگام‌سازی Google Drive
│   ├── notifications/   # اعلان‌های فوری
│   └── analytics/       # تحلیل داده
├── hooks/               # هوک‌های React سفارشی
├── utils/               # توابع کمکی
├── constants/           # ثوابت برنامه
├── types/               # انواع TypeScript
├── i18n/               # بین‌المللی‌سازی
└── assets/             # تصاویر، فونت‌ها و غیره
```

## 🚀 نقشه راه توسعه

### فاز 1: پایه‌گذاری (هفته‌های 1-2)
1. **راه‌اندازی پروژه**
   - راه‌اندازی پروژه Expo با TypeScript
   - تنظیم محیط توسعه
   - پیکربندی ESLint، Prettier، Husky
   - تنظیم ساختار پوشه‌ها

2. **فریمورک رابط کاربری اصلی**
   - کامپوننت‌های سیستم طراحی (Button، Card، Input و غیره)
   - پالت رنگ و تایپوگرافی
   - پشتیبانی تم تاریک/روشن
   - پشتیبانی لایه RTL

3. **طرحواره پایگاه داده**
   - راه‌اندازی پایگاه داده SQLite
   - طرحواره جدول عادات
   - جداول ردیابی پیشرفت
   - ذخیره ترجیحات کاربر

### فاز 2: عملکرد پایه (هفته‌های 3-4)
1. **مدیریت عادت**
   - ایجاد/ویرایش/حذف عادات
   - انواع عادت (بله/خیر، مدت زمان، هدف‌محور)
   - نمای فهرست عادت پایه
   - علامت‌گذاری عادات به عنوان کامل

2. **ساختار ناوبری**
   - راه‌اندازی ناوبری تب
   - مسیریابی صفحه
   - انیمیشن‌های ناوبری

3. **نمای تقویم پایه**
   - نمای تقویم ماه
   - علامت‌گذاری تاریخ‌های تکمیل
   - تجسم نقشه حرارتی پایه

### فاز 3: پیشرفت و آنالیز (هفته‌های 5-6)
1. **نمودارها و تجسم**
   - نمودارهای پیشرفت (خط، نوار، دایره)
   - تجسم روزهای پیاپی
   - محاسبات نرخ موفقیت
   - خلاصه‌های هفتگی/ماهانه

2. **سیستم رشد عادت**
   - منطق پیشرفت بذر تا درخت
   - انیمیشن‌های رشد بصری
   - جشن‌های نقاط عطف

3. **داشبورد آنالیز**
   - بینش‌های شخصی
   - تشخیص الگو
   - بهترین زمان‌های عملکرد

### فاز 4: ویژگی‌های پیشرفته (هفته‌های 7-8)
1. **ادغام پومودورو**
   - عملکرد تایمر
   - جلسات تمرکز مرتبط با عادت
   - یادآوری‌های استراحت

2. **اعلان‌های هوشمند**
   - سیستم یادآوری هوشمند
   - پیام‌های انگیزشی
   - اعلان‌های جشن روزهای پیاپی

3. **سیستم دستاورد**
   - مجموعه مدال
   - جوایز نقاط عطف
   - اشتراک‌گذاری پیشرفت

### فاز 5: داده و صادرات (هفته‌های 9-10)
1. **عملکرد صادرات**
   - تولید گزارش PDF
   - صادرات داده CSV
   - محدوده تاریخ سفارشی

2. **ادغام Google Drive**
   - جریان احراز هویت
   - عملکرد پشتیبان‌گیری/بازیابی
   - همگام‌سازی چند دستگاه

3. **ابزارهای مهاجرت داده**
   - واردات از برنامه‌های دیگر
   - اعتبارسنجی داده
   - حل تضاد

### فاز 6: صیقل و راه‌اندازی (هفته‌های 11-12)
1. **صیقل رابط کاربری/تجربه کاربری**
   - بهبود انیمیشن‌ها
   - تعاملات خرد
   - بهبودهای دسترسی

2. **بین‌المللی‌سازی**
   - ترجمه فارسی
   - تست لایه RTL
   - انطباقات فرهنگی

3. **تست و بهینه‌سازی**
   - تست‌های واحد
   - تست‌های ادغام
   - بهینه‌سازی عملکرد
   - رفع باگ

## 🎨 راهنماهای طراحی

### طراحی بصری
- **مدرن و تمیز**: طراحی مینیمالیست با تمرکز بر قابلیت استفاده
- **سازگار**: زبان طراحی یکپارچه در سراسر برنامه
- **قابل دسترس**: انطباق WCAG 2.1 برای شمولیت
- **پاسخگو**: انطباق با اندازه‌های مختلف صفحه

### انیمیشن‌ها
- **معنادار**: هر انیمیشن هدف دارد
- **کارآمد**: انیمیشن‌های روان 60fps با استفاده از Reanimated
- **ظریف**: انتقالات ملایم که حواس را پرت نمی‌کنند
- **قابل پیکربندی**: گزینه کاهش حرکت برای دسترسی

### پالت رنگ
```javascript
const colors = {
  primary: {
    50: '#E8F5E8',
    100: '#C3E7C3', 
    500: '#4CAF50', // سبز اصلی
    700: '#388E3C',
    900: '#1B5E20'
  },
  secondary: {
    500: '#FF9800', // نارنجی گرم
    700: '#F57C00'
  },
  success: '#4CAF50',
  warning: '#FF9800',
  error: '#F44336',
  info: '#2196F3'
}
```

## 📱 صفحات کلیدی

### 1. جریان خوش‌آمدگویی
- صفحه خوش‌آمدگویی با معرفی برنامه
- راهنمای راه‌اندازی عادت
- درخواست مجوزها (اعلان‌ها و غیره)
- آموزش ایجاد اولین عادت

### 2. داشبورد (خانه)
- مرور عادات امروز
- دکمه‌های عمل سریع
- خلاصه پیشرفت
- پیام‌های انگیزشی

### 3. مدیریت عادات
- فهرست عادت با وضعیت تکمیل
- فرم‌های افزودن/ویرایش عادت
- جزئیات و تاریخچه عادت
- سازماندهی دسته‌بندی

### 4. آنالیز
- نمودارها و گراف‌های پیشرفت
- اطلاعات روزهای پیاپی
- آنالیز نرخ موفقیت
- مقایسه عملکرد عادت

### 5. نمای تقویم
- تجسم نقشه حرارتی
- ناوبری ماه/سال
- تکمیل عادت روزانه
- شناسایی الگو

### 6. تنظیمات
- ترجیحات برنامه
- تنظیمات اعلان
- انتخاب تم
- تغییرگر زبان
- گزینه‌های پشتیبان‌گیری/بازیابی

## 🔧 راه‌اندازی محیط توسعه

### پیش‌نیازها
```bash
# نصب Node.js (نسخه LTS)
# نصب Expo CLI
npm install -g @expo/cli

# نصب ابزارهای توسعه
npm install -g typescript
```

### راه‌اندازی اولیه
```bash
# کلون مخزن
git clone <repository-url>
cd habit-tracker-app

# نصب وابستگی‌ها
npm install

# شروع سرور توسعه
expo start
```

## 🧪 استراتژی تست

### تست واحد
- Jest برای تست منطق
- React Native Testing Library برای تست کامپوننت
- هدف پوشش: >80%

### تست ادغام
- عملیات پایگاه داده
- ادغام‌های API
- جریان‌های ناوبری

## 📈 بهینه‌سازی عملکرد

### اندازه بسته
- تقسیم کد با Expo Router
- Tree shaking برای کد استفاده نشده
- بهینه‌سازی دارایی

### عملکرد زمان اجرا
- بارگذاری تنبل برای کامپوننت‌های سنگین
- Memoization برای محاسبات گران
- رندر کارآمد فهرست با FlashList

## 🔐 امنیت و حریم خصوصی

### امنیت داده
- رمزگذاری محلی برای داده‌های حساس
- ذخیره امن برای توکن‌های احراز هویت
- بدون داده حساس در لاگ‌ها

### حریم خصوصی اول
- جمع‌آوری حداقل داده
- رضایت کاربر برای تمام ردیابی
- سیاست حریم خصوصی شفاف
- آماده انطباق GDPR

## 🎯 معیارهای موفقیت

### تعامل کاربر
- کاربران فعال روزانه
- نرخ تکمیل عادت
- مدت جلسه
- استفاده از ویژگی

### کیفیت برنامه
- جلسات بدون خرابی (>99.5%)
- رتبه‌بندی فروشگاه برنامه (>4.5)
- زمان بارگذاری (<3s)
- گزارش باگ (<1% کاربران)

---

این نقشه کامل راهنمای ساخت برنامه ردیابی عادت حرفه‌ای است که با برنامه‌های پولی رقابت می‌کند ولی کاملاً رایگان و متن‌باز باقی می‌ماند. تمرکز بر تجربه کاربر، عملکرد و پشتیبانی معنادار از شکل‌گیری عادت است.
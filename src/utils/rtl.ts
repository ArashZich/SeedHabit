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

// Helper functions برای styled-components
export const getDirection = () => I18nManager.isRTL ? 'rtl' : 'ltr';
export const getTextAlign = () => I18nManager.isRTL ? 'right' : 'left';
export const getFlexDirection = () => I18nManager.isRTL ? 'row-reverse' : 'row';
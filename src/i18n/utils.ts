/**
 * i18n Utilities for ELEMATT
 * Simple internationalization system for Astro
 */

import es from './es.json';
import en from './en.json';
import pt from './pt.json';
import it from './it.json';

export const languages = {
  es: 'Español',
  en: 'English',
  pt: 'Português',
  it: 'Italiano',
};

export const defaultLang = 'es';

export const ui = {
  es,
  en,
  pt,
  it,
} as const;

export type Language = keyof typeof ui;

/**
 * Get translation for a key
 * @param lang - Language code
 * @param key - Translation key (e.g., 'nav.home')
 * @returns Translated string
 */
export function useTranslations(lang: Language = defaultLang) {
  return function t(key: string): string {
    const keys = key.split('.');
    let value: any = ui[lang];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };
}

/**
 * Get language from URL path
 * @param url - URL object
 * @returns Language code
 */
export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Language;
  return defaultLang;
}

/**
 * Translate path to another language
 * @param path - Current path
 * @param lang - Target language
 * @returns Translated path
 */
export function translatePath(path: string, lang: Language): string {
  // Remove leading slash and language prefix
  const pathWithoutLang = path.replace(/^\/(es|en|pt|it)/, '').replace(/^\//, '');
  
  // If default language, don't add prefix
  if (lang === defaultLang) {
    return `/${pathWithoutLang}`;
  }
  
  // Add language prefix
  return `/${lang}/${pathWithoutLang}`;
}

/**
 * Get all available languages
 * @returns Array of language codes
 */
export function getLanguages(): Language[] {
  return Object.keys(ui) as Language[];
}

/**
 * Check if a language is supported
 * @param lang - Language code to check
 * @returns True if supported
 */
export function isLanguageSupported(lang: string): lang is Language {
  return lang in ui;
}


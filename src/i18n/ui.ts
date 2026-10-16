export const languages = {
  en: 'English',
  fr: 'Français',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    'nav.work': 'work',
    'nav.experience': 'experience',
    'nav.education': 'education',
    'nav.lab': 'lab',
    'nav.about': 'about',
    'nav.contact': 'contact',
    'nav.menu': 'menu',
    'nav.close': 'close',
    skip: 'Skip to content',
    'lang.en': 'English',
    'lang.fr': 'Français',
    footer: 'Built with Astro, hosted on GitHub Pages. No cookies, no tracking.',
  },
  fr: {
    'nav.work': 'projets',
    'nav.experience': 'expérience',
    'nav.education': 'formation',
    'nav.lab': 'lab',
    'nav.about': 'à propos',
    'nav.contact': 'contact',
    'nav.menu': 'menu',
    'nav.close': 'fermer',
    skip: 'Aller au contenu',
    'lang.en': 'English',
    'lang.fr': 'Français',
    footer: 'Construit avec Astro, hébergé sur GitHub Pages. Pas de cookies, pas de pistage.',
  },
} as const;

export type UiKey = keyof (typeof ui)['en'];

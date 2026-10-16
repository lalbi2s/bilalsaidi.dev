import { ui, type Lang, type UiKey } from './ui';

export function t(lang: Lang, key: UiKey): string {
  return ui[lang][key];
}

import { isDark } from '$lib/store';

export default function computeTheme() {
  isDark.subscribe((value) => {
    if (value == true || (value == null && window.matchMedia('(prefers-color-scheme: dark)'))) {
      if (value == null) value.set(true);
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  });
}
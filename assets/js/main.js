/**
 * dvnuzdev — Minimal Theme Switcher
 */

(function () {
  const html = document.documentElement;
  const toggleBtn = document.getElementById('themeToggle');
  const toggleText = document.getElementById('themeText');

  const saved = localStorage.getItem('theme');
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = saved || (systemDark ? 'dark' : 'light');

  setTheme(initialTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = html.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      setTheme(next);
      localStorage.setItem('theme', next);
    });
  }

  function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    if (toggleText) {
      toggleText.textContent = theme === 'dark' ? 'Light' : 'Dark';
    }
  }
})();

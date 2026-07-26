import { navigation, profile } from '../data/portfolio.js';
import { icon } from '../utils/icons.js';

export function Header() {
  const navLinks = navigation
    .map(([id, label]) => `<a class="nav-link" href="#${id}" data-section-link="${id}">${label}</a>`)
    .join('');

  return `
    <div class="scroll-progress" aria-hidden="true"><span></span></div>
    <header class="site-header" data-header>
      <div class="container header-inner">
        <a class="brand" href="#top" aria-label="${profile.name} - back to top">
          <span class="brand-mark" aria-hidden="true"><span>A</span><span>D</span></span>
          <span class="brand-copy"><strong>${profile.name}</strong><small>Data Engineer · Data Analyst</small></span>
        </a>

        <nav class="desktop-nav" aria-label="Primary navigation">${navLinks}</nav>

        <div class="header-actions">
          <button class="icon-button theme-toggle" type="button" data-theme-toggle aria-label="Switch to light mode" title="Toggle color theme">
            <span class="theme-toggle__sun">${icon('sun', { size: 19 })}</span>
            <span class="theme-toggle__moon">${icon('moon', { size: 19 })}</span>
          </button>
          <a class="header-resume" href="${profile.resume}" target="_blank" rel="noreferrer">Resume${icon('external', { size: 15 })}</a>
          <button class="icon-button menu-toggle" type="button" data-menu-toggle aria-expanded="false" aria-controls="mobile-menu" aria-label="Open navigation menu">
            <span data-menu-open>${icon('menu', { size: 21 })}</span>
            <span data-menu-close hidden>${icon('close', { size: 21 })}</span>
          </button>
        </div>
      </div>
      <nav class="mobile-nav" id="mobile-menu" aria-label="Mobile navigation" hidden>
        <div class="container mobile-nav__inner">${navLinks}</div>
      </nav>
    </header>
  `;
}

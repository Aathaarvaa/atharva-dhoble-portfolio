import { profile } from '../data/portfolio.js';
import { icon } from '../utils/icons.js';

export function Footer() {
  return `
    <footer class="site-footer">
      <div class="container footer-inner">
        <div>
          <a class="brand brand--footer" href="#top">
            <span class="brand-mark" aria-hidden="true"><span>A</span><span>D</span></span>
            <span class="brand-copy"><strong>${profile.name}</strong><small>Trusted data · clear decisions</small></span>
          </a>
          <p>Designed as a visual representation of a career in data engineering and analytics.</p>
        </div>
        <div class="footer-links">
          <a href="${profile.linkedin}" target="_blank" rel="noreferrer">${icon('linkedin', { size: 17 })}LinkedIn</a>
          <a href="${profile.github}" target="_blank" rel="noreferrer">${icon('github', { size: 17 })}GitHub</a>
          <a href="${profile.resume}" target="_blank" rel="noreferrer">${icon('fileText', { size: 17 })}Resume</a>
        </div>
        <p class="footer-meta">© <span data-current-year></span> ${profile.name}. Built for GitHub Pages.</p>
      </div>
    </footer>
  `;
}

import { icon } from './icons.js';

export const join = (items) => items.filter(Boolean).join('');

export function sectionHeading({ eyebrow, title, description, align = 'left' }) {
  return `
    <div class="section-heading section-heading--${align} reveal">
      <div class="section-heading__eyebrow"><span></span>${eyebrow}</div>
      <h2>${title}</h2>
      ${description ? `<p>${description}</p>` : ''}
    </div>
  `;
}

export function tag(text, className = '') {
  return `<span class="tag ${className}">${text}</span>`;
}

export function linkButton({ href, label, iconName = 'arrowRight', variant = 'secondary', external = false, download = false, disabled = false, className = '' }) {
  if (disabled || !href) {
    return `<span class="button button--${variant} button--disabled ${className}" aria-disabled="true">${label}${icon(iconName, { size: 17 })}</span>`;
  }
  return `<a class="button button--${variant} ${className}" href="${href}" ${external ? 'target="_blank" rel="noreferrer"' : ''} ${download ? 'download' : ''}>${label}${icon(iconName, { size: 17 })}</a>`;
}

export function metricPill(text) {
  return `<span class="metric-pill">${icon('check', { size: 14 })}${text}</span>`;
}

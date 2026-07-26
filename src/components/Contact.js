import { profile } from '../data/portfolio.js';
import { icon } from '../utils/icons.js';

export function Contact() {
  return `
    <section class="section contact" id="contact" aria-labelledby="contact-title">
      <div class="container">
        <div class="contact-card reveal">
          <div class="contact-card__grid" aria-hidden="true"></div>
          <div class="contact-card__copy">
            <p class="section-heading__eyebrow"><span></span>Let us connect</p>
            <h2 id="contact-title">Have a data problem worth solving?</h2>
            <p>
              I am interested in roles and conversations around data engineering, analytics engineering, Azure data platforms, business intelligence, and production data quality.
            </p>
            <div class="contact-card__actions">
              <a class="button button--primary" href="mailto:${profile.email}">Send an email${icon('mail', { size: 17 })}</a>
              <button class="button button--secondary" type="button" data-copy-email data-email="${profile.email}">Copy email${icon('copy', { size: 17 })}</button>
            </div>
          </div>

          <div class="contact-links" aria-label="Contact details">
            <a href="mailto:${profile.email}">
              <span>${icon('mail', { size: 20 })}</span>
              <div><small>Email</small><strong>${profile.email}</strong></div>
              ${icon('arrowRight', { size: 18 })}
            </a>
            <a href="${profile.linkedin}" target="_blank" rel="noreferrer">
              <span>${icon('linkedin', { size: 20 })}</span>
              <div><small>LinkedIn</small><strong>Connect professionally</strong></div>
              ${icon('external', { size: 18 })}
            </a>
            <a href="${profile.github}" target="_blank" rel="noreferrer">
              <span>${icon('github', { size: 20 })}</span>
              <div><small>GitHub</small><strong>Explore public work</strong></div>
              ${icon('external', { size: 18 })}
            </a>
            <div class="contact-links__location">
              <span>${icon('mapPin', { size: 20 })}</span>
              <div><small>Location</small><strong>${profile.location}</strong></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

import { profile } from '../data/portfolio.js';
import { icon } from '../utils/icons.js';
import { linkButton } from '../utils/html.js';

const pipelineSteps = [
  ['database', 'Sources'],
  ['pipeline', 'Ingest'],
  ['settings', 'Transform'],
  ['shieldCheck', 'Validate'],
  ['chart', 'Analyze'],
  ['sparkles', 'Insight'],
];

export function Hero() {
  const pipeline = pipelineSteps
    .map(
      ([iconName, label], index) => `
        <div class="hero-pipeline__step" style="--step:${index}">
          <span class="hero-pipeline__icon">${icon(iconName, { size: 19 })}</span>
          <span>${label}</span>
        </div>
        ${index < pipelineSteps.length - 1 ? `<span class="hero-pipeline__connector" aria-hidden="true"><i></i></span>` : ''}
      `,
    )
    .join('');

  return `
    <section class="hero" id="top" aria-labelledby="hero-title">
      <div class="hero-grid" aria-hidden="true"></div>
      <div class="hero-glow hero-glow--one" aria-hidden="true"></div>
      <div class="hero-glow hero-glow--two" aria-hidden="true"></div>
      <div class="container hero-layout">
        <div class="hero-copy">
          <div class="availability-badge reveal">
            <span class="availability-badge__dot"></span>
            Data Engineer · Data Analyst · Analytics Engineer
          </div>
          <p class="hero-kicker reveal">Hello, I am</p>
          <h1 id="hero-title" class="reveal">Atharva <span>Dhoble</span></h1>
          <p class="hero-headline reveal">${profile.headline}</p>
          <p class="hero-summary reveal">${profile.summary}</p>

          <div class="hero-actions reveal">
            ${linkButton({ href: '#projects', label: 'Explore my work', iconName: 'arrowDown', variant: 'primary' })}
            ${linkButton({ href: profile.resume, label: 'Download resume', iconName: 'download', variant: 'secondary', download: true })}
          </div>

          <div class="hero-socials reveal" aria-label="Professional links">
            <a href="${profile.linkedin}" target="_blank" rel="noreferrer">${icon('linkedin', { size: 18 })}<span>LinkedIn</span></a>
            <a href="${profile.github}" target="_blank" rel="noreferrer">${icon('github', { size: 18 })}<span>GitHub</span></a>
            <a href="mailto:${profile.email}">${icon('mail', { size: 18 })}<span>Email</span></a>
          </div>
        </div>

        <div class="hero-visual hero-visual--pipeline reveal" aria-label="Data engineering workflow visualization">
          <div class="pipeline-card__header">
            <div>
              <p class="micro-label">Data delivery flow</p>
              <h2>From source systems to trusted insight.</h2>
            </div>
            <span class="status-chip"><i></i> reliable</span>
          </div>
          <div class="hero-pipeline hero-pipeline--featured" role="img" aria-label="Sources flow through ingestion, transformation, validation, analytics, and insights">
            ${pipeline}
          </div>
          <p class="pipeline-card__caption">A concise view of how I approach modern data work: ingest carefully, transform consistently, validate continuously, and deliver analytics people can trust.</p>
        </div>
      </div>

      <a class="scroll-cue" href="#about" aria-label="Scroll to About section">
        <span>Scroll to explore</span>
        ${icon('arrowDown', { size: 17 })}
      </a>
    </section>
  `;
}

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

        <div class="hero-visual reveal" aria-label="Data engineering workflow visualization">
          <div class="hero-visual__topbar">
            <div class="window-dots" aria-hidden="true"><i></i><i></i><i></i></div>
            <span>trusted-data-pipeline.yaml</span>
            <span class="status-chip"><i></i> healthy</span>
          </div>

          <div class="hero-visual__body">
            <div class="hero-terminal" aria-label="Pipeline configuration example">
              <div><span class="line-no">01</span><span class="code-key">pipeline</span><span>:</span></div>
              <div><span class="line-no">02</span><span class="code-indent">name:</span> <span class="code-value">trusted_insights</span></div>
              <div><span class="line-no">03</span><span class="code-indent">cloud:</span> <span class="code-value">azure</span></div>
              <div><span class="line-no">04</span><span class="code-indent">quality_gate:</span> <span class="code-good">passed</span></div>
              <div><span class="line-no">05</span><span class="code-indent">delivery:</span> <span class="code-value">power_bi</span></div>
            </div>

            <div class="hero-pipeline" role="img" aria-label="Sources flow through ingestion, transformation, validation, analytics, and insights">
              ${pipeline}
            </div>

            <div class="hero-monitor-grid">
              <article>
                <span>Validation coverage</span>
                <strong>150+</strong>
                <small>${icon('shieldCheck', { size: 14 })} checks</small>
              </article>
              <article>
                <span>Production scope</span>
                <strong>15+</strong>
                <small>${icon('database', { size: 14 })} entities</small>
              </article>
              <article>
                <span>Health signal</span>
                <strong>95%</strong>
                <small>${icon('chart', { size: 14 })} monitored</small>
              </article>
            </div>
          </div>
        </div>
      </div>

      <a class="scroll-cue" href="#about" aria-label="Scroll to About section">
        <span>Scroll to explore</span>
        ${icon('arrowDown', { size: 17 })}
      </a>
    </section>
  `;
}

import { architecture } from '../data/portfolio.js';
import { icon } from '../utils/icons.js';
import { sectionHeading } from '../utils/html.js';

export function Architecture() {
  const nodes = architecture
    .map(
      (node, index) => `
        <div class="architecture-step" style="--step:${index}">
          <button class="architecture-node architecture-node--${node.accent}${index === 0 ? ' is-active' : ''}" type="button" data-architecture-node="${node.id}" aria-pressed="${index === 0}">
            <span class="architecture-node__index">${String(index + 1).padStart(2, '0')}</span>
            <span class="architecture-node__icon">${icon(node.icon, { size: 24 })}</span>
            <strong>${node.label}</strong>
            <small>${node.items[0]}</small>
          </button>
          ${
            index < architecture.length - 1
              ? `<div class="architecture-connector" aria-hidden="true"><span></span><i style="--signal:${index}"></i></div>`
              : ''
          }
        </div>
      `,
    )
    .join('');

  const first = architecture[0];

  return `
    <section class="section architecture" id="architecture" aria-labelledby="architecture-title">
      <div class="architecture-background" aria-hidden="true"></div>
      <div class="container">
        ${sectionHeading({
          eyebrow: 'Signature architecture',
          title: 'How I think about an end-to-end data platform.',
          description:
            'The value is not in any single service. It comes from connecting source integration, governed transformation, observable quality, and analytics into one reliable flow.',
        }).replace('<h2>', '<h2 id="architecture-title">')}

        <div class="architecture-shell reveal">
          <div class="architecture-shell__header">
            <div>
              <span class="status-chip"><i></i> reference flow</span>
              <strong>Azure analytics delivery path</strong>
            </div>
            <span class="architecture-shell__hint">Select a stage to inspect it</span>
          </div>

          <div class="architecture-flow" aria-label="Interactive data engineering architecture">
            ${nodes}
          </div>

          <div class="architecture-detail" data-architecture-detail>
            <div class="architecture-detail__icon">${icon(first.icon, { size: 28 })}</div>
            <div>
              <p class="micro-label">Selected stage</p>
              <h3>${first.label}</h3>
              <div class="architecture-detail__items">${first.items.map((item) => `<span>${item}</span>`).join('')}</div>
            </div>
            <p>Source systems establish the context for every downstream design decision: extraction pattern, schema controls, refresh strategy, lineage, and quality rules.</p>
          </div>
        </div>

        <div class="architecture-principles">
          <article class="reveal"><span>01</span><h3>Configurable</h3><p>Externalized rules and JSON configuration reduce repeated engineering effort.</p></article>
          <article class="reveal"><span>02</span><h3>Idempotent</h3><p>Loads are designed to be safely re-run without corrupting reporting state.</p></article>
          <article class="reveal"><span>03</span><h3>Observable</h3><p>Validation results and health signals are visible beyond engineering logs.</p></article>
          <article class="reveal"><span>04</span><h3>Business-ready</h3><p>Gold-layer models and BI outputs connect the platform to real decisions.</p></article>
        </div>
      </div>
    </section>
  `;
}

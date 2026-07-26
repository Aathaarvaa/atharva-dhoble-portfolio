import { metrics } from '../data/portfolio.js';
import { icon } from '../utils/icons.js';

export function Metrics() {
  const cards = metrics
    .map(
      (metric, index) => `
        <article class="metric-card reveal" style="--delay:${index}">
          <div class="metric-card__top">
            <span class="metric-card__index">0${index + 1}</span>
            ${icon(index === metrics.length - 1 ? 'graduation' : 'chart', { size: 19 })}
          </div>
          <strong class="metric-card__value" data-counter="${metric.value}" data-decimals="${metric.decimals || 0}" data-suffix="${metric.suffix}">0${metric.suffix}</strong>
          <h3>${metric.label}</h3>
          <p>${metric.detail}</p>
        </article>
      `,
    )
    .join('');

  return `
    <section class="impact-band" aria-labelledby="impact-title">
      <div class="container">
        <div class="impact-band__header reveal">
          <div>
            <span class="section-heading__eyebrow"><span></span>Verified impact</span>
            <h2 id="impact-title">Production-scale work, expressed in outcomes.</h2>
          </div>
          <p>Every number below is supported by the supplied professional experience and education information.</p>
        </div>
        <div class="metrics-grid">${cards}</div>
      </div>
    </section>
  `;
}

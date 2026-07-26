import { focusAreas } from '../data/portfolio.js';
import { icon } from '../utils/icons.js';
import { sectionHeading } from '../utils/html.js';

export function About() {
  const cards = focusAreas
    .map(
      (item, index) => `
        <article class="focus-card reveal" style="--delay:${index}">
          <span class="focus-card__icon">${icon(item.icon, { size: 23 })}</span>
          <h3>${item.label}</h3>
          <p>${item.text}</p>
        </article>
      `,
    )
    .join('');

  return `
    <section class="section about" id="about" aria-labelledby="about-title">
      <div class="container">
        ${sectionHeading({
          eyebrow: 'About me',
          title: 'Engineering the path from raw data to reliable decisions.',
          description:
            'I work across data engineering and analytics: building the platform, validating the data, and making the result usable for people who need to act on it.',
        }).replace('<h2>', '<h2 id="about-title">')}

        <div class="about-layout">
          <div class="about-story reveal">
            <p class="about-story__lead">
              My strongest work sits at the point where <strong>technical reliability</strong> meets <strong>business clarity</strong>.
            </p>
            <p>
              I have hands-on experience designing Azure-based ETL/ELT pipelines, Medallion data platforms, production reconciliation workflows, schema and intrinsic validation, source-to-target mapping, and Power BI reporting. I enjoy turning fragmented source systems into governed data products that teams can trust.
            </p>
            <p>
              That means thinking beyond a successful pipeline run: Is the data complete? Is it consistent with the source? Can failures be traced? Can a business user understand the health of the platform without reading logs? Those questions shape how I build.
            </p>
            <div class="about-principles" aria-label="Working principles">
              <span><i>01</i> Build for repeatability</span>
              <span><i>02</i> Validate before reporting</span>
              <span><i>03</i> Make quality observable</span>
            </div>
          </div>

          <div class="focus-grid">${cards}</div>
        </div>
      </div>
    </section>
  `;
}

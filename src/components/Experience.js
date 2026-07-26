import { experiences } from '../data/portfolio.js';
import { icon } from '../utils/icons.js';
import { metricPill, sectionHeading, tag } from '../utils/html.js';

function projectBlock(project) {
  return `
    <article class="experience-project">
      <div class="experience-project__heading">
        <span>${icon('layers', { size: 19 })}</span>
        <div><p>Project</p><h4>${project.name}</h4></div>
      </div>
      <p class="experience-project__intro">${project.intro}</p>
      <ul>${project.achievements.map((achievement) => `<li>${icon('check', { size: 15 })}<span>${achievement}</span></li>`).join('')}</ul>
      <div class="metric-pills">${project.metrics.map(metricPill).join('')}</div>
    </article>
  `;
}

export function Experience() {
  const timeline = experiences
    .map(
      (experience, index) => `
        <article class="experience-item reveal" style="--delay:${index}">
          <div class="experience-rail" aria-hidden="true"><span>${String(index + 1).padStart(2, '0')}</span><i></i></div>
          <div class="experience-card">
            <button class="experience-card__summary" type="button" data-accordion-button aria-expanded="${index === 0}" aria-controls="experience-panel-${experience.id}">
              <span class="experience-card__icon">${icon('briefcase', { size: 23 })}</span>
              <span class="experience-card__main">
                <span class="micro-label">${experience.type}</span>
                <strong>${experience.role}</strong>
                <span>${experience.company}</span>
              </span>
              <span class="experience-card__meta">
                <span>${experience.period}</span>
                <span>${experience.location}</span>
              </span>
              <span class="experience-card__toggle">${icon('chevronDown', { size: 20 })}</span>
            </button>

            <div class="experience-card__panel" id="experience-panel-${experience.id}" ${index === 0 ? '' : 'hidden'}>
              <p class="experience-card__overview">${experience.summary}</p>
              <div class="experience-tech">${experience.technologies.map((technology) => tag(technology)).join('')}</div>
              <div class="experience-projects">${experience.projects.map(projectBlock).join('')}</div>
            </div>
          </div>
        </article>
      `,
    )
    .join('');

  return `
    <section class="section experience" id="experience" aria-labelledby="experience-title">
      <div class="container">
        ${sectionHeading({
          eyebrow: 'Professional experience',
          title: 'From production pipelines to business-facing analytics.',
          description:
            'Expand each role to see the architecture patterns, responsibilities, technologies, and verified impact behind the headline.',
        }).replace('<h2>', '<h2 id="experience-title">')}
        <div class="experience-timeline">${timeline}</div>
      </div>
    </section>
  `;
}

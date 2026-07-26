import { projectFilters, projects } from '../data/portfolio.js';
import { icon } from '../utils/icons.js';
import { sectionHeading, tag } from '../utils/html.js';

function projectCard(project, index) {
  const visualClass = `project-visual--${(index % 4) + 1}`;
  const metrics = project.metrics.length
    ? `<div class="project-card__metrics">${project.metrics.map((metric) => `<span>${metric}</span>`).join('')}</div>`
    : `<div class="project-card__status">${icon('info', { size: 14 })} Details to verify</div>`;

  return `
    <article class="project-card reveal ${project.featured ? 'project-card--featured' : ''}" data-project-card data-category="${project.category}" style="--delay:${index % 3}">
      <div class="project-card__visual ${visualClass}" aria-hidden="true">
        <div class="project-card__grid"></div>
        <span class="project-card__type">${project.category}</span>
        <div class="project-card__diagram">
          <i></i><i></i><i></i><span></span><b></b>
        </div>
      </div>
      <div class="project-card__body">
        <p class="micro-label">${project.eyebrow}</p>
        <h3>${project.title}</h3>
        <p>${project.summary}</p>
        ${metrics}
        <div class="project-card__tags">${project.technologies.slice(0, 4).map((technology) => tag(technology)).join('')}</div>
        <button class="project-card__action" type="button" data-project-open="${project.id}" aria-label="View details for ${project.title}">
          View case study ${icon('arrowRight', { size: 17 })}
        </button>
      </div>
    </article>
  `;
}

export function Projects() {
  const filters = projectFilters
    .map(
      (filter, index) => `
        <button class="project-filter${index === 0 ? ' is-active' : ''}" type="button" data-project-filter="${filter}" aria-pressed="${index === 0}">
          ${filter}
        </button>
      `,
    )
    .join('');

  return `
    <section class="section projects" id="projects" aria-labelledby="projects-title">
      <div class="container">
        ${sectionHeading({
          eyebrow: 'Selected work',
          title: 'Systems, analytics, forecasting, and applied research.',
          description:
            'Professional work is grounded in resume-supported outcomes. Projects without supplied implementation details are deliberately marked for verification instead of being embellished.',
        }).replace('<h2>', '<h2 id="projects-title">')}

        <div class="project-toolbar reveal">
          <div class="project-toolbar__label">${icon('filter', { size: 17 })} Filter projects</div>
          <div class="project-filters" role="group" aria-label="Filter projects by category">${filters}</div>
        </div>

        <div class="project-grid" data-project-grid>${projects.map(projectCard).join('')}</div>
        <p class="project-empty" data-project-empty hidden>No projects match this filter.</p>
      </div>

      <div class="modal" data-project-modal hidden>
        <div class="modal__backdrop" data-modal-close></div>
        <div class="modal__dialog" role="dialog" aria-modal="true" aria-labelledby="modal-title" tabindex="-1">
          <button class="modal__close" type="button" data-modal-close aria-label="Close project details">${icon('close', { size: 21 })}</button>
          <div class="modal__content" data-modal-content></div>
        </div>
      </div>
    </section>
  `;
}

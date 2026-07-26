import { publications } from '../data/portfolio.js';
import { icon } from '../utils/icons.js';
import { linkButton, sectionHeading } from '../utils/html.js';

function publicationCard(publication, index) {
  return `
    <article class="publication-card reveal" style="--delay:${index}">
      <div class="publication-card__marker">
        <span>${publication.year}</span>
        ${icon('fileText', { size: 22 })}
      </div>
      <div class="publication-card__content">
        <p class="micro-label">${publication.type}</p>
        <h3>${publication.title}</h3>
        <p class="publication-card__venue">${publication.venue}</p>
        <p>${publication.description}</p>
        <div class="publication-card__links">
          ${linkButton({ href: publication.publication, label: 'Publication', iconName: 'external', variant: 'text', external: true })}
          ${linkButton({ href: publication.researchGate, label: 'ResearchGate', iconName: 'external', variant: 'text', external: true })}
          ${linkButton({ href: publication.pdf, label: '[ADD PAPER PDF]', iconName: 'download', variant: 'text', disabled: !publication.pdf })}
        </div>
      </div>
    </article>
  `;
}

export function Publications() {
  return `
    <section class="section publications" id="publications" aria-labelledby="publications-title">
      <div class="container">
        ${sectionHeading({
          eyebrow: 'Research & publications',
          title: 'Applied technology, documented through academic work.',
          description:
            'Publication and ResearchGate links are included where publicly verified. Full-text PDF links remain placeholders because no paper files were supplied.',
        }).replace('<h2>', '<h2 id="publications-title">')}
        <div class="publication-list">${publications.map(publicationCard).join('')}</div>
      </div>
    </section>
  `;
}

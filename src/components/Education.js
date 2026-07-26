import { education } from '../data/portfolio.js';
import { icon } from '../utils/icons.js';
import { sectionHeading } from '../utils/html.js';

export function Education() {
  return `
    <section class="section education" id="education" aria-labelledby="education-title">
      <div class="container">
        ${sectionHeading({
          eyebrow: 'Education',
          title: 'A foundation in artificial intelligence, data, and engineering.',
          description:
            'Academic training that supports my work across data platforms, analytics, automation, applied machine learning, and research.',
        }).replace('<h2>', '<h2 id="education-title">')}

        <div class="education-card reveal">
          <div class="education-card__crest" aria-hidden="true">
            ${icon('graduation', { size: 38 })}
            <span>VIT</span>
          </div>
          <div class="education-card__content">
            <p class="micro-label">${education.period}</p>
            <h3>${education.institution}</h3>
            <strong>${education.degree}</strong>
            <p>${education.note}</p>
            <div class="education-card__location">${icon('mapPin', { size: 16 })}${education.location}</div>
          </div>
          <div class="education-card__score">
            <span>CGPA</span>
            <strong>${education.cgpa}</strong>
            <small>out of 10</small>
          </div>
        </div>
      </div>
    </section>
  `;
}

import { skillCategories } from '../data/portfolio.js';
import { icon } from '../utils/icons.js';
import { sectionHeading, tag } from '../utils/html.js';

export function Skills() {
  const groups = skillCategories
    .map(
      (category, index) => `
        <article class="skill-group reveal" style="--delay:${index}">
          <div class="skill-group__heading">
            <span class="skill-group__icon">${icon(category.icon, { size: 23 })}</span>
            <div>
              <p class="micro-label">${String(index + 1).padStart(2, '0')}</p>
              <h3>${category.label}</h3>
            </div>
          </div>
          <p>${category.description}</p>
          <div class="skill-cloud">${category.skills.map((skill) => tag(skill)).join('')}</div>
        </article>
      `,
    )
    .join('');

  return `
    <section class="section skills" id="skills" aria-labelledby="skills-title">
      <div class="container">
        ${sectionHeading({
          eyebrow: 'Technical toolkit',
          title: 'A practical stack for building and explaining data systems.',
          description:
            'All core skills are grouped by how they contribute to engineering, analytics, cloud platforms, and production delivery.',
        }).replace('<h2>', '<h2 id="skills-title">')}

        <div class="skills-grid">${groups}</div>

        <div class="stack-line reveal" aria-label="Primary data platform stack">
          <div class="stack-line__label">Core delivery stack</div>
          <div class="stack-line__flow">
            <span>Python / SQL</span><i></i><span>ADF</span><i></i><span>ADLS Gen2</span><i></i><span>Synapse / Fabric</span><i></i><span>Power BI</span>
          </div>
        </div>
      </div>
    </section>
  `;
}

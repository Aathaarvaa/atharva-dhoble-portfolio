import { skillCategories } from '../data/portfolio.js';
import { icon } from '../utils/icons.js';
import { sectionHeading, tag } from '../utils/html.js';

export function Skills() {
  const tabs = skillCategories
    .map(
      (category, index) => `
        <button class="skill-tab${index === 0 ? ' is-active' : ''}" type="button" role="tab" aria-selected="${index === 0}" aria-controls="skill-panel-${category.id}" id="skill-tab-${category.id}" data-skill-tab="${category.id}">
          ${icon(category.icon, { size: 18 })}
          <span>${category.label}</span>
        </button>
      `,
    )
    .join('');

  const panels = skillCategories
    .map(
      (category, index) => `
        <div class="skill-panel${index === 0 ? ' is-active' : ''}" id="skill-panel-${category.id}" role="tabpanel" aria-labelledby="skill-tab-${category.id}" data-skill-panel="${category.id}" ${index === 0 ? '' : 'hidden'}>
          <div class="skill-panel__intro">
            <span class="skill-panel__icon">${icon(category.icon, { size: 29 })}</span>
            <div>
              <p class="micro-label">${String(index + 1).padStart(2, '0')} / ${String(skillCategories.length).padStart(2, '0')}</p>
              <h3>${category.label}</h3>
              <p>${category.description}</p>
            </div>
          </div>
          <div class="skill-cloud">${category.skills.map((skill) => tag(skill)).join('')}</div>
        </div>
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
            'Organized by how the tools are used - not by arbitrary proficiency percentages. Select a category to explore the stack.',
        }).replace('<h2>', '<h2 id="skills-title">')}

        <div class="skills-explorer reveal">
          <div class="skill-tabs" role="tablist" aria-label="Skill categories">${tabs}</div>
          <div class="skill-panels">${panels}</div>
        </div>

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

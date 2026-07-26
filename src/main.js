import { App } from './App.js';
import { architecture, projects } from './data/portfolio.js';
import { icon } from './utils/icons.js';
import { tag } from './utils/html.js';

const root = document.querySelector('#app');
root.innerHTML = App();

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function initializeTheme() {
  const toggle = document.querySelector('[data-theme-toggle]');

  const applyTheme = (theme) => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    toggle?.setAttribute('aria-label', `Switch to ${nextTheme} mode`);
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#070A0F' : '#F5F8FC');
  };

  applyTheme(localStorage.getItem('portfolio-theme') || 'dark');
  toggle?.addEventListener('click', () => applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));
}

function initializeMobileMenu() {
  const toggle = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('#mobile-menu');
  const openIcon = document.querySelector('[data-menu-open]');
  const closeIcon = document.querySelector('[data-menu-close]');

  const setOpen = (open) => {
    if (!toggle || !menu) return;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    menu.hidden = !open;
    openIcon.hidden = open;
    closeIcon.hidden = !open;
    document.body.classList.toggle('menu-open', open);
  };

  toggle?.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setOpen(false)));
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1100) setOpen(false);
  });
}

function initializeRevealAnimations() {
  const elements = [...document.querySelectorAll('.reveal')];
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    elements.forEach((element) => element.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -50px' },
  );

  elements.forEach((element) => observer.observe(element));
}

function initializeCounters() {
  const counters = [...document.querySelectorAll('[data-counter]')];

  const setFinal = (element) => {
    const value = Number(element.dataset.counter);
    const decimals = Number(element.dataset.decimals || 0);
    element.textContent = `${value.toFixed(decimals)}${element.dataset.suffix || ''}`;
  };

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    counters.forEach(setFinal);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const element = entry.target;
        const target = Number(element.dataset.counter);
        const decimals = Number(element.dataset.decimals || 0);
        const suffix = element.dataset.suffix || '';
        const start = performance.now();
        const duration = 1300;

        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          element.textContent = `${(target * eased).toFixed(decimals)}${suffix}`;
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
        observer.unobserve(element);
      });
    },
    { threshold: 0.55 },
  );

  counters.forEach((counter) => observer.observe(counter));
}

function initializeSkillTabs() {
  const tabs = [...document.querySelectorAll('[data-skill-tab]')];
  const panels = [...document.querySelectorAll('[data-skill-panel]')];

  const activate = (id, focus = false) => {
    tabs.forEach((tab) => {
      const selected = tab.dataset.skillTab === id;
      tab.classList.toggle('is-active', selected);
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
      if (selected && focus) tab.focus();
    });
    panels.forEach((panel) => {
      const selected = panel.dataset.skillPanel === id;
      panel.classList.toggle('is-active', selected);
      panel.hidden = !selected;
    });
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activate(tab.dataset.skillTab));
    tab.addEventListener('keydown', (event) => {
      if (!['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      let nextIndex = index;
      if (event.key === 'Home') nextIndex = 0;
      else if (event.key === 'End') nextIndex = tabs.length - 1;
      else if (['ArrowRight', 'ArrowDown'].includes(event.key)) nextIndex = (index + 1) % tabs.length;
      else nextIndex = (index - 1 + tabs.length) % tabs.length;
      activate(tabs[nextIndex].dataset.skillTab, true);
    });
  });
}

function initializeAccordions() {
  document.querySelectorAll('[data-accordion-button]').forEach((button) => {
    button.addEventListener('click', () => {
      const panel = document.getElementById(button.getAttribute('aria-controls'));
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!expanded));
      button.closest('.experience-card')?.classList.toggle('is-open', !expanded);
      if (panel) panel.hidden = expanded;
    });
    if (button.getAttribute('aria-expanded') === 'true') button.closest('.experience-card')?.classList.add('is-open');
  });
}

function initializeProjectFilters() {
  const filters = [...document.querySelectorAll('[data-project-filter]')];
  const cards = [...document.querySelectorAll('[data-project-card]')];
  const emptyState = document.querySelector('[data-project-empty]');

  filters.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.projectFilter;
      filters.forEach((candidate) => {
        const active = candidate === button;
        candidate.classList.toggle('is-active', active);
        candidate.setAttribute('aria-pressed', String(active));
      });

      let visibleCount = 0;
      cards.forEach((card) => {
        const visible = filter === 'All' || card.dataset.category === filter;
        card.hidden = !visible;
        if (visible) visibleCount += 1;
      });
      if (emptyState) emptyState.hidden = visibleCount > 0;
    });
  });
}

function renderProjectModal(project) {
  const list = (items) => items.map((item) => `<li>${icon('check', { size: 15 })}<span>${item}</span></li>`).join('');
  const metrics = project.metrics.length
    ? `<div class="modal-metrics">${project.metrics.map((metric) => `<span>${metric}</span>`).join('')}</div>`
    : '';

  const links = [
    project.github
      ? `<a class="button button--secondary" href="${project.github}" target="_blank" rel="noreferrer">GitHub${icon('github', { size: 17 })}</a>`
      : `<span class="button button--secondary button--disabled" aria-disabled="true">[ADD GITHUB LINK]${icon('github', { size: 17 })}</span>`,
    project.demo
      ? `<a class="button button--secondary" href="${project.demo}" target="_blank" rel="noreferrer">Live demo${icon('external', { size: 17 })}</a>`
      : `<span class="button button--secondary button--disabled" aria-disabled="true">[ADD DEMO LINK]${icon('external', { size: 17 })}</span>`,
    project.paper
      ? `<a class="button button--primary" href="${project.paper}" target="_blank" rel="noreferrer">View paper${icon('fileText', { size: 17 })}</a>`
      : '',
  ].join('');

  return `
    <div class="modal-hero">
      <p class="micro-label">${project.eyebrow} · ${project.category}</p>
      <h2 id="modal-title">${project.title}</h2>
      <p>${project.summary}</p>
      ${metrics}
    </div>
    <div class="modal-section">
      <h3>Problem addressed</h3>
      <p>${project.problem}</p>
    </div>
    <div class="modal-columns">
      <div class="modal-section">
        <h3>Approach</h3>
        <ul>${list(project.approach)}</ul>
      </div>
      <div class="modal-section">
        <h3>Outcomes / evidence</h3>
        <ul>${list(project.outcomes)}</ul>
      </div>
    </div>
    <div class="modal-section">
      <h3>Technology and domain tags</h3>
      <div class="project-card__tags">${project.technologies.map((technology) => tag(technology)).join('')}</div>
    </div>
    <div class="modal-note">${icon(project.linkNote.includes('confidential') ? 'lock' : 'info', { size: 18 })}<span>${project.linkNote}</span></div>
    <div class="modal-actions">${links}</div>
  `;
}

function initializeProjectModal() {
  const modal = document.querySelector('[data-project-modal]');
  const dialog = modal?.querySelector('.modal__dialog');
  const content = modal?.querySelector('[data-modal-content]');
  let lastFocused = null;

  const closeModal = () => {
    if (!modal || modal.hidden) return;
    modal.classList.remove('is-open');
    document.body.classList.remove('modal-open');
    window.setTimeout(() => {
      modal.hidden = true;
      content.innerHTML = '';
      lastFocused?.focus();
    }, prefersReducedMotion ? 0 : 180);
  };

  document.querySelectorAll('[data-project-open]').forEach((button) => {
    button.addEventListener('click', () => {
      const project = projects.find((item) => item.id === button.dataset.projectOpen);
      if (!project || !modal || !content) return;
      lastFocused = button;
      content.innerHTML = renderProjectModal(project);
      modal.hidden = false;
      document.body.classList.add('modal-open');
      requestAnimationFrame(() => {
        modal.classList.add('is-open');
        dialog?.focus();
      });
    });
  });

  modal?.querySelectorAll('[data-modal-close]').forEach((button) => button.addEventListener('click', closeModal));
  document.addEventListener('keydown', (event) => {
    if (!modal || modal.hidden) return;
    if (event.key === 'Escape') closeModal();
    if (event.key !== 'Tab') return;

    const focusable = [...modal.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')].filter(
      (element) => !element.hasAttribute('hidden'),
    );
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
}

const architectureDescriptions = {
  sources: 'Source systems establish the context for extraction patterns, refresh strategy, schema controls, lineage, and downstream quality rules.',
  ingestion: 'Orchestration brings source data into the platform through repeatable, configurable, and monitorable ingestion paths.',
  storage: 'Layered storage separates raw retention from cleansed, conformed, and consumption-ready data products.',
  processing: 'SQL, Python, Synapse, and Fabric transform source structures into governed analytical models.',
  quality: 'Reconciliation, schema validation, intrinsic checks, and baselines make trust measurable instead of assumed.',
  analytics: 'Power BI, DAX, and Power Query turn curated models into understandable KPIs and operational views.',
  insights: 'The final layer delivers reliable business signals, decision support, and visible data-health context.',
};

function initializeArchitecture() {
  const nodes = [...document.querySelectorAll('[data-architecture-node]')];
  const detail = document.querySelector('[data-architecture-detail]');

  nodes.forEach((button) => {
    button.addEventListener('click', () => {
      const node = architecture.find((item) => item.id === button.dataset.architectureNode);
      if (!node || !detail) return;
      nodes.forEach((candidate) => {
        const active = candidate === button;
        candidate.classList.toggle('is-active', active);
        candidate.setAttribute('aria-pressed', String(active));
      });
      detail.innerHTML = `
        <div class="architecture-detail__icon">${icon(node.icon, { size: 28 })}</div>
        <div>
          <p class="micro-label">Selected stage</p>
          <h3>${node.label}</h3>
          <div class="architecture-detail__items">${node.items.map((item) => `<span>${item}</span>`).join('')}</div>
        </div>
        <p>${architectureDescriptions[node.id]}</p>
      `;
    });
  });
}

function initializeNavigationState() {
  const header = document.querySelector('[data-header]');
  const progress = document.querySelector('.scroll-progress span');
  const links = [...document.querySelectorAll('[data-section-link]')];
  const sections = links.map((link) => document.getElementById(link.dataset.sectionLink)).filter(Boolean);

  const updateScroll = () => {
    const scrollTop = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) progress.style.transform = `scaleX(${maxScroll > 0 ? scrollTop / maxScroll : 0})`;
    header?.classList.toggle('is-scrolled', scrollTop > 24);
  };

  window.addEventListener('scroll', updateScroll, { passive: true });
  updateScroll();

  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      links.forEach((link) => link.classList.toggle('is-active', link.dataset.sectionLink === visible.target.id));
    },
    { rootMargin: '-25% 0px -60%', threshold: [0.05, 0.2, 0.5] },
  );
  sections.forEach((section) => observer.observe(section));
}

function showToast(message) {
  const toast = document.querySelector('[data-toast]');
  if (!toast) return;
  toast.textContent = message;
  toast.hidden = false;
  requestAnimationFrame(() => toast.classList.add('is-visible'));
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => {
    toast.classList.remove('is-visible');
    window.setTimeout(() => (toast.hidden = true), 180);
  }, 2200);
}

function initializeCopyEmail() {
  document.querySelector('[data-copy-email]')?.addEventListener('click', async (event) => {
    const email = event.currentTarget.dataset.email;
    try {
      await navigator.clipboard.writeText(email);
      showToast('Email copied to clipboard');
    } catch {
      const input = document.createElement('textarea');
      input.value = email;
      input.style.position = 'fixed';
      input.style.opacity = '0';
      document.body.append(input);
      input.select();
      document.execCommand('copy');
      input.remove();
      showToast('Email copied to clipboard');
    }
  });
}

function initializeYear() {
  document.querySelectorAll('[data-current-year]').forEach((element) => {
    element.textContent = new Date().getFullYear();
  });
}

initializeTheme();
initializeMobileMenu();
initializeRevealAnimations();
initializeCounters();
initializeSkillTabs();
initializeAccordions();
initializeProjectFilters();
initializeProjectModal();
initializeArchitecture();
initializeNavigationState();
initializeCopyEmail();
initializeYear();

import { Header } from './components/Header.js';
import { Hero } from './components/Hero.js';
import { About } from './components/About.js';
import { Skills } from './components/Skills.js';
import { Experience } from './components/Experience.js';
import { Projects } from './components/Projects.js';
import { Architecture } from './components/Architecture.js';
import { Publications } from './components/Publications.js';
import { Education } from './components/Education.js';
import { Contact } from './components/Contact.js';
import { Footer } from './components/Footer.js';

export function App() {
  return `
    <a class="skip-link" href="#main-content">Skip to main content</a>
    ${Header()}
    <main id="main-content">
      ${Hero()}
      ${About()}
      ${Skills()}
      ${Experience()}
      ${Projects()}
      ${Architecture()}
      ${Publications()}
      ${Education()}
      ${Contact()}
    </main>
    ${Footer()}
    <div class="toast" role="status" aria-live="polite" data-toast hidden></div>
  `;
}

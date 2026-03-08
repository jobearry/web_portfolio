import { createProjectCard } from './ProjectCard.js';

export function createProjects(): HTMLElement {
  const section = document.createElement('section');
  section.id = 'projects';
  section.className = 'py-12';

  const container = document.createElement('div');
  container.className = 'max-w-6xl mx-auto px-4';

  const header = document.createElement('div');
  const h2 = document.createElement('h2');
  h2.className = 'text-3xl font-bold';
  h2.textContent = 'Recent Projects';
  header.appendChild(h2);

  const grid = document.createElement('div');
  grid.className = 'mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6';

  const projects = [
    { img: 'resources/Frame 1.png', title: 'Calculator App (React, Tailwind)', href: 'https://jb-fem-calc.vercel.app/' },
    { img: 'resources/fem2.jpg', title: 'Advice Generator (React, Tailwind)', href: 'https://jobytech-fem-advice-generator.vercel.app/' },
    { img: 'resources/employemgt.jpg', title: 'Employee Management (Angular)', href: 'https://ng-employee-management.vercel.app/' },
    { img: 'resources/projects (6).png', title: 'Number System Converter', href: 'https://convert-number-system.netlify.app/' },
    { img: 'resources/projects (3).png', title: 'RSQUARED Films', href: 'https://rsquared-films.netlify.app/' }
  ];

  projects.forEach(p => {
    const card = createProjectCard({ imgSrc: p.img, title: p.title, href: p.href });
    grid.appendChild(card);
  });

  container.appendChild(header);
  container.appendChild(grid);
  section.appendChild(container);
  return section;
}

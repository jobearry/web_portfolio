export function createAboutMe(): HTMLElement {
  const section = document.createElement('section');
  section.id = 'about-me';
  section.setAttribute('aria-labelledby', 'about-me-heading');
  section.className = 'py-16';

  const container = document.createElement('div');
  container.className = 'max-w-6xl mx-auto px-4';

  const grid = document.createElement('div');
  grid.className = 'grid grid-cols-1 md:grid-cols-2 gap-8 items-center';

  const left = document.createElement('div');
  left.className = 'relative';
  const h2 = document.createElement('h2');
  h2.id = 'about-me-heading';
  h2.className = 'text-3xl font-bold uppercase';
  h2.textContent = 'About me';
  const p = document.createElement('p');
  p.className = 'mt-4';
  p.textContent = 'I am Jonathan Rodel Golimlim and I am a graduate of Bachelor of Science in Computer Engineering. I am from Quezon City, Philippines and I aspire to be a web developer and designer and to become the best at it as I can. You can contact me for job opportunities, collaborations, or if you just need a friend.';

  left.appendChild(h2);
  left.appendChild(p);

  const right = document.createElement('div');
  right.className = 'text-center';
  const img = document.createElement('img');
  img.src = 'resources/profile-projects.svg';
  img.alt = 'Decorative illustration of projects';
  img.className = 'hidden sm:block h-64 opacity-25';
  img.loading = 'lazy';
  right.appendChild(img);

  grid.appendChild(left);
  grid.appendChild(right);
  container.appendChild(grid);
  section.appendChild(container);
  return section;
}

export type HeroProps = { name: string; role?: string; profileSrc?: string };

export function createHero(props: HeroProps): HTMLElement {
  const section = document.createElement('section');
  section.id = 'home';
  section.setAttribute('aria-label', 'Introduction');
  section.className = 'min-h-screen bg-gray-900 text-white flex items-center';

  const container = document.createElement('div');
  container.className = 'max-w-6xl mx-auto px-4 w-full';

  const inner = document.createElement('div');
  inner.className = 'flex flex-col md:flex-row items-center justify-between h-[80vh]';

  const left = document.createElement('div');
  left.className = 'md:w-1/2 text-center md:text-left';
  const lead = document.createElement('p');
  lead.className = 'uppercase font-bold text-orange-400';
  lead.textContent = 'Hello, I am';
  const h1 = document.createElement('h1');
  h1.className = 'text-4xl md:text-6xl font-bold';
  h1.innerHTML = `<div>${props.name}</div><div class="text-gray-400 text-2xl">${props.role ?? 'Developer'}</div>`;

  left.appendChild(lead);
  left.appendChild(h1);

  const right = document.createElement('div');
  right.className = 'md:w-1/3 text-center mt-6 md:mt-0';
  const img = document.createElement('img');
  img.src = props.profileSrc ?? 'resources/profile-icon.svg';
  img.alt = `Profile photo of ${props.name}`;
  img.loading = 'lazy';
  img.className = 'rounded w-full max-h-96 object-cover';
  right.appendChild(img);

  inner.appendChild(left);
  inner.appendChild(right);
  container.appendChild(inner);
  section.appendChild(container);

  return section;
}

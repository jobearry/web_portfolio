export function createNavbar(): HTMLElement {
  const header = document.createElement('header');

  const nav = document.createElement('nav');
  nav.className = 'w-full bg-gray-900 text-white fixed top-0 left-0 right-0 z-50';

  const container = document.createElement('div');
  container.className = 'max-w-6xl mx-auto px-4';

  const row = document.createElement('div');
  row.className = 'flex items-center justify-between h-16';

  const brand = document.createElement('a');
  brand.href = '#home';
  brand.className = 'flex items-center gap-3';
  const logo = document.createElement('img');
  logo.src = 'resources/thanz-logo.svg';
  logo.alt = 'logo';
  logo.className = 'h-8';
  const brandText = document.createElement('span');
  brandText.className = 'font-bold text-orange-400';
  brandText.textContent = 'Jobearry';
  brand.appendChild(logo);
  brand.appendChild(brandText);

  const toggleBtn = document.createElement('button');
  toggleBtn.setAttribute('aria-expanded', 'false');
  toggleBtn.className = 'md:hidden p-2 rounded border border-gray-700';
  toggleBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>';

  const links = document.createElement('div');
  links.className = 'hidden md:flex space-x-6 items-center';
  const items = [
    ['Home', '#home'],
    ['Projects', '#projects'],
    ['About', '#about-me'],
    ['Contacts', '#contacts'],
  ];
  items.forEach(([text, href]) => {
    const a = document.createElement('a');
    a.className = 'hover:underline';
    a.href = href as string;
    a.textContent = text as string;
    links.appendChild(a);
  });

  toggleBtn.addEventListener('click', () => {
    const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', String(!expanded));
    links.classList.toggle('hidden');
  });

  row.appendChild(brand);
  row.appendChild(toggleBtn);
  row.appendChild(links);
  container.appendChild(row);
  nav.appendChild(container);
  header.appendChild(nav);

  return header;
}

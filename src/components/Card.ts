export interface CardProps {
  title: string;
  description?: string;
  avatarUrl?: string;
}

export function createCard(props: CardProps): HTMLElement {
  const container = document.createElement('div');
  container.className = 'max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white';
  const header = document.createElement('div');
  header.className = 'flex items-center gap-3';
  if (props.avatarUrl) {
    const img = document.createElement('img');
    img.src = props.avatarUrl;
    img.alt = props.title;
    img.className = 'w-12 h-12 rounded-full object-cover';
    header.appendChild(img);
  }
  const title = document.createElement('div');
  title.className = 'font-semibold text-lg';
  title.textContent = props.title;
  header.appendChild(title);
  container.appendChild(header);
  if (props.description) {
    const p = document.createElement('p');
    p.className = 'mt-3 text-sm text-gray-700';
    p.textContent = props.description;
    container.appendChild(p);
  }
  return container;
}

export type ProjectCardProps = {
  imgSrc: string;
  alt?: string;
  title: string;
  href?: string;
};

export function createProjectCard(props: ProjectCardProps): HTMLElement {
  const wrap = document.createElement('div');
  wrap.className = 'bg-white rounded shadow overflow-hidden';

  const img = document.createElement('img');
  img.src = props.imgSrc;
  img.alt = props.alt ?? props.title;
  img.loading = 'lazy';
  img.className = 'w-full h-48 object-cover';

  const body = document.createElement('div');
  body.className = 'p-4 text-center';

  const a = document.createElement('a');
  a.href = props.href ?? '#';
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  a.className = 'text-dark no-underline';
  const h6 = document.createElement('h6');
  h6.className = 'font-semibold';
  h6.textContent = props.title;
  a.appendChild(h6);

  body.appendChild(a);
  wrap.appendChild(img);
  wrap.appendChild(body);
  return wrap;
}

export function createFooter(): HTMLElement {
  const footer = document.createElement('footer');
  footer.className = 'bg-gray-900 text-white py-8';

  const container = document.createElement('div');
  container.className = 'max-w-6xl mx-auto px-4';

  const row = document.createElement('div');
  row.className = 'flex flex-col sm:flex-row justify-between items-start gap-4';

  const left = document.createElement('div');
  left.className = 'text-sm';
  left.innerHTML = `<div>Jonathan Golimlim</div><div>© Jobearry 2025</div><div>Philippines</div><div>Project 6, Quezon City</div><div>+63 916 272 6939</div><div>golimlim2209@gmail.com</div>`;

  const right = document.createElement('div');
  right.className = 'flex gap-2';
  const github = document.createElement('a');
  github.href = 'https://github.com/jobearry';
  github.target = '_blank';
  github.rel = 'noopener noreferrer';
  const gitImg = document.createElement('img');
  gitImg.src = 'resources/Socials/Github.svg';
  gitImg.alt = 'GitHub profile';
  gitImg.className = 'h-6';
  github.appendChild(gitImg);

  const netlify = document.createElement('a');
  netlify.href = 'https://app.netlify.com/teams/sar-gol/overview';
  netlify.target = '_blank';
  netlify.rel = 'noopener noreferrer';
  const netImg = document.createElement('img');
  netImg.src = 'resources/Socials/netlify.svg';
  netImg.alt = 'Netlify profile';
  netImg.className = 'h-6';
  netlify.appendChild(netImg);

  right.appendChild(github);
  right.appendChild(netlify);

  row.appendChild(left);
  row.appendChild(right);
  container.appendChild(row);
  footer.appendChild(container);
  return footer;
}

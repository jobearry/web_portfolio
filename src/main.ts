import './style.css';
import { createAboutMe } from './components/AboutMe';
import { createFooter } from './components/Footer';
import { createHero } from './components/Hero';
import { createNavbarFromTemplate } from './components/Navbar';

const appRoot = document.getElementById('app') || document.body;

const appTemplate = document.createElement('template');
appTemplate.innerHTML = `
	<div id="site" class="min-h-screen flex flex-col">
		<header id="site-header"></header>
		<main id="site-main" class="flex-1"></main>
		<section id="site-about"></section>
		<footer id="site-footer"></footer>
	</div>
`;

export function createAppFromTemplate() {
	const root = appTemplate.content.firstElementChild!.cloneNode(true) as HTMLElement;

	const header = root.querySelector('#site-header') as HTMLElement;
	const main = root.querySelector('#site-main') as HTMLElement;
	const about = root.querySelector('#site-about') as HTMLElement;
	const footer = root.querySelector('#site-footer') as HTMLElement;

	header.appendChild(createNavbarFromTemplate());
	main.appendChild(createHero({ name: 'Jonathan Golimlim', role: 'Fullstack Developer', profileSrc: '/profile-icon.svg' }));
	about.appendChild(createAboutMe());
	footer.appendChild(createFooter());

	return root;
}

const app = createAppFromTemplate();
appRoot.className = '';
appRoot.appendChild(app);
console.log('App mounted via template');

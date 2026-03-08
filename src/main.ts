// Compose page from plain-TS components
import { createNavbar } from './components/Navbar.js';
import { createHero } from './components/Hero.js';
import { createAboutMe } from './components/AboutMe.js';
import { createProjects } from './components/Projects.js';
import { createFooter } from './components/Footer.js';

const app = document.getElementById('app') || document.body;

app.appendChild(createNavbar());
app.appendChild(createHero({ name: 'Jonathan Golimlim', role: 'Developer', profileSrc: 'resources/profile-icon.svg' }));
app.appendChild(createAboutMe());
app.appendChild(createProjects());
app.appendChild(createFooter());

console.log('Components mounted');

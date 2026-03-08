export const navbarHTML = `
  <nav id="nav" class="relative">
    <div class="fixed w-96 h-5 top-10 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
      <div class="backdrop-blur-md rounded-full
        flex items-center justify-center py-2 px-4 border border-gray-600 gap-6 w-fit">

        <div class="md:flex space-x-6 items-center">
          <a href="#home" class="hover:underline">Home</a>
          <a href="#projects" class="hover:underline">Projects</a>
          <a href="#about-me" class="hover:underline">About</a>
        </div>
      </div>
    </div>
  </nav>
`;

export const navbarTemplate = document.createElement('template');
navbarTemplate.innerHTML = `<nav class="relative">${navbarHTML}</nav>`;

export function createNavbarFromTemplate(): HTMLElement {
  return navbarTemplate.content.firstElementChild!.cloneNode(true) as HTMLElement;
}

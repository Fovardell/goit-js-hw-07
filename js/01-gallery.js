import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const markup = galleryItems.map(i => `<li class="gallery__item"><a class="gallery__link" href="${i.original}"><img class="gallery__image" src="${i.preview}" data-source="${i.original}" alt="${i.description}"/></a></li>`)
	.join('');

gallery.innerHTML = markup;

gallery.addEventListener('click', (e) => {
	e.preventDefault();
	if (e.target.className !== "gallery__image") {
		return;
	}


	const instance = basicLightbox.create(`
      <img src="${e.target.dataset.source}">
  `);
	instance.show();


	document.addEventListener('keydown', closeModalWindow);
	function closeModalWindow(evt) {
		if (evt.key !== "Escape") {
			return;
		}
		instance.close();
		document.removeEventListener('keydown', closeModalWindow);
	}
});
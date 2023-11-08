// TODO: Створення і рендер розмітки на підставі масиву даних galleryItems
// і наданого шаблону елемента галереї.
// TODO: Реалізація делегування на ul.gallery і отримання url великого зображення.
// TODO: Підключення скрипту і стилів бібліотеки модального вікна basicLightbox.
// Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані(.min)
// файли бібліотеки.
// TODO: Відкриття модального вікна по кліку на елементі галереї.
// Для цього ознайомся з документацією і прикладами.
// TODO: Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям.
// Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки
//basicLightbox.
// TODO: Модальне вікно зі збільшеним зображенням повинне відкриватися
// виключно при натисканні на саме зображення
//(робіть перевірку на те, куди припав клік користувача, всередині функції,
// що відповідає за відкриття модального вікна).
// TODO:Якщо ви реалізуєте додатковий функціонал у частині закриття модального вікна
// після натискання на клавішу ESC достатньо після перевірки на те,
// що була натиснута саме потрібна клавіша, викликати загальну функцію із закриття модалки
//.Але зверніть увагу – слухач на закриття модального вікна потрібно почистити.
//Простіше кажучи: модалка відкрилася – повісили слухач на закриття клавішею ESC,
// закриваємо модалку – чистимо слухач.Пам‘ять браузера скаже вам за це дякую.
//Обов‘язково використовуйте об’єкт налаштувань, який описаний в документації
// бібліотеки для реалізації додаткового завдання в першій тасці:
//https://github.com/electerious/basicLightbox#options


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

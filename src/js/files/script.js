// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// меню бургер

const html = document.querySelector('html');
document.addEventListener("click", function (e) {

	const targetElement = e.target;
	if (targetElement.closest('.header__icon')) {
		html.classList.toggle('menu-open');
		html.classList.toggle('lock');
	}
	else if (!targetElement.closest('.menu__body')) {
		html.classList.remove('menu-open');
		html.classList.remove('lock');
	}
});


// Табы

const descriptionPageTabTitle = document.querySelectorAll('.description-page__tab-title');

const descriptionPageTabBody = document.querySelectorAll('.description-page__tab-body');

const descriptionPageImages = document.querySelectorAll('.description-page__image');

descriptionPageTabTitle.forEach((element, index) => {
	element.addEventListener("click", (e) => {
		if (!descriptionPageTabTitle[index].closest('._active')) {
			descriptionPageTabTitle[index].classList.add('_active');
			descriptionPageTabBody[index].classList.add('_active');
			descriptionPageImages[index].classList.add('_active');

			descriptionPageTabTitle.forEach((el, ind) => {
				if (ind != index) {
					descriptionPageTabTitle[ind].classList.remove('_active');
					descriptionPageTabBody[ind].classList.remove('_active');
					descriptionPageImages[ind].classList.remove('_active');

				}
			});

		} else {
			descriptionPageTabTitle[index].classList.remove('_active');
		}
	});
});

window.addEventListener('resize', function () {
	if (window.innerWidth <= 768) {
		// 0...768
		descriptionPageImages[0].classList.add('_active');
		descriptionPageImages[1].classList.add('_active');
		descriptionPageImages[2].classList.add('_active');
	} else {
		// 769...Inf
		descriptionPageImages[0].classList.remove('_active');
		descriptionPageImages[1].classList.remove('_active');
		descriptionPageImages[2].classList.remove('_active');
	}
});
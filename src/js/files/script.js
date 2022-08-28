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


// Табы № 1

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


// Табы № 2

const safetyPageTabTitle = document.querySelectorAll('.safety-page__tab-title');

const safetyPageTabBody = document.querySelectorAll('.safety-page__tab-body');

const safetyPageImages = document.querySelectorAll('.safety-page__image');

safetyPageTabTitle.forEach((element, index) => {
	element.addEventListener("click", (e) => {
		if (!safetyPageTabTitle[index].closest('._active')) {
			safetyPageTabTitle[index].classList.add('_active');
			safetyPageTabBody[index].classList.add('_active');
			safetyPageImages[index].classList.add('_active');

			safetyPageTabTitle.forEach((el, ind) => {
				if (ind != index) {
					safetyPageTabTitle[ind].classList.remove('_active');
					safetyPageTabBody[ind].classList.remove('_active');
					safetyPageImages[ind].classList.remove('_active');

				}
			});

		} else {
			safetyPageTabTitle[index].classList.remove('_active');
		}
	});
});

window.addEventListener('resize', function () {
	if (window.innerWidth <= 768) {
		// 0...768
		safetyPageImages[0].classList.add('_active');
		safetyPageImages[1].classList.add('_active');
		safetyPageImages[2].classList.add('_active');
		safetyPageImages[3].classList.add('_active');
	} else {
		// 769...Inf
		safetyPageImages[0].classList.remove('_active');
		safetyPageImages[1].classList.remove('_active');
		safetyPageImages[2].classList.remove('_active');
		safetyPageImages[3].classList.remove('_active');
	}
});


//radiobutton

const radio = document.querySelectorAll('.first-page__radio');

radio.forEach(element => {
	element.addEventListener("click", function (e) {
		if (radio[0].checked) {
			document.body.classList.add('white');
		} else {
			document.body.classList.remove('white');
		}
	});
});

if (radio[0].checked) {
	document.body.classList.add('white');
} else {
	document.body.classList.remove('white');


}

const radio2 = document.querySelectorAll('.set-page__radio');

radio2.forEach(element => {
	element.addEventListener("click", function (e) {
		if (radio2[0].checked) {
			document.body.classList.add('white');
		} else {
			document.body.classList.remove('white');
		}
	});
});

if (radio2[0].checked) {
	document.body.classList.add('white');
} else {
	document.body.classList.remove('white');


}
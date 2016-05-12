ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.9394, 30.3294],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark([59.9386,30.3231], {
            hintContent: 'Магазин мороженого Глейси',
            balloonContent: 'Ждем Вас!'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/pin.png',
            // Размеры метки.
            iconImageSize: [218, 142],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-40, -140]
        });
    
    myMap.geoObjects.add(myPlacemark);
	myMap.behaviors.disable(['scrollZoom']);
		
});

var link = document.querySelector(".leave-feedback-btn");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-close-btn");
var login = popup.querySelector("[name=feedback-name]");
var form = popup.querySelector(".feedback-form");
var email = popup.querySelector("[name=feedback-mail]");
var storage = localStorage.getItem("login");
var overlay = document.querySelector(".modal-overlay");
link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("modal-content-show");
	overlay.classList.add("modal-content-show");
	
    if (storage) {
        login.value = storage;
        email.focus();
    } else {
        login.focus();
    }
 });
close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
	overlay.classList.remove("modal-content-show");
 });
form.addEventListener("submit", function(event) {
    if (!login.value || !email.value) {
        event.preventDefault();
        console.log("Нужно ввести логин и пароль"); 
    } else {
        localStorage.setItem("login", login.value);
    }
});
window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
			overlay.classList.remove("modal-content-show");
        }
    }
});
overlay.addEventListener("click", function(event) {
	if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
			overlay.classList.remove("modal-content-show");
        }
});
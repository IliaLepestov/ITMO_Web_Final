"use strict";
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
        (function(position) {
            document.getElementById('latitude').textContent = position.coords.latitude;
            document.getElementById('longitude').textContent = position.coords.longitude;
        }),
        (function(error) {
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    alert("Пользователь запретил доступ к геолокации.");
                    break;
                case error.POSITION_UNAVAILABLE:
                    alert("Информация о местоположении недоступна.");
                    break;
                case error.TIMEOUT:
                    alert("Запрос на получение местоположения пользователя истек.");
                    break;
                case error.UNKNOWN_ERROR:
                    alert("Произошла неизвестная ошибка.");
                    break;
            }
        })
    );
} else {
    document.getElementById('latitude').textContent = 'Geolocation не поддерживается вашим браузером.';
    document.getElementById('longitude').textContent = '';
}

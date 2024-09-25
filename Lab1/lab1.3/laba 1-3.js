'use strict';
function day(n) {
    if (n % 10 === 1 && n % 100 !== 11) {
        return 'день';
    } else if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) {
        return 'дня';
    } else {
        return 'дней';
    }
}
function message(n) {
    const dayForm = day(n);
    document.getElementById('message').textContent = `До конца вашей учебы остается ${n} ${dayForm}.`;
}
window.onload = function() {
    message(61); 
};
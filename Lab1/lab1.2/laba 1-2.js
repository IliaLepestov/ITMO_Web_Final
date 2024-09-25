'use strict'; 

function createTable() {
    var table = '<table>';

    for (var i = 1; i <= 10; i++) {
        table += '<tr>';
        for (var j = 1; j <= 10; j++) {
            table += `<td>${i * j}</td>`;
        }
        table += '</tr>';
    }
    table += '</table>';
    document.getElementById('table-container').innerHTML = table;
}

// Вызов функции при загрузке страницы
window.onload = createTable;
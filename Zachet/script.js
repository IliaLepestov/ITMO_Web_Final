if (typeof(Storage) === "undefined") {
    alert("Ваш браузер не поддерживает Web Storage. Пожалуйста, обновите браузер.");
} else {
    document.getElementById('saveButton').addEventListener('click', function() {
        const data = document.getElementById('dataInput').value;
        localStorage.setItem('myData', data);
        alert('Данные сохранены!');
    });

    document.getElementById('loadButton').addEventListener('click', function() {
        const data = localStorage.getItem('myData');
        document.getElementById('output').innerText = data ? data : 'Нет сохраненных данных.';
    });
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Форма отправлена!');
    });
    
}

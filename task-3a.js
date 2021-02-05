const passwordInputRef = document.querySelector('input[name="password"]');
const buttonRef = document.querySelector('.send-password');
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

buttonRef.addEventListener('click', () => {
    console.log('passwordInputRef.value: ', passwordInputRef.value);

    if (passwordInputRef.value === ADMIN_PASSWORD) {
        message = 'Добро пожаловать!';
    } else {
        message = 'Доступ запрещен, неверный пароль!';
    }

    alert(message);

});
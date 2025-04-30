// Инициализация Telegram WebApp
const tg = window.Telegram.WebApp;

// Показываем кнопку "Закрыть" в интерфейсе Telegram
tg.MainButton.show();
tg.MainButton.setParams({
    text: "ЗАКРЫТЬ",
    color: "#0088cc"
});

// Обработчик клика по кнопке закрытия
tg.MainButton.onClick(() => {
    tg.close();
});

// Отображаем имя пользователя
document.getElementById('user-name').textContent = tg.initDataUnsafe.user?.first_name || 'пользователь';

// Обработчик кнопки отправки данных
document.getElementById('send-data-btn').addEventListener('click', () => {
    const data = {
        action: 'button_click',
        time: new Date().toISOString(),
        data: 'Вы нажали кнопку'
    };
    
    // Отправляем данные боту
    tg.sendData(JSON.stringify(data));
    
    // Показываем уведомление
    tg.showAlert('Данные отправлены боту!');
});
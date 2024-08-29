document.addEventListener('DOMContentLoaded', function() {
    const data = [
        {"filename": "photo1.jpg", "appName": "WEB-дизайнерство", "description": "Государственный Заказ: Проект Безопасность"},
        {"filename": "photo2.jpg", "appName": "WEB-дизайнерство", "description": "Семейные Узы: Эскиз для Majestic RP"},
        {"filename": "photo3.jpg", "appName": "WEB-дизайнерство", "description": "YouTube Превью: Дизайн, Который Притягивает Внимание"}
    ];

    const gallery = document.getElementById('gallery');

    // Создание строк таблицы
    data.forEach((item, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${String(index + 1).padStart(3, '0')}</td>
            <td>${item.appName}</td>
            <td>${item.description}</td>
            <td><img src="images/${item.filename}" alt="${item.appName}" data-fullsize="images/${item.filename}"></td>
        `;
        gallery.appendChild(tr);
    });

    // Обработчик клика для полноэкранного режима
    document.querySelectorAll('.portfolio-table img').forEach(item => {
        item.addEventListener('click', () => {
            const fullsizeImage = item.getAttribute('data-fullsize');
            const modal = document.getElementById('fullscreenModal');
            const modalImage = document.getElementById('fullscreenImage');

            modalImage.src = fullsizeImage;
            modal.classList.add('active');
            modalImage.style.transform = 'scale(0.8)'; // Начальное значение для анимации
            setTimeout(() => modalImage.style.transform = 'scale(1)', 10); // Плавная анимация
        });
    });

    // Закрытие модального окна при клике
    document.getElementById('fullscreenModal').addEventListener('click', () => {
        document.getElementById('fullscreenModal').classList.remove('active');
        document.getElementById('fullscreenImage').style.transform = 'scale(0.8)';
    });

    document.querySelector('.fullscreen-modal .close').addEventListener('click', () => {
        document.getElementById('fullscreenModal').classList.remove('active');
        document.getElementById('fullscreenImage').style.transform = 'scale(0.8)';
    });
});

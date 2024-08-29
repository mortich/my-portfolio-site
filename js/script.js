// Инициализация EmailJS с вашим Public Key
emailjs.init("y_rUUBsS3veGzVgOc"); // Замените на ваш реальный Public Key

// Обработка формы и отправка данных через EmailJS
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.send("service_8qu8pwr", "template_s7pdz5a", {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            details: document.getElementById('details').value,
            amount: document.getElementById('amount').value
        }).then(function(response) {
            alert("Ваш заказ был отправлен!");
            form.reset();
        }).catch(function(error) {
            console.error("Ошибка отправки:", error); // Выводим ошибку в консоль для отладки
            alert("Не удалось отправить заказ. Попробуйте снова.");
        });
    });

    // Данные для портфолио
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
            <td><img src="images/${item.filename}" class="thumbnail" alt="${item.appName}" /></td>
        `;
        gallery.appendChild(tr);
    });

    // Полноэкранное модальное окно
    const modal = document.getElementById('fullscreenModal');
    const modalImage = document.getElementById('fullscreenImage');
    const closeModal = document.querySelector('.fullscreen-modal .close');

    gallery.addEventListener('click', function(event) {
        if (event.target.classList.contains('thumbnail')) {
            modal.classList.add('active');
            modalImage.src = event.target.src;
        }
    });

    closeModal.addEventListener('click', function() {
        modal.classList.remove('active');
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.remove('active');
        }
    });
});

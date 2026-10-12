
// 1. Данные для фото (массив объектов)
        const photoData = [
  { img: 'img/4.png', title: 'Найди пару', link: 'https://learningapps.org/watch?v=ppw8aga5526' }, { img: 'img/123.jpg', title: 'Викторина', link: 'https://wordwall.net/ru/resource/119604466?wwmethod=link' },
 
];

        // 2. Функция для генерации сетки
        function createGrid() {
            const gridContainer = document.getElementById('photoGrid');

            photoData.forEach(item => {
                // Создаем ссылку (<a>) вместо <div>, чтобы она была кликабельной
                const anchor = document.createElement('a');
                anchor.href = item.link;
                anchor.target = '_blank'; // Открывать в новой вкладке
                anchor.className = 'grid-item';

                // Создаем изображение
                const img = document.createElement('img');
                img.src = item.img;
                img.alt = item.title;

                // Создаем заголовок
                const title = document.createElement('div');
                title.className = 'item-title';
                title.innerText = item.title;

                // Собираем ячейку
                anchor.appendChild(img);
                anchor.appendChild(title);

                // Добавляем в контейнер
                gridContainer.appendChild(anchor);
            });
        }

        // 3. Запускаем функцию
        createGrid();


        
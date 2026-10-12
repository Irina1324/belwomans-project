

// 1. Данные для фото (массив объектов)
        const photoData = [
  { img: 'img/61.jpg', title: 'Полина Потоцкая', link: 'Polly.html' }, { img: 'img/81.jpg', title: 'Татьяна Мариненко', link: 'TatyanaMa.html' },
  { img: 'img/10.jpg', title: 'Алоиза Пашкевич (Тётка)', link: 'tetka.html' }, { img: 'img/16.jpg', title: 'Франциска Урсула Радзивилл', link: 'FrUrsh.html' },
  { img: 'img/4.jpg', title: 'Марина Василевская', link: 'MaryV.html' }, { img: 'img/5.jpg', title: 'Дарья Домрачева', link: 'DarDom.html' }
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


        
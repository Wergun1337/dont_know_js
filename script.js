'use strict';

const booksContainer = document.querySelector('.books');
const books = [...document.querySelectorAll('.book')];


const booksOrder = [
    'Книга 1.',
    'Книга 2.',
    'Книга 3.',
    'Книга 4.',
    'Книга 5.',
    'Книга 6.'
];

booksOrder.forEach((title) => {
    const book = books.find((item) =>
        item.querySelector('h2').textContent.trim().startsWith(title)
    );

    if (book) {
        booksContainer.append(book);
    }
});

// смена фона
document.body.style.backgroundImage = 'url("./image/you-dont-know-js.jpg")';


// Замена заголовка
const book3 = books.find((book) =>
    book.querySelector('h2').textContent.includes('Книга 3.')
);

const book3Title = book3.querySelector('h2 a');

book3Title.textContent = 'Книга 3. this и Прототипы Объектов';


// удаление рекламы
document.querySelector('.adv').remove();


// Восстанавление порядка глав во 2 и 5 книге
const book2 = books.find((book) =>
    book.querySelector('h2').textContent.includes('Книга 2.')
);

const book2List = book2.querySelector('ul');

const book25Order = [
    'Введение',
    'Предисловие',
    'Глава 1:',
    'Глава 2:',
    'Глава 3:',
    'Глава 4:',
    'Глава 5:',
    'Глава 6:',
    'Приложение A:',
    'Приложение B:',
    'Приложение C:',
    'Приложение D:'
];

const book2Chapters = [...book2List.children];

book25Order.forEach((chapter) => {
    const item = book2Chapters.find((li) =>
        li.textContent.trim().startsWith(chapter)
    );

    if (item) {
        book2List.append(item);
    }
});


const book5 = books.find((book) =>
    book.querySelector('h2').textContent.includes('Книга 5.')
);

const book5List = book5.querySelector('ul');


const book5Chapters = [...book5List.children];

book25Order.forEach((chapter) => {
    const item = book5Chapters.find((li) =>
        li.textContent.trim().startsWith(chapter)
    );

    if (item) {
        book5List.append(item);
    }
});


// Добавление главы в книгу 6
const book6 = books.find((book) =>
    book.querySelector('h2').textContent.includes('Книга 6.')
);

const book6List = book6.querySelector('ul');

const newChapter = document.createElement('li');

newChapter.textContent = 'Глава 8: За пределами ES6';

const appendixA = [...book6List.children].find((li) =>
    li.textContent.includes('Приложение A:')
);

book6List.insertBefore(newChapter, appendixA);
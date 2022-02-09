'use strict'

const listBooks = document.querySelectorAll('.books')
const books = document.querySelectorAll('.book')
const bookHeader = document.querySelectorAll('h2 > a')
const bookChapters = document.querySelectorAll('ul')
const bookChapter2 = bookChapters[0].querySelectorAll('li')
const bookChapter5 = bookChapters[5].querySelectorAll('li')
const bookChapter6 = bookChapters[2].querySelectorAll('li')
const adv = document.querySelector('.adv')

// Сортировка книг в правильном порядке
for (let i = 0; i < books.length; i++) {
    books[i].remove()
}
listBooks[0].append(books[1], books[0], books[4], books[3], books[5], books[2])

// Изменение фоновой картинки
document.body.style.backgroundImage = "url(./image/you-dont-know-js.jpg)"

// Изменение заголовка 3 книги
bookHeader[4].innerText = "Книга 3. this и Прототипы Объектов"

// Сортировка глав 2 и 5 книг
for (let i = 0; i < bookChapter2.length; i++) {
    bookChapter2[i].remove()
}
for (let i = 0; i < bookChapter5.length; i++) {
    bookChapter5[i].remove()
}
bookChapters[0].append(bookChapter2[1], bookChapter2[0], bookChapter2[3], bookChapter2[6], bookChapter2[8], bookChapter2[4], bookChapter2[5], bookChapter2[7], bookChapter2[9], bookChapter2[2], bookChapter2[10])

bookChapters[5].append(bookChapter5[1], bookChapter5[0], bookChapter5[9], bookChapter5[3], bookChapter5[4], bookChapter5[2], bookChapter5[6], bookChapter5[7], bookChapter5[5], bookChapter5[8], bookChapter5[10])

// Добавление новой главы в 6 книгу
let li = document.createElement('li')
li.textContent = 'Глава 8: За пределами ES6'
bookChapter6[9].replaceWith(li)
bookChapters[2].append(bookChapter6[9])

// Удаление рекламы
adv.style.display = "none"
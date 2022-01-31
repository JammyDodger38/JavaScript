'use srtict';
// Переменные
let title = "Lesson3"
let screens = "Простые, Сложные, Интерактивные"
let screenPrice = 121
let rollback = 18
let fullPrice = 500000
let adaptive = true
let service1, service2 = " ";
let servicePrice1, servicePrice2 = 0;
let servicePercentPrice = 0;

title = prompt("Как называется наш проект?", "Урок 3");
screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
screenPrice = parseInt(prompt("Сколько буде стоить данная работа?", "12000"));
adaptive = confirm("Нужен ли адаптив на сайте?");

service1 = prompt("Какой дополнительный тип услуги нужен?");
servicePrice1 = parseInt(prompt("Сколько это будет стоить?"));
service2 = prompt("Какой дополнительный тип услуги нужен?");
servicePrice2 = parseInt(prompt("Сколько это будет стоить?"));

fullPrice = screenPrice + servicePrice1 + servicePrice2;

if (fullPrice > 30000 || fullPrice == 30000){
    alert("Даем скидку в 10%");
    fullPrice -= fullPrice * 0.1;
} else if(fullPrice > 15000 && fullPrice < 30000 || fullPrice == 15000){
    alert("Даем скидку в 5%");
    fullPrice -= fullPrice * 0.05;
} else if (fullPrice < 15000 && fullPrice > 0 || fullPrice == 0){
    alert("Скидка не предусмотрена");
} else {
    alert("Что-то пошло не так");
}

servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback/100)));
console.log(servicePercentPrice);
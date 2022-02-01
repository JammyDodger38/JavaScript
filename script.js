'use srtict';
// Переменные
let title = "Lesson4"
let screens = "Простые, Сложные, Интерактивные"
let screenPrice = 121
let rollback = 18
let fullPrice = 500000
let adaptive = true
let service1, service2 = " ";
let servicePrice1, servicePrice2 = 0;
let servicePercentPrice = 0;
let allServicePrices = 0;

title = prompt("Как называется наш проект?", "Урок 4");
screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
screenPrice = parseInt(prompt("Сколько буде стоить данная работа?", "12000"));
adaptive = confirm("Нужен ли адаптив на сайте?");
service1 = prompt("Какой дополнительный тип услуги нужен?");
servicePrice1 = parseInt(prompt("Сколько это будет стоить?"));
service2 = prompt("Какой дополнительный тип услуги нужен?");
servicePrice2 = parseInt(prompt("Сколько это будет стоить?"));

const showTypeOf = function(variable) {
    console.log(variable, typeof variable);
}

const getRollbackMessage = function (price) {
    if (price >= 30000){
        return "Даем скидку в 10%";
    } else if(price >= 15000 && price < 30000){
        return "Даем скидку в 5%"
    } else if (price < 15000 && price >= 0){
        return "Скидка не предусмотрена"
    } else {
        return "Что-то пошло не так"
    }
}

const getAllServicePrices = function (srvPrice1, srvPrice2) {
    return srvPrice1 + srvPrice2;
}

function getFullPrice (scrPrice, allSrvsPrice) {
    return scrPrice + allSrvsPrice;
}

const getTitle = function (title) {
    title = title.trim();
    title = title.toLowerCase();
    return title[0].toUpperCase() + title.substring(1);
}
title = getTitle(title);

const getServicePercentPrices = function () {
    allServicePrices = getAllServicePrices (servicePrice1, servicePrice2);
    fullPrice = getFullPrice(screenPrice, allServicePrices)
    return servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback/100)))
}

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(screens);
console.log(getRollbackMessage(fullPrice));
console.log(getServicePercentPrices(fullPrice, rollback));
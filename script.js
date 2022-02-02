'use srtict';

let title
let screens
let screenPrice
let adaptive
let rollback = 10
let allServicePrices
let fullPrice
let servicePercentPrice
let service1
let service2
let servicePrice

const isNumber = function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}

const asking = function () {
    title = prompt("Как называется наш проект?", "Калькулятор верстки")
    screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные")

    do {
        screenPrice = prompt("Сколько будет стоить данная работа?")
    } while (!isNumber(screenPrice))
    
    adaptive = confirm("Нужен ли адаптив на сайте?")
}

const getAllServicePrices = function () {
    let sum = 0

    for (let i = 0; i < 2; i++) {

        if(i === 0) {
            service1 = prompt("Какой дополнительный тип услуги нужен?")
        } else if (i === 1) {
            service2 = prompt("Какой дополнительный тип услуги нужен?")
        }

        do {
            servicePrice = prompt("Сколько будет стоить данная работа?")
        } while (!isNumber(servicePrice))

        sum += +servicePrice
    }

    return sum
}

const showTypeOf = function(variable) {
    console.log(variable, typeof variable);
}

const getFullPrice = function () {
    return +screenPrice + +allServicePrices
}

const getServicePercentPrice = function () {
    return fullPrice - (fullPrice * (rollback / 100))
}

const getTitle = function () {
    
    return title.trim()[0].toUpperCase() + title.trim().substring(1).toLowerCase()
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

asking()
allServicePrices = getAllServicePrices()
fullPrice = getFullPrice()
servicePercentPrice = getServicePercentPrice()
title = getTitle()

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log("allServicePrices", allServicePrices);

console.log(screens);
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);

console.log("Стоимость верстки экранов " + screenPrice + " рублей. Стоимость разработки сайта " + fullPrice + " рублей.");
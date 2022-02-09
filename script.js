'use strict'

let titlePage = document.getElementsByTagName('h1').item
let buttonPage = document.getElementsByClassName('handler_btn')
let buttonPlus = document.querySelector('.screen-btn')
let otherItemsPercent = document.querySelectorAll('.other-items.percent')
let otherItemsNumber = document.querySelectorAll('.other-items.number')
let range = document.querySelector('.rollback>[type="range"]')
let inputs = document.getElementsByClassName('.total-input').item
let screens = document.querySelectorAll(".screen")

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    services: {},

    isNumber: function(num) {
        return !isNaN(parseFloat(num)) && isFinite(num)
    },

    asking: function () {
        do {
            appData.title = prompt("Как называется ваш проект?", "Калькулятор верстки")
        } while (isFinite(appData.title))
        

        for (let i = 0; i < 2; i++) {
            let name
            do {
                name = prompt("Какие типы экранов нужно разработать?")
            } while (isFinite(name))

            let price = 0

            do {
                price = prompt("Сколько будет стоить данная работа?")
            } while (!appData.isNumber(price))

            appData.screens.push({id: i, name: name, price: price})
        }

        

        for (let i = 0; i < 2; i++) {
            let name
            do {
                name = prompt("Какой дополнительный тип услуги нужен?")
            } while (isFinite(name))

            let price = 0
            
            do {
                price = prompt("Сколько будет стоить данная работа?")
            } while (!appData.isNumber(price))
            
            appData.services[name + " - " + (i+1)] = +price
        }
        
        appData.adaptive = confirm("Нужен ли адаптив на сайте?")
    },
    
    addPrices: function() {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price
        }

        for (let key in appData.services) {
            appData.allServicePrices += appData.services[key]
        }
    },

    getFullPrice: function () {
        appData.fullPrice = +appData.screenPrice + +appData.allServicePrices
    },
    
    getServicePercentPrice: function () {
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
    },
    
    getTitle: function () {
        
        appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substring(1).toLowerCase()
    },
    
    getRollbackMessage: function (price) {
        if (price >= 30000){
            return "Даем скидку в 10%";
        } else if(price >= 15000 && price < 30000){
            return "Даем скидку в 5%"
        } else if (price < 15000 && price >= 0){
            return "Скидка не предусмотрена"
        } else {
            return "Что-то пошло не так"
        }
    },

    logger: function() {
        console.log(appData.services);
        console.log(appData.screens);
        console.log(appData.getRollbackMessage(appData.fullPrice));
        console.log("Стоимость разработки сайта " + appData.fullPrice + " рублей.");
        console.log(appData.servicePercentPrice);

        console.log("Все свойства и методы:");
        for (let key in appData) {
            console.log(key);
        }
    },

    start: function () {
        appData.asking()
        appData.addPrices()
        appData.getFullPrice()
        appData.getServicePercentPrice()
        appData.getTitle()

        appData.logger()
    }
}

// appData.start()
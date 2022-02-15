'use strict'

const title = document.getElementsByTagName('h1')[0]
const buttonPlus = document.querySelector('.screen-btn')
const otherItemsPercent = document.querySelectorAll('.other-items.percent')
const otherItemsNumber = document.querySelectorAll('.other-items.number')
const checkBoxes = document.querySelectorAll('.other-items')

const inputRange = document.querySelector('.rollback input')
const inputRangeValue = document.querySelector('.rollback .range-value')

const startBtn = document.getElementsByClassName('handler_btn')[0]
const resetBtn = document.getElementsByClassName('handler_btn')[1]

const total = document.querySelectorAll('.total-input')[0]
const totalCount = document.querySelectorAll('.total-input')[1]
const totalCountOther = document.querySelectorAll('.total-input')[2]
const fullTotalCount = document.querySelectorAll('.total-input')[3]
const totalCountRollback = document.querySelectorAll('.total-input')[4]

let screens = document.querySelectorAll(".screen")

const appData = {
    title: '',
    screens: [],
    screenCount: 0,
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    servicesPercent: {},
    servicesNumber: {},

    init: function() {
        appData.addTitle()

        startBtn.addEventListener('click', appData.start)
        buttonPlus.addEventListener('click', appData.addScreenBlock)
        inputRange.addEventListener('input', function () {
            let k = 0
            let screensCheck = document.querySelectorAll(".screen")
            screensCheck.forEach(function(screen) {
                const select = screen.querySelector('select')
                const input = screen.querySelector('input')
                const selectName = select.options[select.selectedIndex].textContent

                if (selectName == "Тип экранов" || input.value == '' || input.value == '0') {
                    k++
                } 
            })
            
            if(k == 0) {
                inputRangeValue.textContent = +inputRange.value + '%'
                appData.rollback = +inputRange.value
                appData.servicePercentPrice = Math.round(appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)))
                totalCountRollback.value = appData.servicePercentPrice
            } else {
                totalCountRollback.value = 0
            }
        })

    },
    addTitle: function() {
        document.title = title.textContent
    },

    start: function () {
        let k = 0
        let screensCheck = document.querySelectorAll(".screen")
        screensCheck.forEach(function(screen) {
            const select = screen.querySelector('select')
            const input = screen.querySelector('input')
            const selectName = select.options[select.selectedIndex].textContent

            if (selectName == "Тип экранов" || input.value == '' || input.value == '0') {
                k++
            } 
        })
        
        if(k == 0) {
            appData.screens = []
            appData.screenCount = 0
            appData.screenPrice = 0
            appData.adaptive = true
            appData.servicePricesPercent = 0
            appData.servicePricesNumber = 0
            appData.fullPrice = 0
            appData.servicePercentPrice = 0
            appData.servicesPercent = {}
            appData.servicesNumber = {}

            appData.addScreens()
            appData.addServices()
            appData.addPrices()

            // appData.logger()
            appData.showResult()
        } else {
            total.value = 0
            totalCount.value = 0
            totalCountOther.value = 0
            fullTotalCount.value = 0
            totalCountRollback.value = 0
        }
    },

    showResult: function() {
        total.value = appData.screenPrice
        totalCount.value = +appData.screenCount
        totalCountOther.value = appData.servicePricesNumber + appData.servicePricesPercent
        fullTotalCount.value = appData.fullPrice
        totalCountRollback.value = appData.servicePercentPrice
    },

    addScreens: function() {
        screens = document.querySelectorAll(".screen")
        screens.forEach(function(screen, index) {
            const select = screen.querySelector('select')
            const input = screen.querySelector('input')
            const selectName = select.options[select.selectedIndex].textContent
            
            appData.screens.push({
                id: index, 
                name: selectName, 
                price: +select.value * +input.value,
                count: +input.value
            })
        })
    },

    addServices: function() {
        otherItemsPercent.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')

            if (check.checked) {
                appData.servicesPercent[label.textContent] = +input.value
            }
        })

        otherItemsNumber.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')

            if (check.checked) {
                appData.servicesNumber[label.textContent] = +input.value
            }
        })
    },

    addScreenBlock: function() {
        screens = document.querySelectorAll(".screen")
        const cloneScreen = screens[0].cloneNode(true)
        
        screens[screens.length - 1].after(cloneScreen)
    },

    addPrices: function() {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price
            appData.screenCount += +screen.count
        }

        for (let key in appData.servicesNumber) {
            appData.servicePricesNumber += appData.servicesNumber[key]
        }

        for (let key in appData.servicesPercent) {
            appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100)
        }

        appData.fullPrice = +appData.screenPrice + +appData.servicePricesPercent + +appData.servicePricesNumber

        appData.servicePercentPrice = Math.round(appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)))
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
    }
}

appData.init()
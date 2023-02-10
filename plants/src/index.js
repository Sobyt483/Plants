console.log("verstka validnaya 10\nverstka semanticheskaya 20\nsootvestvyet makety 48\ncss trebovania vipolneni 12\ninteraktivnos 20\nitog 110");
console.log("Verstka sootvetstvyen makete dlya tablet i mobile 48\nnet polosi gorizontalnoi prokrutki 15\nadaptivnoe menu 22\nitog 85");
console.log('Vse trebovania vipolneni: 125');
//burger
const menuBtn = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.nav');
const main = document.querySelector('main');
//accordion
const priceButtons = document.querySelectorAll('.price-choose-button')
const priceAccordion = document.querySelectorAll('.price-choose-accordion')
const headerAccordion = document.querySelectorAll('.price-choose-text')
const svg = document.querySelectorAll('.button-svg')
//blur
const serviceButtons = document.querySelectorAll('.service-button')
const gardenButton = document.querySelector('.garden-button')
const lawnButton = document.querySelector('.lawn-button')
const plantButton = document.querySelector('.planting-button')
const figure = document.querySelectorAll('.figure')
const gardensFigure = document.querySelectorAll('.gardens')
const lawnFigure = document.querySelectorAll('.lawn')
const plantingFigure = document.querySelectorAll('.planting')
//contact
const contactButton = document.querySelector('.contacts-choose-button')
const contactChooseContainer = document.querySelector('.contacts-choose-container')
const contactChooseMenu = document.querySelector('.contact-choose-menu')
const contactChooseItem = document.querySelectorAll('.contact-item-choose')
const underLine = document.querySelectorAll('.contact-item-underline')
const selectedCityContainer = document.querySelector('.selected-city-container')
const city = document.querySelector('.city-change')
const phone = document.querySelector('.phone-change')
const adress = document.querySelector('.adress-change')
const chooseCity = document.querySelector('.contacts-choose-text')
const callUsButton = document.querySelector('.call-us-button')


main.addEventListener('click', function(){
    menuBtn.classList.remove('active');
    navMenu.classList.remove('active');
})
menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
})
navMenu.addEventListener('click', function(){
    menuBtn.classList.remove('active');
    navMenu.classList.remove('active');
})

priceButtons.forEach((button, i) => {
    priceButtons[i].addEventListener('click', function(e){
        e.preventDefault()
        let index = i
        priceButtons.forEach((button, i) => {
            if (index !== i){
                button.classList.remove('active')
                priceAccordion[i].classList.remove('active')
                headerAccordion[i].classList.remove('active')
                svg[i].classList.remove('active')   
            }
        })
        button.classList.toggle('active')
        priceAccordion[i].classList.toggle('active')
        headerAccordion[i].classList.toggle('active')
        svg[i].classList.toggle('active')
    })
})

gardenButton.addEventListener('click' , function(e){
    if (lawnButton.classList.contains('active')&&plantButton.classList.contains('active')){
        e.preventDefault()
    }else {
        e.preventDefault()
        gardenButton.classList.toggle('active')
        figure.forEach((x) => {
            x.classList.add('blur')
            let isTrue = false
            serviceButtons.forEach((b) => {
                if (b.classList.contains('active')) {
                    isTrue = true
                }
            })
            if (!isTrue === true){
                x.classList.remove('blur')
            }
        })
        gardensFigure.forEach((x) => x.classList.toggle('active'))
    }
})
lawnButton.addEventListener('click' , function(e){
    if (gardenButton.classList.contains('active')&&plantButton.classList.contains('active')){
        e.preventDefault()
    }else {
        e.preventDefault()
        lawnButton.classList.toggle('active')
        figure.forEach((x) => {
            x.classList.add('blur')
            let isTrue = false
            serviceButtons.forEach((b) => {
                if (b.classList.contains('active')) {
                    isTrue = true
                }
            })
            if (!isTrue === true){
                x.classList.remove('blur')
            }
        })
        lawnFigure.forEach((x) => x.classList.toggle('active'))
    }
})
plantButton.addEventListener('click' , function(e){
    if (gardenButton.classList.contains('active')&&lawnButton.classList.contains('active')){
        e.preventDefault()
    }else {
        e.preventDefault()
        plantButton.classList.toggle('active')
        figure.forEach((x) => {
            x.classList.add('blur')
            let isTrue = false
            serviceButtons.forEach((b) => {
                if (b.classList.contains('active')) {
                    isTrue = true
                }
            })
            if (!isTrue === true){
                x.classList.remove('blur')
            }
        })
        plantingFigure.forEach((x) => x.classList.toggle('active'))
    }
})

contactButton.addEventListener('click', function(e){
    e.preventDefault()
    contactButton.classList.toggle('active')
    contactChooseContainer.classList.toggle('active')
    contactChooseMenu.classList.toggle('active')
})
contactChooseItem.forEach((item, i) =>{
    item.addEventListener('mouseenter', function(e){
        underLine[i].classList.add('active')
    })
    item.addEventListener('mouseleave', function(e){
        underLine[i].classList.remove('active')
    })
    item.addEventListener('click', function(e){
        selectedCityContainer.classList.add('active')
        document.querySelector('.contacts-png-container').classList.add('active')
        document.querySelector('.contact-choose-cont').classList.add('active')
        contactButton.classList.remove('active')
        contactChooseMenu.classList.remove('active')
        contactChooseContainer.classList.add('green')
        chooseCity.classList.add('active')
        if (i === 0){
            callUsButton.setAttribute('href', 'tel: +1 585 393 0001')
            chooseCity.innerHTML = 'Canandaigua, NY'
            city.innerHTML = 'Canandaigua, NY'
            phone.innerHTML = '+1 585 393 0001'
            adress.innerHTML = '151 Charlotte Street'
        }else if (i === 1){
            callUsButton.setAttribute('href', 'tel: +1 212 456 0002')
            chooseCity.innerHTML = 'New York City'
            city.innerHTML = 'New York City'
            phone.innerHTML = '+1 212 456 0002'
            adress.innerHTML = '9 East 91st Street'
        }else if (i === 2){
            callUsButton.setAttribute('href', 'tel: +1 914 678 0003')
            chooseCity.innerHTML = 'Yonkers, NY'
            city.innerHTML = 'Yonkers, NY'
            phone.innerHTML = '+1 914 678 0003'
            adress.innerHTML = '511 Warburton Ave'
        }else {
            callUsButton.setAttribute('href', 'tel: +1 315 908 0004')
            chooseCity.innerHTML = 'Sherrill, NY'
            city.innerHTML = 'Sherrill, NY'
            phone.innerHTML = '+1 315 908 0004'
            adress.innerHTML = '14 WEST Noyes BLVD'
        }
    })
})
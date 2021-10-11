"use strict"

const headerTop = document.querySelector('.header__top');
const burgerMenu = document.querySelector('.menu-burger');
const dateItem = document.querySelectorAll('.date__item');
const selectTrigger = document.querySelectorAll('.select__trigger');
const schemaSeats = document.querySelector('.schema__seats');
const totalPrice = document.querySelector('.order__total-price');
const orderButton = document.querySelector('.order__button');

const TICKET_PRICE = 250;

burgerMenu.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('menu-burger--active');
    headerTop.classList.toggle('header__top--active');

    if (headerTop.classList.contains('header__top--active')) {
        document.body.style.overflowY = 'hidden';
    } else {
        document.body.style.overflowY = 'auto';

    }
    console.log(document.body)
})


dateItem.forEach((item) => {
    item.addEventListener('click', (e) => {
        dateItem.forEach((elem) => {
            elem.classList.remove('date__item--active')
        })
        e.currentTarget.classList.toggle('date__item--active');
    })
})

selectTrigger.forEach((elem) => {
    elem.addEventListener('click', (e) => {
        const activeValue = e.currentTarget.children[0];
        const arrow = e.currentTarget.children[1];
        const selectOptions = e.currentTarget.parentElement.children[1];

        selectOptions.classList.toggle('select__options--active');
        arrow.classList.toggle('select__arrow--active');
        
        for (let item of selectOptions.children) {
            item.addEventListener('click', (e) => {
                console.log(e.currentTarget)
                console.log(activeValue)
                activeValue.innerText = e.currentTarget.innerText;
                selectOptions.classList.remove('select__options--active');
				arrow.classList.remove('select__arrow--active');
            })
        }
    });
})

schemaSeats.addEventListener('click', (e) => {
    const seat = e.target.closest('.schema__seats-item');
    
    if (seat) {
        if (!seat.classList.contains('schema__seats-item--booked')) {
            seat.classList.toggle('schema__seats-item--selected');
        }
    }
    

    let selectedSeats = document.querySelectorAll('.schema__seats-item--selected').length;

    totalPrice.textContent = selectedSeats *  TICKET_PRICE;
    
})

orderButton.addEventListener('click', () => {
    const selectedSeats = document.querySelectorAll('.schema__seats-item--selected');

    selectedSeats.forEach((seat) => {
        seat.classList.remove('schema__seats-item--selected');
        seat.classList.add('schema__seats-item--booked');
        totalPrice.textContent = 0;
    })
        alert('Оплата прошла успешно');

})

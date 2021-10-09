"use strict"

const dateItem = document.querySelectorAll('.date__item');
const selectTrigger = document.querySelectorAll('.select__trigger');


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

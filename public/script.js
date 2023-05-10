//-------------------- PAYMENT BTN --------------------//
let paymentBtn = document.querySelector('.order__summary__payment');
paymentBtn.addEventListener('mouseover', () => {
    paymentBtn.classList.add('hoverOpacity');
})

paymentBtn.addEventListener('mouseout', () => {
    paymentBtn.classList.remove('hoverOpacity');
})

//-------------------- CHANGE BTN --------------------//
let changeBtn = document.querySelector('.order__summary__change__button button');
changeBtn.addEventListener('mouseover', () => {
    changeBtn.classList.add('hoverOpacity');
})

changeBtn.addEventListener('mouseout', () => {
    changeBtn.classList.remove('hoverOpacity');
})

//-------------------- CANCEL BTN --------------------//
let cancelBtn = document.querySelector('.order__summary__cancel');
cancelBtn.addEventListener('mouseover', () => {
    cancelBtn.classList.add('hoverColor');
})

cancelBtn.addEventListener('mouseout', () => {
    cancelBtn.classList.remove('hoverColor');
})


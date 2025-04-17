document.addEventListener('DOMContentLoaded', () => {

const form = document.querySelector('#booking-form');
const fName = document.querySelector('#name');
const date = document.querySelector('#date');
const time = document.querySelector('#time');
const participants = document.querySelector('#participants');
const button = document.querySelector('button');
const nameError = document.querySelector('#name-error')
const timeError = document.querySelector('#time-error')

const stringRegex = /^[a-zA-Z]+$/

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if(fName.value.trim().length < 3 || !stringRegex.test(fName.value.trim())){
        nameError.style.display = "block"
    }
    if(time.value.slice(0, 2) < 9 || time.value.slice(0, 2) > 18){
        timeError.style.display = "block"
    }
    
    
  });



})
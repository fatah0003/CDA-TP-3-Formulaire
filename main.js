document.addEventListener('DOMContentLoaded', () => {

const form = document.querySelector('#booking-form');
const fName = document.querySelector('#name');
const date = document.querySelector('#date');
const time = document.querySelector('#time');
const participants = document.querySelector('#participants');
const button = document.querySelector('button');
const nameError = document.querySelector('#name-error')
const timeError = document.querySelector('#time-error')
const participantsError = document.querySelector('#participants-error')
const dateError = document.querySelector('#date-error')
const reservations = []
const stringRegex = /^[a-zA-Z]+$/

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if(fName.value.trim().length < 3 || !stringRegex.test(fName.value.trim())){
        nameError.style.display = "block"
    }
    if(time.value.slice(0, 2) < 9 || time.value.slice(0, 2) > 18){
        timeError.style.display = "block"
    }
    if(participants.value < 1 || participants.value > 10){
        participantsError.style.display = "block"
    }
    reservations.forEach(element => {
        if(element.date === date.value && element.time === time.value){
        dateError.style.display = "block"
            
        }
        
    });
    
    if(form){
        reservations.push(
                {
                  name: fName.value,
                  date: date.value,
                  time: time.value,
                  participants: parseInt(participants.value, 10)
                }
        )
        console.log(reservations);
        
    }
  });



})
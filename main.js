document.addEventListener('DOMContentLoaded', () => {

const form = document.querySelector('#booking-form');
const fName = document.querySelector('#name');
const dateReservation = document.querySelector('#date');
const dateReservationError = document.querySelector('#date-reservation-error');
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

    // Cacher les messages d'erreurs
    nameError.style.display = "none";
    timeError.style.display = "none";
    participantsError.style.display = "none";
    dateError.style.display = "none";
    dateReservationError.style.display = "none"

    let isValid = true;
    if(fName.value.trim().length < 3 || !stringRegex.test(fName.value.trim())){
        nameError.style.display = "block"
        isValid = false; // pour empecher d'enregestrer le reservation
    }
    if(time.value.slice(0, 2) < 9 || time.value.slice(0, 2) > 18){
        timeError.style.display = "block"
    isValid = false;
    }
    if(participants.value < 1 || participants.value > 10){
        participantsError.style.display = "block"
        isValid = false;
    }
    reservations.forEach(element => {
        if(element.dateReservation === dateReservation.value && element.time === time.value){
        dateError.style.display = "block"
        isValid = false;
            
        }
        
    })
    const date = new Date(dateReservation.value);
    if(date <= Date.now()){
        dateReservationError.style.display = "block"
        isValid = false;
        
    }
    
        if(isValid){
            reservations.push(
                {
                  name: fName.value,
                  dateReservation: dateReservation.value,
                  time: time.value,
                  participants: parseInt(participants.value, 10)
                }
        )
        console.log(reservations)
        
        
        }else {
            console.log("Formulaire invalide, réservation non ajoutée");
            
        }
  });



})
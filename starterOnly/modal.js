function editNav() {
  var x = document.getElementById("myTopnav");
  const icon = document.getElementsByClassName("icon");

  if (x.className === "topnav") {
    x.className += " responsive";
    icon[0].style.color = "white";
  } else {
    x.className = "topnav";
    icon[0].style.color = "#ff0000";
  }

}



// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCross = document.getElementsByClassName("close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
function closeModal() {
  modalbg.style.display = "none";
};
modalCross[0].addEventListener ("click", closeModal);



const form = document.getElementById ('form');
const firstName = document.getElementById ('first');
const lastName = document.getElementById ('last');
const eMail = document.getElementById ('email');
const birthDate = document.getElementById ('birthdate');
const quantityTournament = document.getElementById ('quantity');

const loc1 = document.getElementById ('location1');
const loc2 = document.getElementById ('location2');
const loc3 = document.getElementById ('location3');
const loc4 = document.getElementById ('location4');
const loc5 = document.getElementById ('location5');
const loc6 = document.getElementById ('location6');

const dateFormat = /^\d{2}[./-]\d{2}[./-]\d{4}$/;
const numbers = /^[0-9]+$/;

const validation = document.getElementById ('checkbox1')

const errorFirst = document.getElementById ('error-first');
const errorLast = document.getElementById ('error-last');
const errorMail = document.getElementById ('error-mail');
const errorBirth = document.getElementById ('error-birth');
const errorQuantity = document.getElementById ('error-quantity');
const errorCity = document.getElementById ('error-city');
const errorValidation = document.getElementById ('error-validation');

const confirmation = document.getElementById ('confirmation');
const confirmationCloseBtn = document.getElementsByClassName('btn-close');

const FormData = document.getElementsByClassName('formData');

form.addEventListener('submit', (e) => {
  e.preventDefault();
})

function validate () {
  let firstChecked;
  let lastChecked;
  let mailChecked;
  let birthChecked;
  let tournamentChecked;
  let radioChecked;
  let conditionsChecked;

  console.log(birthDate.value)

  if (!firstName.value.match(/(.*[a-z]){2}/i) || firstName.value == ' ' || firstName.value == null || firstName.value.length < 2) {
    errorFirst.innerText = 'At least two character require.';
    errorFirst.style.color = 'red';
    errorFirst.style.fontSize = '0.8rem';
    firstName.style.border = 'solid red 2px';
  } else {
    firstChecked = true;
  };

    if (!lastName.value.match(/(.*[a-z]){2}/i) || lastName.value == ' ' || lastName.value == null || lastName.value.length < 2) { 
      errorLast.innerText = 'At least two character require.';
      errorLast.style.color = 'red';
      errorLast.style.fontSize = '0.8rem';
      lastName.style.border = 'solid red 2px';      
  }  else {
    errorLast.style.display = 'none';
    lastName.style.border = 'none';
    lastChecked = true;
  };

    if (!/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/.test(eMail.value)) { 
      errorMail.innerText = 'Please enter a valid email address';
      errorMail.style.color = 'red';
      errorMail.style.fontSize = '0.8rem';
      eMail.style.border = 'solid red 2px';
  } else {
    errorMail.style.display = 'none';
    eMail.style.border = 'none';
    mailChecked = true;
  };

  if (!birthDate.value.match(/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/)) { 
    errorBirth.innerText = 'Please fill in your date of birth';
    errorBirth.style.color = 'red';
    errorBirth.style.fontSize = '0.8rem';
    birthDate.style.border = 'solid red 2px';
    } else {
    errorBirth.style.display = 'none';
    birthDate.style.border = 'none';
    birthChecked = true;      
    }

  if (!quantityTournament.value.match(numbers)) { 
    errorQuantity.innerText = 'You must enter a valid number';
    errorQuantity.style.color = 'red';
    errorQuantity.style.fontSize = '0.8rem';
    quantityTournament.style.border = 'solid red 2px';
  } else {
    errorQuantity.style.display = 'none';
    quantityTournament.style.border = 'none';
    tournamentChecked = true;
  };

  if (!loc1.checked && !loc2.checked && !loc3.checked && !loc4.checked && !loc5.checked && !loc6.checked) { 
    errorCity.innerText = 'A city must be chosen';
    errorCity.style.color = 'red';
    errorCity.style.fontSize = '0.8rem';          
  } else {
    errorCity.style.display = 'none';
    radioChecked = true;
  };

  if (!validation.checked) {
    errorValidation.innerText = 'Terms and condition must be accepted';
    errorValidation.style.color = 'red';
    errorValidation.style.fontSize = '0.8rem';
    errorValidation.style.marginBottom = '20px';
  } else {
    errorValidation.style.display = 'none';
    conditionsChecked = true;
  };


  if (firstChecked == true && lastChecked == true && mailChecked == true && tournamentChecked == true && radioChecked == true && conditionsChecked == true && birthChecked == true) {
    form.style.display = "none";
    confirmation.style.display = "flex";
  }


}


confirmationCloseBtn[0].addEventListener("click", closeModal);
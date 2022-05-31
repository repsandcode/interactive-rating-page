document.querySelector('#option1').addEventListener('click', option1)
document.querySelector('#option2').addEventListener('click', option2)
document.querySelector('#option3').addEventListener('click', option3)
document.querySelector('#option4').addEventListener('click', option4)
document.querySelector('#option5').addEventListener('click', option5)
let chosenRating = 0

function option1() {
  document.querySelector('#option1').classList.toggle('option')
  document.querySelector('#option2').classList.remove('option')
  document.querySelector('#option3').classList.remove('option')
  document.querySelector('#option4').classList.remove('option')
  document.querySelector('#option5').classList.remove('option')
  chosenRating = document.querySelector('#option1').innerText
}
function option2() {
  document.querySelector('#option2').classList.toggle('option')
  document.querySelector('#option1').classList.remove('option')
  document.querySelector('#option3').classList.remove('option')
  document.querySelector('#option4').classList.remove('option')
  document.querySelector('#option5').classList.remove('option')
  chosenRating = document.querySelector('#option2').innerText
}
function option3() {
  document.querySelector('#option3').classList.toggle('option')
  document.querySelector('#option1').classList.remove('option')
  document.querySelector('#option2').classList.remove('option')
  document.querySelector('#option4').classList.remove('option')
  document.querySelector('#option5').classList.remove('option')
  chosenRating = document.querySelector('#option3').innerText
}
function option4() {
  document.querySelector('#option4').classList.toggle('option')
  document.querySelector('#option2').classList.remove('option')
  document.querySelector('#option3').classList.remove('option')
  document.querySelector('#option1').classList.remove('option')
  document.querySelector('#option5').classList.remove('option')
  chosenRating = document.querySelector('#option4').innerText
}
function option5() {
  document.querySelector('#option5').classList.toggle('option')
  document.querySelector('#option2').classList.remove('option')
  document.querySelector('#option3').classList.remove('option')
  document.querySelector('#option4').classList.remove('option')
  document.querySelector('#option1').classList.remove('option')
  chosenRating = document.querySelector('#option5').innerText
}


document.querySelector('#submit').addEventListener('click', thankYou)
function thankYou() {
  if(chosenRating<=0){
    alert('Oops! You forgot to select your rating.')
  }else{
    document.querySelector('#rating').classList.toggle('hidden')
    document.querySelector('#thank-you').classList.remove('hidden')
    document.querySelector('#chosen-option').innerText = chosenRating
  }
}
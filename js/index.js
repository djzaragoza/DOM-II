// Your code goes here

const logNew = document.querySelector('.logo-heading');

logNew.addEventListener(`click`, function(event) {
    console.log(`The Bus is moving fast!`);
})

const headerTwo = document.querySelector('h2');
headerTwo.addEventListener('dblclick', function(event) {
    event.target.style.color = 'yellow';
})

const para = document.querySelector('p');

para.addEventListener('mouseover', function(event) {
    event.target.style.color = 'red';
})

const newNav = document.querySelector('nav');

newNav.addEventListener('mouseover', function(event) {
    event.target.style.color = 'yellow';
})

const newImg = document.querySelector('img');

newImg.addEventListener('mouseover', function(event) {
    alert('Click now and enter to win!');
    event.preventDefault();
})




// Your code goes here

//event listener = click

const btn = document.getElementsByClassName(`.btn`);
btn.addEventListener("click", (event) => {btn.style.background = "yellow"});
console.log(btn);


//event listener = mouseover
const a = document.getElementsByClassName('.a');

//event listener = select
const destination = document.querySelectorAll('destination');
destination.forEach(paragraph => {
    paragraph.addEventListener('select', (event) => {
        console.log("event", event);
        paragraph.style.color = "magenta";
    })
})

//event listener for paragraphs = keydown
const p = document.getElementById('p');

//event listener = blur
const imgDestination = document.getElementsByTagName('imgDestination');

//event listener = resize
const funBus = document.getElementsByTagName('funBus');

//event listener = double click
const logoHeading = document.getElementsByClassName('logo-heading');

//event listener = load
const webPage = document.querySelectorAll('webPage');

//event listener = abort
const pageAbort = document.querySelectorAll('pageAbort');

//event listener = focus
const destinationImg = document.getElementsByClassName('destinationImg');


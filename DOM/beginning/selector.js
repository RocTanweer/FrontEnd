// gives the exact element
const idSelector = document.getElementById('mainHeading')

// Gives the HTML collection of elements with specified tag name
const tagSelector = document.getElementsByTagName('h1')
tagSelector[0].innerText = 'Nami San'


// Gives the HTML collection of elements with specified class name
const classSelector = document.getElementsByClassName('header')


// this gives a single specified element
const qSelector = document.querySelector('.container')



// while this one gives a nodeList of all the elements containing 
// same id class or tags
const qSelectorAll = document.querySelectorAll('.container')


const lists = document.getElementById('lists');


// gives parent element of lists
let parentElement =  lists.parentElement;

// gives the HTML collection containing all the child elements
let children = lists.children;
console.log(children)

// gives the first element of a parent element
let firstChild = lists.firstElementChild;



// gives the last element of a parent element
let lastChild = lists.lastElementChild;


let secondChild = children[1];

// now lets find its siblings

console.log(secondChild.previousElementSibling)
console.log(secondChild.nextElementSibling)


// now we gonna create an element and put that into the DOM

let newDiv = document.createElement('div');
console.log(newDiv)

newDiv.setAttribute('class' , 'newly-born');
newDiv.id = 'chacha'; 


newDiv.innerText = 'hello'

// grabbing container__box
const container__box = document.querySelector('main div');
let ulists = document.querySelector('main ul')
container__box.insertBefore(newDiv, ulists);



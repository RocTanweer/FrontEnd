
function func2() {
    alert('Got it yeah')
}
const button = document.getElementById('button');
const box = document.getElementById('box');
const input = document.querySelector('input[type = text]')
const form = document.querySelector('form')
console.log(input)

// button.addEventListener('click', func3)
// button.addEventListener('dblclick', func3)
// button.addEventListener('mousedown', func3)
// button.addEventListener('mouseup', func3)


// box.addEventListener('mouseenter', func3)
// box.addEventListener('mouseleave', func3)
// box.addEventListener('mouseout', func3)
// box.addEventListener('mouseover', func3)

// box.addEventListener('mouseleave', func3)
// box.addEventListener('mouseout', func3)

box.addEventListener('mousemove', func3)
// input.addEventListener('keydown', func3)
// input.addEventListener('keyup', func3)
// input.addEventListener('focus', func3)
// input.addEventListener('blur', func3)
input.addEventListener('cut', func3)
// input.addEventListener('paste', func3)

function func3(e){
    // document.getElementById('mainHeading').innerText = 'Roc is here'
    // document.querySelector('.container').style.backgroundColor = 'cornflowerBlue'
    // console.log(e.target.classList)
    let output = document.getElementById('output');
    let box = document.getElementById('box');
    
    // output.innerHTML = '<h2>' + e.type + '</h2>';

    // // cursor location from the screen
    // output.innerHTML = '<h2>' + e.clientX + '</h2>';
    // output.innerHTML = '<h2>' + e.clientY + '</h2>';

    // // cursor location within the elements itself
    // output.innerHTML = '<h2>' + e.offsetX + '</h2>';
    // output.innerHTML = '<h2>' + e.offsetY + '</h2>';

    // // we can also track which key was being pressed while the event
    // output.innerHTML = '<h2>' + e.altKey + '</h2>';
    // output.innerHTML = '<h2>' + e.ctrlKey + '</h2>';
    // output.innerHTML = '<h2>' + e.shiftKey + '</h2>';

    // output.innerHTML = `<h2> EVENT TYPE : ${e.type} </h2>`

    // box.innerHTML = `<p> EVENT TYPE : ${e.type} </p>`
    
    output.innerHTML = `<h3> X-Position : ${e.offsetX} </h3> 
    <h3> Y-Position : ${e.offsetY} </h3>`

    // box.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, ${e.offsetX * e.offsetY}, ${e.offsetX / e.offsetX})`

    // output.innerHTML = `<h2> ${input.value} </h2>`
    // output.innerHTML = `<h2> ${e.type} </h2>
    // <h2> ${e.target.value} </h2>`

    // document.body.style.display = 'none';
    // document.write('Hello')
    let container__box = document.getElementById('container__box');
    container__box.style.display = 'block'
}
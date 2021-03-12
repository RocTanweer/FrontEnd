const submitBtn = document.getElementById('submit-btn');
const mainList = document.getElementById('lists');
const searchBox = document.getElementById('search-box');
const inputBox = document.getElementById('input-box');


// adding items
function onClick(event) {
    if(inputBox.value){
        // creating the list item
        let newItem = document.createElement('li');
        // creating a delete button
        let newBtn = document.createElement('button');
        // adding 'X' to button 
        newBtn.appendChild(document.createTextNode('X'));
        newBtn.className = 'btn';
        newItem.className = 'list-item';
        // making a textnode with input value and appending it in newItem
        newItem.appendChild(document.createTextNode(inputBox.value));
        // adding button in new list item
        newItem.appendChild(newBtn);
        // getting the parent-to-be of newItem
        
        mainList.appendChild(newItem)

    
        
    }

    else{
        alert('Unable to add that!')
    }
}

submitBtn.addEventListener('click', onClick);



// removing elements

function removeItem(event) {
    if(event.target.classList.contains('btn')) {
        if(confirm('Are you sure?')) {
            let li = event.target.parentElement;
            mainList.removeChild(li);
        }
    }
}

mainList.addEventListener('click', removeItem)


// searching Items


function searchItem(event) {
    let searchText = event.target.value.toLowerCase();
    console.log(searchText)
    let items = mainList.getElementsByTagName('li');

    Array.from(items).forEach(function(element) {
        let itemName = element.firstChild.textContent.toLowerCase();
        if(itemName.indexOf(searchText) != -1) {
            element.style.display = 'block';
        }
        else{
            element.style.display = 'none';
        }
        
    })
}

searchBox.addEventListener('keyup', searchItem);
searchBox.addEventListener('focus', function(e) {
    e.target.style.width = '300px';
});
searchBox.addEventListener('blur', function(e) {
    e.target.style.width = '120px';

});






inputBox.addEventListener('focus', function (e) {
    let hero = document.querySelector('.hero');
    e.target.style.width = '300px';
});
inputBox.addEventListener('blur', function (e) {
    e.target.style.width = '120px';
});







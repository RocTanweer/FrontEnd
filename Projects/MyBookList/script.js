// class book : instantiate book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
};

// class UI : Handles Ui of the app
class UI {
    static displayBooks() {
        const books = Store.getBooks();

        books.forEach( (book) => {
            UI.addBookToList(book);
        })
    }

    static addBookToList(book) {
        const bookList = document.getElementById('book-list');
        const bookListItem = document.createElement('tr');
        bookListItem.draggable = 'true'
        bookListItem.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger delete">X</a></td>
        `
        bookList.appendChild(bookListItem);
    }

    static clearField() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }

    static alertMessage(message, type) {
        const container = document.querySelector('.container');
        const bookForm = document.getElementById('book-form');
        const messageBox = document.createElement('div');
        messageBox.className = `alert alert-${type}`;
        messageBox.appendChild(document.createTextNode(message));
        container.insertBefore(messageBox, bookForm);
    }

    static deleteMessage() {
        setTimeout( () => {
            document.querySelector('.alert').remove();
        }, 2000)
    }
}





// class Store : Handles storage
class Store {
    static getBooks() {
        let books;
        if(localStorage.getItem('books') == null) {
            books = [];
        }
        else{
            books = JSON.parse(localStorage.getItem('books'))
        }

        return books
    }

    static addBook(book) {
        let books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn) {
        let books = Store.getBooks();
        books.forEach( (book, index) => {
            if(book.isbn == isbn) {
                books.splice(index, 1);
            }
        })

        localStorage.setItem('books', JSON.stringify(books));
    }
}




// Event : display books
document.addEventListener('DOMContentLoaded', UI.displayBooks());


// Event : Add book
document.querySelector('input[type = submit]').addEventListener('click', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    if(title == "" || author == "" || isbn == "") {
        UI.alertMessage('Incomplete information...!', 'danger');
        UI.deleteMessage();
    }

    else{
        const book = new Book(title, author, isbn);
        // adding book to Ui
        UI.addBookToList(book);

        // adding book to Store
        Store.addBook(book);

        UI.clearField();
        UI.alertMessage('Book is added to the List...!', 'success')
        UI.deleteMessage();
    }
})


// Event : Remove book
const bookList = document.getElementById('book-list');
bookList.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')) {
        // removes from Ui
        bookList.removeChild(e.target.parentElement.parentElement)

        // removes from Store
        Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

        UI.alertMessage('Book Removed...!', 'info')
        UI.deleteMessage();
    }
})
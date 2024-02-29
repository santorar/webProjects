const myLibrary = [];
let booksContainer = document.getElementsByClassName("books")[0];
let readButtons = document.getElementsByClassName("b-read");
let deleteButtons = document.getElementsByClassName("b-delete");
let addButton = document.getElementById("add-book");
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    };
}
function displayBook(book){
    let info = document.createElement('article');
    let index = myLibrary.indexOf(book);
    info.classList.add("book");
    info.id = `book-${index}`;
    if(book.read === "No"){
        info.innerHTML = `
            <h2 class="book-title">Title: ${book.title}</h2>
            <h3 class="book-author">Author: ${book.author}</h3>
            <p class="book-pages">${book.pages} pages</p>
            <p class="book-readed">Readed: ${book.read}</p>
            <div class="book-buttons">
                <button value="${index}" class="b-read">Read</button>
                <button value="${index}" class="b-delete">Delete</button>
            </div>
            `;
    }else{
        info.innerHTML = `
            <h2 class="book-title">Title: ${book.title}</h2>
            <h3 class="book-author">Author: ${book.author}</h3>
            <p class="book-pages">${book.pages} pages</p>
            <p class="book-readed">Readed: ${book.read}</p>
            <div class="book-buttons">
                <button value="${index}" class="b-read not">Not Read</button>
                <button value="${index}" class="b-delete">Delete</button>
            </div>
            `;
    }
    booksContainer.appendChild(info);
}
function updateBook(book,index){
    let bookHtml = document.getElementById(`book-${index}`);
    if(book.read === "No"){
        bookHtml.innerHTML = `
            <h2 class="book-title">Title: ${book.title}</h2>
            <h3 class="book-author">Author: ${book.author}</h3>
            <p class="book-pages">${book.pages} pages</p>
            <p class="book-readed">Readed: ${book.read}</p>
            <div class="book-buttons">
                <button value="${index}" class="b-read">Read</button>
                <button value="${index}" class="b-delete">Delete</button>
            </div>
            `;
    }else{
        bookHtml.innerHTML = `
            <h2 class="book-title">Title: ${book.title}</h2>
            <h3 class="book-author">Author: ${book.author}</h3>
            <p class="book-pages">${book.pages} pages</p>
            <p class="book-readed">Readed: ${book.read}</p>
            <div class="book-buttons">
                <button value="${index}" class="b-read not">Not Read</button>
                <button value="${index}" class="b-delete">Delete</button>
            </div>
            `;
    }
}
function setRead(e){
    let index = e.target.value;
    if(myLibrary[index].read === "Yes") myLibrary[index].read = "No";
    else myLibrary[index].read = "Yes";
    updateBook(myLibrary[index],index);
    readButtons = document.getElementsByClassName("b-read");
    readButtons.item(readButtons.length-1).addEventListener("click", setRead);
    readButtons = document.getElementsByClassName("b-delete");
    readButtons.item(readButtons.length-1).addEventListener("click", deleteBook);
}
function deleteBook(event){
    let index = event.target.value;
    myLibrary.splice(index,1);
    let bookHtml = document.getElementById(`book-${index}`);
    bookHtml.remove();
}
let addBookDialog = document.getElementById("add-book-dialog");
let confirmBookDialog = document.getElementById("confirm-book-dialog");
function confirmBook(e){
    e.preventDefault();
    let title = document.getElementById("book-title-form");
    let author = document.getElementById("book-author-form");
    let pages = document.getElementById("book-pages-form");
    let read = document.getElementById("book-readed-form");
    let readText = "No";
    if(read.checked == true) readText = "Yes";
    let book = new Book(title.value,author.value,pages.value,readText);
    myLibrary.push(book);
    displayBook(book);
    addBookDialog.close();
    title.value = "";
    author.value = "";
    pages.value = "";
    read.checked = false;
    readButtons = document.getElementsByClassName("b-read");
    readButtons.item(readButtons.length-1).addEventListener("click", setRead);
    readButtons = document.getElementsByClassName("b-delete");
    readButtons.item(readButtons.length-1).addEventListener("click", deleteBook);
}
addButton.addEventListener('click', event => addBookDialog.showModal());
confirmBookDialog.addEventListener('click',confirmBook);
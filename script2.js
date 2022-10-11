import { booksData } from "./data.js";

const bookRadios = document.getElementById("book-radios")

function getBooksArray(books) {
    const booksArray = []
    for (let book of books) {
        for (let cover of book.genres) {
            if (!booksArray.includes(cover)) {
                booksArray.push(cover)
            }
        }
    }
    return booksArray
}

function renderBookRadios(books){
    const bookCovers = getBooksArray(books)
    let bookRadiosHtml = ""
        for (let cover of bookCovers) {
        bookRadiosHtml += `
        <div class="radio">
            <label for=${cover}>${cover}</label>
                <input
                type="radio"
                id=${cover}
                value=${cover}
                name= "covers"
                >
        </div>`
     }
    bookRadios.innerHTML = bookRadiosHtml
}

renderBookRadios(booksData)
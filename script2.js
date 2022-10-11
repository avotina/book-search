import { booksData } from "./data.js";

const bookRadios = document.getElementById("book-radios")

function getBooksArray(books) {
    const booksArray = []
    for (let book of books) {
        for (let cover of book.genres) {
            booksArray.push(cover)
        }
    }
    return booksArray
}

function renderBookRadios(books){
    const bookCovers = getBooksArray(books)
    let bookRadiosHtml = ""
        for (let cover of bookCovers) {
            bookRadiosHtml += `<p>${cover}</p>`
            bookRadios.innerHTML = bookRadiosHtml
        }

}

renderBookRadios(booksData)
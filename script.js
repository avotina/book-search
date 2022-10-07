import { booksData } from "/data.js"


const bookRadios = document.getElementById("book-radios")

function getBooksArray(bookItems) {
    const booksArray = []
        for (let book of bookItems) {
            for (let genre of book.genres) {
                booksArray.push(genre)
            }
        }
    return booksArray
}

function renderCategoryRadios(bookItems) {
    let bookItemsHtml = ""
    const books = getBooksArray(bookItems)
        for (let book of books) {
            bookItemsHtml += `
            <div class="radio">
                <label for="${book}">${book}</label>
                <input
                type="radio"
                id="${book}"
                value="${book}"
                name="emotions"
                >
            </div>`
        }
    bookRadios.innerHTML = bookItemsHtml
}

renderCategoryRadios(booksData)
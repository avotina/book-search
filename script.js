import { booksData } from "./data.js";

const bookRadios = document.getElementById("book-radios")
const getBooksBtn = document.getElementById("get-book-btn")
const renderBooks = document.getElementById("render")

bookRadios.addEventListener("change", highlightCheckedOption)
getBooksBtn.addEventListener("click", getMatchingBooksArray)

function getMatchingBooksArray() {
    if (document.querySelector('input[type="radio"]:checked')) {
        const selectedCategory = document.querySelector('input[type="radio"]:checked').value
        // console.log(selectedCategory)
        renderBooks.innerHTML = ``
    }
}

function highlightCheckedOption(e){
const radioItems = document.getElementsByClassName("radio")
    for (let item of radioItems) {
        item.classList.remove("highlight")
    }
     document.getElementById(e.target.id).parentElement.classList.add("highlight")
}


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
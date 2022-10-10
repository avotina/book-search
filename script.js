import { booksData } from "/data.js"


const bookRadios = document.getElementById("book-radios")
const getImageBtn = document.getElementById('get-image-btn')
const gifsOnlyOption = document.getElementById('gifs-only-option')
const memeModalInner = document.getElementById('meme-modal-inner')
const memeModal = document.getElementById('meme-modal')
const memeModalCloseBtn = document.getElementById('meme-modal-close-btn')
const notAvailableMessage = document.getElementById("message")

bookRadios.addEventListener('change', highlightCheckedOption)

memeModalCloseBtn.addEventListener('click', closeModal)

getImageBtn.addEventListener('click', renderBook)


function highlightCheckedOption(e){
    const radios = document.getElementsByClassName('radio')
    for (let radio of radios){
        radio.classList.remove('highlight')
    }
    document.getElementById(e.target.id).parentElement.classList.add('highlight')
}

function closeModal(){
    memeModal.style.display = 'none'
}

function renderBook(){
    const bookObject = getSingleBookObject()
    memeModalInner.innerHTML =  `
        <img 
        class="cat-img" 
        src="./images/${bookObject.image}"
        alt="${bookObject.alt}"
        >
        `
    memeModal.style.display = 'flex'
}

function getSingleBookObject(){
    const booksArray = getMatchingBooksArray()
    
    if(booksArray.length === 1){
        return booksArray[0]
    }
    else{
        const randomNumber = Math.floor(Math.random() * booksArray.length)
        return booksArray[randomNumber]
    }
}

function getMatchingBooksArray(){     
    if(document.querySelector('input[type="radio"]:checked')){
        const selectedBook = document.querySelector('input[type="radio"]:checked').value
        const isAvailable = gifsOnlyOption.checked
        
        const matchingBooksArray = booksData.filter(function(book){
            
            if(isAvailable){
                return book.genres.includes(selectedBook) && book.isAvailable
            } else if {
                return book.genres.includes(selectedBook)  
            } else {
                return notAvailableMessage.textContent = "Book is out of stock"
            }           
        })
        return matchingBooksArray 
    }  
}

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
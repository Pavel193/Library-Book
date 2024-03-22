import { modal, readBook, arrPage, pageSection, containerSearchBooks} from "./constants.js"
import { arrBook } from "./dataBook.js"
import { readBookData } from "./middleware/user.js"
import { state } from "./templates/state.js"


function delay(callback, s){
   return setTimeout(callback, s)
}

export function closeCard(card, arr){
actionCard(card, arr, 'swipeLeft')
}

export function swapRight(card,arr) {
    actionCard(card, arr, 'swipeRight')
}

function actionCard(card, arr , className){
    const distant = 8
    card.classList.add(className)
    delay(() => card.remove(), 1000)
    arr.shift()
    arr.forEach((item, index)=> {
        item.style = `transform: translateX(${distant * index}px) rotate(${index}deg); z-index: ${100-index}`
    })
}

export function openModal(card){
    const {bookData} = card
    console.log(bookData);
    const imageUrl = bookData.img
    modal.style.backgroundImage = `url(${imageUrl})`
    const authorBook = modal.querySelector('.bookAuthor')
    const modalDescription  = modal.querySelector('.bookDescription')
    const nameBook = modal.querySelector('.bookName')
    const ratingBook = modal.querySelector('.raiting')
    const looksBook = modal.querySelector('.looks')
    const dataRaiting = modal.querySelector ('.dataRaiting')
    dataRaiting.textContent = bookData.data
    looksBook.textContent = bookData.looks
    ratingBook.textContent = bookData.raiting
    nameBook.textContent = bookData.name
    authorBook.textContent = bookData.author 
    modalDescription.textContent = bookData.description
    modal.classList.remove('none')
    const readBook = document.querySelector('.reading')
    readBook.addEventListener('click', () => {
        readBookData.setReadBook(bookData, 0)
        window.location.href = './readBook.html'
    })
    // readBook.addEventListener('click', () =>  openBook(bookData))
}
export function closeModal () {
    modal.style.backgroundImage = ''
    modal.classList.add('none')
}

export function openBook (bookData, page) {
    readBook.classList.remove('none')
    const book = bookData.book
    const arrBook = book.split('  ')
    const lengthPage = 40
    for(let i = 0; i <= Math.ceil(arrBook.length / lengthPage); i++){
        arrPage.push(arrBook.splice(i, lengthPage))
    }
    pageSection.textContent = arrPage[page].join('  ')
}

export function clearPage(){
    pageSection.textContent = ''
}

// оформляем функцию перелистывания вперед
export function nextPage(){
   const pageNumber = document.querySelector('.page')
   const number = pageNumber.textContent
   if (number < arrPage.length-1){
        clearPage()
       pageSection.textContent = arrPage[+number].join('  ')
       pageNumber.textContent = +number + 1  
   }
}

// оформляем функцию перелистывания назад
export function backPage(){
    const pageNumber = document.querySelector('.page')
    const number = pageNumber.textContent 
    if (number >1){
        clearPage()  
        pageSection.textContent = arrPage[number].join('  ')
        pageNumber.textContent = number - 1 
    }
    
}

export function searchingBook(event, render){
    containerSearchBooks.innerHTML = ''
    const input = event.target
    const value = new RegExp(input.value.toLowerCase())// new RegExp - создание регулярного выражения из строки (нужно для использования методов test match replace)
    const filterBooks = arrBook.filter((item) => {
      return value.test(item.author.toLowerCase()) || value.test(item.name.toLowerCase())
    })  // test - Метод для регулярных выражений поиска подстроки в строке (может найти букву в слове , либо предложение) 
    filterBooks.forEach((item) => render(item, openModal))
    console.log(filterBooks);
}


export function changePage(item){
    const itemPath = item.getAttribute('data-href')
    console.log(itemPath)
    state.clearWrapper()
    state.searchBook.renderFunc()
    window.history.pushState('page2', 'Title', itemPath);
}
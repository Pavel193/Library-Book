import { containerCard, modal } from "../constants.js"
import { searchingBook, closeModal } from "../functions.js"
import { renderSearchCard } from "../bookCard.js"

export function renderSearchBook() {
    const container = document.createElement('div')
    container.style.width = '100%'
    container.innerHTML = `
        <div class="search">
                <input type="search" class="search_inp">
                <button class="search_btn">Поиск</button>
        </div>
        <div class="search_container">
            <div class="blur_container"></div>
            <div class="search_books"></div>
        </div>
    `
    const searchBook = container.querySelector('.search_inp')
    const searchContainer = container.querySelector('.search_books')
    searchBook.addEventListener('input', (e) => searchingBook(e, renderSearchCard, searchContainer))
    modal.addEventListener('click', closeModal)
    containerCard.append(container)
}
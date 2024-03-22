import { wrapper } from "../constants.js"

export function renderSearchBook() {
    const container = document.createElement('div')
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
    wrapper.append(container)
}
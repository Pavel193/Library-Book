import { containerCard, containerCardLike } from "./constants.js";

export function renderBookCard (cardData, index){
    const distant = 10
    const card = document.createElement('div')
    card.classList.add('bookCard')
    card.style = `transform: translateX(${distant * index}px) rotate(${index * 0.3}deg); z-index: ${100-index}`
    card.innerHTML = `
    <div class="cardInfo"  style="background-image: url(${cardData.img})">
    <div class="NameBookText">
        <div class="blur_container"></div>
        <h2 class="cardName">${cardData.name}</h2>
        <h3 class="cardAutor">${cardData.author}</h3>
    </div>
    </div>
    <div class="cardAction">
        <button class="closeButton buttonsCard"></button>
        <button class="enterButton buttonsCard"></button>
        <button class="likeButton buttonsCard"></button>  
    </div>
    `
    containerCard.append(card)
    return card
}


export function renderLikeCard (cardData, index){

    const card = document.createElement('div')
    card.classList.add('likedBook')
    card.innerHTML = `
    <div class="blur_container"></div>
    <h3 class="likeBook_author ">${cardData.author}</h3>
    <h3 class="likeBook_name ">${cardData.name}</h3>
    <div class="buttons_book">
        <button class="openBook ">Читать</button>
        <button class="deleteBook ">Удалить</button>
    </div>
    `
    containerCardLike.append(card)
    return card
}
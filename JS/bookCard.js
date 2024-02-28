import { containerCard } from "./constants.js";

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
import { arrBook } from "./dataBook.js";
import { renderBookCard } from "./bookCard.js";
import { closeCard, swapRight } from "./functions.js";

const arrCards = arrBook.map(renderBookCard)

console.log(arrCards);

arrCards.forEach((card) => {
    const closeBtn = card.querySelector('.closeButton')
    const rightBtn = card.querySelector('.likeButton')
    rightBtn.addEventListener('click', () => swapRight(card, arrCards))
    closeBtn.addEventListener('click', () => closeCard(card, arrCards))
})
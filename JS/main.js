import { arrBook } from "./dataBook.js";
import { renderBookCard } from "./bookCard.js";
import { closeCard, swapRight, openModal, closeModal } from "./functions.js";
import { modal } from "./constants.js";


const arrCards = arrBook.map((bookData, index) => ({bookData, bookCard: renderBookCard(bookData,index)}))

arrCards.forEach((card) => {
    const {bookData, bookCard} = card
    console.log(bookCard);
    const closeBtn = bookCard.querySelector('.closeButton')
    const rightBtn = bookCard.querySelector('.likeButton')
    const enterBtn = bookCard.querySelector('.enterButton')
    rightBtn.addEventListener('click', () => swapRight(bookCard, arrCards))
    closeBtn.addEventListener('click', () => closeCard(bookCard, arrCards))
    enterBtn.addEventListener('click', () => openModal(card))
})

modal.addEventListener('click', closeModal)

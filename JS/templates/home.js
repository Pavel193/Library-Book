import { getUserData, setUserData } from "../middleware/user.js"
import { arrBook } from "../dataBook.js"
import { renderBookCard } from "../bookCard.js"
import { openModal, closeModal, closeCard, swapRight } from "../functions.js"
import { modal } from "../constants.js"

export function renderHome() {
    const user = getUserData()
    const arrCards = arrBook.map((bookData, index) => ({bookData, bookCard: renderBookCard(bookData,index)}))
    modal.addEventListener('click', closeModal)
    arrCards.forEach((card) => {
        const {bookData, bookCard} = card
        const closeBtn = bookCard.querySelector('.closeButton')
        const rightBtn = bookCard.querySelector('.likeButton')
        const enterBtn = bookCard.querySelector('.enterButton')
        rightBtn.addEventListener('click', () => {
            swapRight(bookCard, arrCards)
            if(user){
                user.saveBooks = [...user.saveBooks, bookData]
                setUserData(user)
            }
        })
        closeBtn.addEventListener('click', () => closeCard(bookCard, arrCards))
        enterBtn.addEventListener('click', () => openModal(card))
    })
}
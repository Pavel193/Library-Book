import { arrBook } from "./dataBook.js";
import { renderBookCard } from "./bookCard.js";
import { closeCard, swapRight, openModal, closeModal , nextPage, backPage } from "./functions.js";
import { modal,controllerDown, controllerUp } from "./constants.js";
import { getUserData, setUserData } from "./middleware/user.js"
const user = getUserData()


const arrCards = arrBook.map((bookData, index) => ({bookData, bookCard: renderBookCard(bookData,index)}))

arrCards.forEach((card) => {
    const {bookData, bookCard} = card
    console.log(bookCard);
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

modal.addEventListener('click', closeModal)

controllerDown.addEventListener('click', nextPage) 
// надо чтобы при клике вызывалась функция которая очищает поле с текстом и вставляет следующий элемент массива arrPage
controllerUp.addEventListener('click', backPage)
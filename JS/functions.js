import { modal } from "./constants.js"

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
    const {bookData, bookCard} = card
    const imageUrl = bookCard.querySelector('.cardInfo').style.backgroundImage
    modal.style.backgroundImage = imageUrl
    const modalDescription  = modal.querySelector('.bookDescription')
    modalDescription.textContent = bookData.description
    modal.classList.remove('none')
}
export function closeModal () {
    modal.style.backgroundImage = ''
    modal.classList.add('none')
}
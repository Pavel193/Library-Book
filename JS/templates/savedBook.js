import { getUserData, setUserData } from "../middleware/user.js";
import { renderLikeCard } from "../bookCard.js";
import { containerCard } from "../constants.js";

export function renderSavedBook() {

    const div = document.createElement('div')
    div.classList.add('saved_container')
    containerCard.append(div)
    const user = getUserData()
    if(!user) return
    const arrCards = user.saveBooks.map((book) => ({card: renderLikeCard(book, div), data: book}))
    arrCards.forEach(({card, data}) => {
        const del = card.querySelector('.deleteBook')
        console.log(data);
        del.addEventListener('click', () => {
            user.saveBooks = user.saveBooks.filter(book => book.id !== data.id)
            setUserData(user)
            card.remove()
        })
    });
}
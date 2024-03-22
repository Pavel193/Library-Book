import { getUserData, setUserData } from "../middleware/user.js";
import { renderLikeCard } from "../bookCard.js";

export function renderSavedBook() {
    const user = getUserData()
    if(!user) return
    const arrCards = user.saveBooks.map((book) => ({card: renderLikeCard(book), data: book}))
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
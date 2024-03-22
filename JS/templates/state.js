import { renderSearchBook } from "./searchBook.js"
import { wrapper } from "../constants.js"

export const state = {
    searchBook : {
        href: '/search',
        renderFunc : () => renderSearchBook()
    },

    clearWrapper: function (){
        wrapper.children[1].innerHTML = ''
    }
}
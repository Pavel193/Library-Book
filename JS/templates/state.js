import { renderSearchBook } from "./searchBook.js"
import { renderHome } from "./home.js"
import { wrapper } from "../constants.js"
import { renderSavedBook } from "./savedBook.js"
import { renderProfile } from "./profile.js"

export const state = {
    '/search' : {
        href: '/search',
        renderFunc : () => renderSearchBook()
    },

    '/' : {
        href: '/',
        renderFunc : () => renderHome()
    },

    '/saves' : {
        href: '/saves',
        renderFunc : () => renderSavedBook()
    },

    '/profile' : {
        href: '/profile',
        renderFunc : () => renderProfile()
    },

    clearWrapper: function (){
        wrapper.children[1].innerHTML = ''
    },
    init: function (){
        state['/'].renderFunc()
    }
}

state.init()
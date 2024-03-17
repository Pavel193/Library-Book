import { formAuth } from "./constants.js";
export const closeAutorizatition = document.querySelector('.closeModal')

const userPattern = {
    login: 'admin',
    password: 'admin'
}

function formSubmit(event){
    event.preventDefault()
    const {login, password}= formAuth.elements
    if(login.value === userPattern.login && password.value === userPattern.password){
        localStorage.setItem('user', JSON.stringify({login: login.value, password : password.value}))
        window.location.href = './account.html'
    }
}

formAuth.addEventListener('submit',formSubmit )
closeAutorizatition.addEventListener('click', () => window.history.back())


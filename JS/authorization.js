import { formAuth } from "./constants.js";

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



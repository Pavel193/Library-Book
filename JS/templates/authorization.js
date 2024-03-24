import { containerCard } from "../constants.js"

export function authorizationRender(){
    const userPattern = {
        login: 'admin',
        password: 'admin'
    }

    const div = document.createElement('div')

    div.innerHTML = `
    <div class="modal">
        <h2 class="modal_title">Авторизация</h2>
        <form class="modalform">
            <input type="text" placeholder="Логин" name="login" class="modalform_input">
            <input type="text" placeholder="Пароль" name="password" class="modalform_input">
            <button class="modalform_submit">Войти</button>
        </form>
    </div>
    `

    containerCard.append(div)
    
    function formSubmit(event){
        event.preventDefault()
        const {login, password}= formAuth.elements
        if(login.value === userPattern.login && password.value === userPattern.password){
            localStorage.setItem('user', JSON.stringify({login: login.value, password : password.value}))
            window.location.href = './account.html'
        }
    }
    
    formAuth.addEventListener('submit',formSubmit )
}
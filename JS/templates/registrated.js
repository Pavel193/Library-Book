import { containerCard } from "../constants.js";

export function registratedRender(){

     const userPattern = {
        login: 'admin',
         password: 'admin'
     }
        


const div = document.createElement('div')
div.innerHTML = `
        <div class="modalOverlay modalOverlay-registry">
            <div class="modal">
                <h2 class="modal_title">Регистрация</h2>
                <form class="modalform">
                    <input type="text" placeholder="Почта" class="modalform_input">
                    <input type="text" placeholder="Имя пользователя" class="modalform_input">
                    <input type="text" placeholder="Пароль" class="modalform_input">
                    <button class="modalform_submit">Войти</button>
                </form>
            </div>
        </div>
`
containerCard.append(div)

const formAuth = div.querySelector('.modalform')

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
import { getUserData } from "../middleware/user.js"
import { changePage } from "../functions.js"
import { containerCard } from "../constants.js"

export function renderProfile() {
    const div = document.createElement('div')

    div.innerHTML = `
    <div class="regWindow">
        <div class="blur_container"></div>
        <div class="registratedUser">
            <button data-href="/authorization" class="registratedUserLink">Sign in</button>
            <button data-href="/registrated" class="registratedUserLink">Sign up</button>
        </div>
        <div class="dataUser">
            <div class="userAvatar"></div>
            <h3 class="UserName">Pavel</h3>
            <h3 class="UserMail">kistenevpavel@yandex.ru</h3>
            <button class="editBtn">Edit</button>
            <button class="exitBtn">Exit</button>
        </div>
    </div>
    `
    const registratedUser = div.querySelector('.registratedUser')
    const exitBtn = div.querySelector('.exitBtn')
    const dataUser = div.querySelector('.dataUser')
    const navs = div.querySelectorAll('.registratedUserLink')
    containerCard.append(div)
    
    function userCheck(user){
        return !!user
    }

    
    const user = getUserData()
    userCheck(user) ? registratedUser.classList.add('none') : dataUser.classList.add('none')

    navs.forEach((item)=> item.addEventListener('click', () => changePage(item)))    

    exitBtn.addEventListener('click', () => {
        localStorage.removeItem('user')
        dataUser.classList.add('none')
        registratedUser.classList.remove('none')
    })
}
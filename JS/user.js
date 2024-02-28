import { dataUser, registratedUser, exitBtn } from "./constants.js"
import { getUserData } from "./middleware/user.js"
function userCheck(user){
    return !!user
}

window.addEventListener('DOMContentLoaded', () => {
    const user = getUserData()
    userCheck(user) ? registratedUser.classList.add('none') : dataUser.classList.add('none')
})

exitBtn.addEventListener('click', () => {
    localStorage.removeItem('user')
    dataUser.classList.add('none')
    registratedUser.classList.remove('none')
})
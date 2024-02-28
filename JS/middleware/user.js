export function getUserData () {
    const user = JSON.parse(localStorage.getItem('user'))
    if(user && !user.saveBooks) user.saveBooks = []
    return user
}


export function setUserData (user) {
    localStorage.setItem('user', JSON.stringify(user))
}
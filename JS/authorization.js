import { formAuth } from "./constants.js";

function formSubmit(event){
    event.preventDefault()
    const {login, password}= formAuth.elements
    console.log(login.value, password.value);
}
formAuth.addEventListener('submit',formSubmit )
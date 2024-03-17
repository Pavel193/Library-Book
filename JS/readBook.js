import { readBookData } from "./middleware/user.js";
import {openBook, nextPage, backPage} from "./functions.js";
import { controllerDown, controllerUp } from "./constants.js";


openBook(readBookData.readingBook.book, readBookData.readingBook.page)

controllerDown.addEventListener('click', nextPage) 
// надо чтобы при клике вызывалась функция которая очищает поле с текстом и вставляет следующий элемент массива arrPage
controllerUp.addEventListener('click', backPage)
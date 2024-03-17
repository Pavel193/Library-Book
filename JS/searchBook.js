import { searchBook, modal } from "./constants.js";
import { searchingBook, closeModal } from "./functions.js";
import { renderSearchCard } from "./bookCard.js";

searchBook.addEventListener('input', (e) => searchingBook(e, renderSearchCard))
modal.addEventListener('click', closeModal)
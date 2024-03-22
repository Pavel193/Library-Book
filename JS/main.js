import { changePage } from "./functions.js";
import { navItems } from "./constants.js";

navItems.forEach((item) => item.addEventListener('click',() => changePage(item)))



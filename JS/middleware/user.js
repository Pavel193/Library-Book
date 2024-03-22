export const readBookData = {
    saveBooks: [],
    readingBook: {book: null, page: null},
    setReadBook: function(bookData, page){
        this.readingBook.book = bookData
        this.saveBooks = [...readBookData.saveBooks, bookData]
        this.readingBook.page = page
        localStorage.setItem('readBook', JSON.stringify(this))
    },
    getReadBook: function(){
        const obj = JSON.parse(localStorage.getItem('readBook')) || {}
        this.saveBooks = obj.saveBooks
        this.readingBook = obj.readingBook
    }
}

export function getUserData () {
    const user = JSON.parse(localStorage.getItem('user'))
    if(user && !user.saveBooks) user.saveBooks = []
    return user
}

export function setUserData (user) {
    localStorage.setItem('user', JSON.stringify(user))
}

readBookData.getReadBook()
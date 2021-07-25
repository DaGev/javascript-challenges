import { Book } from '../1-available-books/bookClass.js'

class TechnicalBookClass extends Book {
    constructor(title, author, ISBN, numCopies, edition) {
        super(title, author, ISBN, numCopies);
        this.edition = edition;
    }

    get thisEdition() {
        return `The current edition of this book is ${this.edition}`;
    }
}
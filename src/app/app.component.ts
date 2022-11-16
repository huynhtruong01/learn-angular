import { Component } from '@angular/core'
import { Book } from './features/books/books.component'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.css'],
})
export class AppComponent {
    bookList: Book[] = []

    updateCart(newBookList: Book[]) {
        this.bookList = [...newBookList]
        console.log(newBookList)
    }
}

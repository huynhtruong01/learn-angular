import { Component, OnInit } from '@angular/core'
import { Book } from '../books/books.component'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    bookList: Book[] = []

    updateCart(newBookList: Book[]) {
        this.bookList = [...newBookList]
        console.log(newBookList)
    }
}

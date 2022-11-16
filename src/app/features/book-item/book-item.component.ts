import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Book } from '../books/books.component'

@Component({
    selector: 'app-book-item',
    templateUrl: './book-item.component.html',
    styleUrls: ['./book-item.component.css'],
})
export class BookItemComponent implements OnInit {
    @Input() book: Book = {} as Book
    @Output() bookEmitter = new EventEmitter<Book>()

    constructor() {}

    ngOnInit(): void {}

    addToCart() {
        this.bookEmitter.emit(this.book)
    }
}

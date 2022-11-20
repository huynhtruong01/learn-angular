import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core'
import { BooksService } from './books.service'

export interface Book {
    name: string
    author: string
    imgUrl: string
    amount: number
}

@Component({
    selector: 'app-books',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit, OnDestroy {
    bookList: Book[]

    private bookService: BooksService
    constructor() {
        this.bookService = new BooksService()
        this.bookList = this.bookService.getBooks()
    }

    @Output() bookListEmitter = new EventEmitter<Book[]>()
    // bookList: Book[] = [
    //     {
    //         name: 'Clean Book',
    //         author: 'Robert C Martin',
    //         imgUrl: 'https://m.media-amazon.com/images/I/41xShlnTZTL._AC_UY218_.jpg',
    //         amount: 400,
    //     },
    //     {
    //         name: 'Cracking the Coding Interview',
    //         author: 'Gayle Laakmann McDowell',
    //         imgUrl: 'https://m.media-amazon.com/images/I/41oYsXjLvZL._SX348_BO1,204,203,200_.jpg',
    //         amount: 400,
    //     },
    //     {
    //         name: 'Cracking the Coding Interview',
    //         author: 'Gayle Laakmann McDowell',
    //         imgUrl: 'https://m.media-amazon.com/images/I/41oYsXjLvZL._SX348_BO1,204,203,200_.jpg',
    //         amount: 400,
    //     },
    //     {
    //         name: 'Cracking the Coding Interview',
    //         author: 'Gayle Laakmann McDowell',
    //         imgUrl: 'https://m.media-amazon.com/images/I/41oYsXjLvZL._SX348_BO1,204,203,200_.jpg',
    //         amount: 400,
    //     },
    //     {
    //         name: 'Clean Book',
    //         author: 'Robert C Martin',
    //         imgUrl: 'https://m.media-amazon.com/images/I/41xShlnTZTL._AC_UY218_.jpg',
    //         amount: 400,
    //     },
    //     {
    //         name: 'Cracking the Coding Interview',
    //         author: 'Gayle Laakmann McDowell',
    //         imgUrl: 'https://m.media-amazon.com/images/I/41oYsXjLvZL._SX348_BO1,204,203,200_.jpg',
    //         amount: 400,
    //     },
    //     {
    //         name: 'Clean Book',
    //         author: 'Robert C Martin',
    //         imgUrl: 'https://m.media-amazon.com/images/I/41xShlnTZTL._AC_UY218_.jpg',
    //         amount: 400,
    //     },
    //     {
    //         name: 'Cracking the Coding Interview',
    //         author: 'Gayle Laakmann McDowell',
    //         imgUrl: 'https://m.media-amazon.com/images/I/41oYsXjLvZL._SX348_BO1,204,203,200_.jpg',
    //         amount: 400,
    //     },
    //     {
    //         name: 'Clean Book',
    //         author: 'Robert C Martin',
    //         imgUrl: 'https://m.media-amazon.com/images/I/41xShlnTZTL._AC_UY218_.jpg',
    //         amount: 400,
    //     },
    //     {
    //         name: 'Cracking the Coding Interview',
    //         author: 'Gayle Laakmann McDowell',
    //         imgUrl: 'https://m.media-amazon.com/images/I/41oYsXjLvZL._SX348_BO1,204,203,200_.jpg',
    //         amount: 400,
    //     },
    //     {
    //         name: 'Clean Book',
    //         author: 'Robert C Martin',
    //         imgUrl: 'https://m.media-amazon.com/images/I/41xShlnTZTL._AC_UY218_.jpg',
    //         amount: 400,
    //     },
    //     {
    //         name: 'Cracking the Coding Interview',
    //         author: 'Gayle Laakmann McDowell',
    //         imgUrl: 'https://m.media-amazon.com/images/I/41oYsXjLvZL._SX348_BO1,204,203,200_.jpg',
    //         amount: 400,
    //     },
    //     {
    //         name: 'Clean Book',
    //         author: 'Robert C Martin',
    //         imgUrl: 'https://m.media-amazon.com/images/I/41xShlnTZTL._AC_UY218_.jpg',
    //         amount: 400,
    //     },
    //     {
    //         name: 'Cracking the Coding Interview',
    //         author: 'Gayle Laakmann McDowell',
    //         imgUrl: 'https://m.media-amazon.com/images/I/41oYsXjLvZL._SX348_BO1,204,203,200_.jpg',
    //         amount: 400,
    //     },
    //     {
    //         name: 'Clean Book',
    //         author: 'Robert C Martin',
    //         imgUrl: 'https://m.media-amazon.com/images/I/41xShlnTZTL._AC_UY218_.jpg',
    //         amount: 400,
    //     },
    //     {
    //         name: 'Cracking the Coding Interview',
    //         author: 'Gayle Laakmann McDowell',
    //         imgUrl: 'https://m.media-amazon.com/images/I/41oYsXjLvZL._SX348_BO1,204,203,200_.jpg',
    //         amount: 400,
    //     },
    //     {
    //         name: 'Clean Book',
    //         author: 'Robert C Martin',
    //         imgUrl: 'https://m.media-amazon.com/images/I/41xShlnTZTL._AC_UY218_.jpg',
    //         amount: 400,
    //     },
    // ]

    isToggle = false
    textProperty: string = ''

    handleToggle() {
        this.isToggle = !this.isToggle
    }

    ngOnInit(): void {
        // this.bookList = this.bookService.getBooks()
        this.bookService.serviceProperty = 'Hello world'
        this.textProperty = this.bookService.serviceProperty
    }

    ngOnDestroy(): void {
        this.bookList = []
        console.log('Books empty')
    }

    bookInCartList: Book[] = []

    addToCart(book: Book) {
        this.bookInCartList.push(book)
        this.bookListEmitter.emit(this.bookInCartList)
    }
}

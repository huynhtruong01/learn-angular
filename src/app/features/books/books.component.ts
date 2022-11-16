import { Component, EventEmitter, OnInit, Output } from '@angular/core'

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
export class BooksComponent implements OnInit {
    @Output() bookListEmitter = new EventEmitter<Book[]>()
    bookList: Book[] = [
        {
            name: 'Clean Book',
            author: 'Robert C Martin',
            imgUrl: 'https://m.media-amazon.com/images/I/41xShlnTZTL._AC_UY218_.jpg',
            amount: 400,
        },
        {
            name: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            imgUrl: 'https://m.media-amazon.com/images/I/41oYsXjLvZL._SX348_BO1,204,203,200_.jpg',
            amount: 400,
        },
        {
            name: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            imgUrl: 'https://m.media-amazon.com/images/I/41oYsXjLvZL._SX348_BO1,204,203,200_.jpg',
            amount: 400,
        },
        {
            name: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            imgUrl: 'https://m.media-amazon.com/images/I/41oYsXjLvZL._SX348_BO1,204,203,200_.jpg',
            amount: 400,
        },
        {
            name: 'Clean Book',
            author: 'Robert C Martin',
            imgUrl: 'https://m.media-amazon.com/images/I/41xShlnTZTL._AC_UY218_.jpg',
            amount: 400,
        },
        {
            name: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            imgUrl: 'https://m.media-amazon.com/images/I/41oYsXjLvZL._SX348_BO1,204,203,200_.jpg',
            amount: 400,
        },
        {
            name: 'Clean Book',
            author: 'Robert C Martin',
            imgUrl: 'https://m.media-amazon.com/images/I/41xShlnTZTL._AC_UY218_.jpg',
            amount: 400,
        },
        {
            name: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            imgUrl: 'https://m.media-amazon.com/images/I/41oYsXjLvZL._SX348_BO1,204,203,200_.jpg',
            amount: 400,
        },
        {
            name: 'Clean Book',
            author: 'Robert C Martin',
            imgUrl: 'https://m.media-amazon.com/images/I/41xShlnTZTL._AC_UY218_.jpg',
            amount: 400,
        },
        {
            name: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            imgUrl: 'https://m.media-amazon.com/images/I/41oYsXjLvZL._SX348_BO1,204,203,200_.jpg',
            amount: 400,
        },
        {
            name: 'Clean Book',
            author: 'Robert C Martin',
            imgUrl: 'https://m.media-amazon.com/images/I/41xShlnTZTL._AC_UY218_.jpg',
            amount: 400,
        },
        {
            name: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            imgUrl: 'https://m.media-amazon.com/images/I/41oYsXjLvZL._SX348_BO1,204,203,200_.jpg',
            amount: 400,
        },
        {
            name: 'Clean Book',
            author: 'Robert C Martin',
            imgUrl: 'https://m.media-amazon.com/images/I/41xShlnTZTL._AC_UY218_.jpg',
            amount: 400,
        },
        {
            name: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            imgUrl: 'https://m.media-amazon.com/images/I/41oYsXjLvZL._SX348_BO1,204,203,200_.jpg',
            amount: 400,
        },
        {
            name: 'Clean Book',
            author: 'Robert C Martin',
            imgUrl: 'https://m.media-amazon.com/images/I/41xShlnTZTL._AC_UY218_.jpg',
            amount: 400,
        },
        {
            name: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            imgUrl: 'https://m.media-amazon.com/images/I/41oYsXjLvZL._SX348_BO1,204,203,200_.jpg',
            amount: 400,
        },
        {
            name: 'Clean Book',
            author: 'Robert C Martin',
            imgUrl: 'https://m.media-amazon.com/images/I/41xShlnTZTL._AC_UY218_.jpg',
            amount: 400,
        },
    ]

    name = 'Clean Book'
    author = 'Robert C Martin'
    imgUrl = 'https://m.media-amazon.com/images/I/41xShlnTZTL._AC_UY218_.jpg'

    name2 = 'Cracking the Coding Interview'
    author2 = 'Gayle Laakmann McDowell'
    imgUrl2 =
        'https://m.media-amazon.com/images/I/41oYsXjLvZL._SX348_BO1,204,203,200_.jpg'

    isDisabled = false

    constructor() {}

    ngOnInit(): void {}

    stateBook = 'Show'
    handleToggle(): void {
        this.isDisabled = !this.isDisabled
        if (this.stateBook === 'Show') {
            this.stateBook = 'Hide'
        } else {
            this.stateBook = 'Show'
        }
    }

    handleMouseOver(): void {
        this.isDisabled = true
    }

    handleMouseOut(): void {
        this.isDisabled = false
    }

    bookInCartList: Book[] = []

    addToCart(book: Book) {
        this.bookInCartList.push(book)
        this.bookListEmitter.emit(this.bookInCartList)
    }
}

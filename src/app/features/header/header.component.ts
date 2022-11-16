import { Component, Input, OnInit } from '@angular/core'
import { Book } from '../books/books.component'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
    @Input() bookList: Book[] = [] as Book[]

    constructor() {}
    ngOnInit(): void {}
}

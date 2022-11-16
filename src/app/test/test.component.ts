import { TitleCasePipe } from '@angular/common'
import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
    constructor() {}

    isDisabled: boolean = false

    ngOnInit(): void {}

    handleClick() {
        console.log('button 1 click ok')
    }

    handleToggleDisable() {
        this.isDisabled = !this.isDisabled
    }
}

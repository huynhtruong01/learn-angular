import { Component, Input, OnInit } from '@angular/core'
import { AccountService } from 'src/app/services/account.service'
import { Account } from './../../models/Account'

@Component({
    selector: 'app-account-list',
    templateUrl: './account-list.component.html',
    styleUrls: ['./account-list.component.css'],
})
export class AccountListComponent implements OnInit {
    @Input() accountList: Account[]

    constructor(private accountService: AccountService) {}

    ngOnInit(): void {
        this.accountList = this.accountService.accounts
    }
}

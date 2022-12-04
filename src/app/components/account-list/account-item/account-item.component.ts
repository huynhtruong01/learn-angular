import { Component, Input, OnInit } from '@angular/core'
import { Account } from 'src/app/models'
import { AccountService } from 'src/app/services/account.service'

@Component({
    selector: 'app-account-item',
    templateUrl: './account-item.component.html',
    styleUrls: ['./account-item.component.css'],
})
export class AccountItemComponent implements OnInit {
    @Input() account: Account

    constructor(private accountService: AccountService) {}

    ngOnInit(): void {}

    handleUpdateStatus(id: number, status: string): void {
        this.accountService.updateStatusAccount(id, status)
    }

    handleDeleteAccount(id: number): void {
        this.accountService.deleteAccount(id)
    }
}

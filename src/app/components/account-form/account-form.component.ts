import { Component, OnInit } from '@angular/core'
import { Account } from 'src/app/models'
import { AccountService } from 'src/app/services/account.service'

@Component({
    selector: 'app-account-form',
    templateUrl: './account-form.component.html',
    styleUrls: ['./account-form.component.css'],
})
export class AccountFormComponent implements OnInit {
    nameVal: string = ''
    statusVal: string = ''

    constructor(private accountService: AccountService) {}

    ngOnInit(): void {}

    resetForm() {
        this.nameVal = ''
        this.statusVal = ''
    }

    get account(): Account {
        return {
            id: Date.now(),
            name: this.nameVal,
            status: this.statusVal,
        }
    }

    handleSubmit(e: Event): void {
        e.preventDefault()
        this.accountService.addAccount(this.account)

        this.resetForm()
    }
}

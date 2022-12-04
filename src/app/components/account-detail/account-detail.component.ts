import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { Account } from 'src/app/models'
import { AccountService } from 'src/app/services/account.service'

@Component({
    selector: 'app-account-detail',
    templateUrl: './account-detail.component.html',
    styleUrls: ['./account-detail.component.css'],
})
export class AccountDetailComponent implements OnInit {
    id: number
    account: Account
    constructor(private accountService: AccountService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.id = Number.parseInt(this.route.snapshot.params['id'])
        const account = this.accountService.getAccount(this.id)
        if (!account) return
        this.account = account

        this.route.params.subscribe((params: Params) => {
            this.account =
                this.accountService.getAccount(Number.parseInt(params['id'])) ||
                ({} as Account)
        })
    }
}

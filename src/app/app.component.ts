import { Component, OnInit } from '@angular/core'
import { Account, User } from './models'
import { AccountService } from './services/account.service'
import { UserService } from './services/user.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.css'],
})
export class AppComponent implements OnInit {
    accountList: Account[] = []
    userList: User[]
    activeUserList: User[]
    inactiveUserList: User[]

    constructor(
        private accountService: AccountService,
        private userService: UserService
    ) {}

    ngOnInit(): void {
        this.accountList = this.accountService.accounts
        this.accountService.statusAlert.subscribe((status: string) => {
            alert(`This account has status: ${status}`)
        })

        this.userList = this.userService.activeUserList
        this.activeUserList = this.userService.activeUserList
        this.inactiveUserList = this.userService.inactiveUserList
    }
}

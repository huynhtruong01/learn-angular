import { Component, OnInit } from '@angular/core'
import { Account, User } from 'src/app/models'
import { AccountService } from 'src/app/services/account.service'
import { UserService } from 'src/app/services/user.service'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
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

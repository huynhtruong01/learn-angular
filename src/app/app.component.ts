import { Component, OnInit } from '@angular/core'
import { Observable, of } from 'rxjs'
import { filter, map, tap } from 'rxjs/operators'
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

        // const newFeeds = new Observable<string>((subscriber) => {
        //     subscriber.next('Sport')
        //     subscriber.next('Business')
        //     subscriber.next('Gaming')
        //     subscriber.next('Sport')
        // })

        // newFeeds
        //     .pipe(filter((data) => data === 'Sport'))
        //     .subscribe((data) => console.log(data))

        of(1, 2, 3, 9, 12)
            .pipe(
                map((data) => data * 2),
                tap((data) => console.log('type: ' + data)),
                filter((data) => data >= 5)
            )
            .subscribe((data) => console.log(data))
    }
}

import { Component, Input, OnInit } from '@angular/core'
import { User } from 'src/app/models'
import { UserService } from 'src/app/services/user.service'

@Component({
    selector: 'app-inactive-users',
    templateUrl: './inactive-users.component.html',
    styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent implements OnInit {
    @Input() inactiveUserList: User[]

    constructor(private userService: UserService) {}

    ngOnInit(): void {
        this.inactiveUserList = this.userService.inactiveUserList
    }

    handleSetActiveClick(id: number): void {
        this.userService.setActiveUser(id)
    }
}

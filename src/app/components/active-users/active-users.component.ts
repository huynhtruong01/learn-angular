import { Component, Input, OnInit } from '@angular/core'
import { User } from 'src/app/models'
import { UserService } from 'src/app/services/user.service'

@Component({
    selector: 'app-active-users',
    templateUrl: './active-users.component.html',
    styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent implements OnInit {
    @Input() activeUserList: User[]

    constructor(private userService: UserService) {}

    ngOnInit(): void {
        this.activeUserList = this.userService.activeUserList
    }

    handleSetInactiveClick(id: number): void {
        this.userService.setInactiveUser(id)
    }
}

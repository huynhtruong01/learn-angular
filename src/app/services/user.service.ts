import { Injectable } from '@angular/core'
import { User } from '../models'
import { CounterService } from './counter.service'

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private counterService: CounterService) {}

    activeUserList: User[] = [
        {
            id: 1,
            name: 'Chark',
            status: 'active',
        },
        { id: 3, name: 'Matinez', status: 'active' },
    ]

    inactiveUserList: User[] = [
        { id: 2, name: 'Lily', status: 'inactive' },
        {
            id: 4,
            name: 'John',
            status: 'inactive',
        },
    ]

    userList: User[] = [
        {
            id: 1,
            name: 'Chark',
            status: 'active',
        },
        { id: 3, name: 'Matinez', status: 'active' },
        { id: 2, name: 'Lily', status: 'inactive' },
        {
            id: 4,
            name: 'John',
            status: 'inactive',
        },
    ]

    setActiveUser(id: number): void {
        const index = this.inactiveUserList.findIndex((user: User) => user.id === id)
        if (index < 0) return
        this.activeUserList.push(this.inactiveUserList[index])
        this.inactiveUserList.splice(index, 1)

        const userIndex = this.userList.findIndex((user: User) => user.id === id)
        if (userIndex < 0) return

        this.userList[index].status = 'active'
        this.counterService.increaseCounterActive()
    }

    setInactiveUser(id: number): void {
        const index = this.activeUserList.findIndex((user: User) => user.id === id)
        if (index < 0) return
        this.inactiveUserList.push(this.activeUserList[index])
        this.activeUserList.splice(index, 1)

        const userIndex = this.userList.findIndex((user: User) => user.id === id)
        if (userIndex < 0) return

        this.userList[index].status = 'inactive'
        this.counterService.increaseCounterInactive()
    }
}

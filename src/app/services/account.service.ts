import { EventEmitter, Injectable } from '@angular/core'
import { Account } from '../models'

@Injectable({
    providedIn: 'root',
})
export class AccountService {
    accounts: Account[] = JSON.parse(localStorage.getItem('account-list') || '[]')

    statusAlert: EventEmitter<string> = new EventEmitter<string>()

    setAccountListLS(): void {
        localStorage.setItem('account-list', JSON.stringify(this.accounts))
    }

    getAccount(id: number): Account | undefined {
        const account = this.accounts.find((acc: Account) => acc.id === id)

        return account
    }

    addAccount(account: Account): void {
        this.accounts.push(account)
        this.setAccountListLS()
    }

    updateStatusAccount(id: number, status: string): void {
        const index: number = this.accounts.findIndex(
            (account: Account) => account.id === id
        )
        if (index < 0) return

        this.accounts[index].status = status
        this.setAccountListLS()
        // this.statusAlert.emit(status)
    }

    deleteAccount(id: number): void {
        const index: number = this.accounts.findIndex(
            (account: Account) => account.id === id
        )
        if (index < 0) return

        this.accounts.splice(index, 1)
        this.setAccountListLS()
    }

    updateAccounts(accounts: Account[]) {
        this.accounts = accounts
        this.setAccountListLS()
    }
}

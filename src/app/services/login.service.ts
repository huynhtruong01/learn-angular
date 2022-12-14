import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    isLogged: boolean = JSON.parse(localStorage.getItem('isLogged') || 'false')

    constructor(private router: Router) {}

    isAuthenticated() {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.isLogged)
            }, 800)
        })

        return promise
    }

    login(): void {
        this.isLogged = true
        localStorage.setItem('isLogged', JSON.stringify(true))
        this.router.navigate(['/'])
    }

    logout(): void {
        this.isLogged = false
        localStorage.setItem('isLogged', JSON.stringify(false))
        this.router.navigate(['/login'])
    }
}

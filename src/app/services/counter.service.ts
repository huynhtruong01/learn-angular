import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root',
})
export class CounterService {
    counterActive: number = 0
    counterInactive: number = 0

    constructor() {}

    increaseCounterActive(): void {
        this.counterActive++
        console.log(`Counter active: ${this.counterActive}`)
    }

    increaseCounterInactive(): void {
        this.counterInactive++
        console.log(`Counter inactive: ${this.counterInactive}`)
    }
}

import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root',
})
export class AnalystService {
    constructor() {}

    handleClick(): void {
        console.log('Click')
    }
}

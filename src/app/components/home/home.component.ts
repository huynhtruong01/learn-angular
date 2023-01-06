import { Component, OnDestroy, OnInit } from '@angular/core'
import {
    combineLatest,
    forkJoin,
    from,
    fromEvent,
    map,
    Observable,
    of,
    Subscription,
    timer,
} from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { interval } from 'rxjs/internal/observable/interval'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
    subscription: Subscription
    constructor() {}

    ngOnInit(): void {
        const randomName = ajax('https://random-data-api.com/api/v2/users')
        const randomAddress = ajax('https://random-data-api.com/api/v2/addresses')
        const randomBank = ajax('https://random-data-api.com/api/v2/banks')

        let i = 0
        const a$ = new Observable((subscriber) => {
            setTimeout(() => {
                console.log('i', i)
                subscriber.next(i)
                subscriber.complete()
                i++
            }, 3000)
        })

        let i2 = 0
        const b$ = new Observable((subscriber) => {
            setTimeout(() => {
                console.log('i2', i2)
                subscriber.next(i2)
                i2++
            }, 6000)
        })

        combineLatest([of(1, 2, 3), interval(1000)]).subscribe(([numb, timeNumb]) => {
            console.log(numb, timeNumb)
        })
    }

    ngOnDestroy(): void {
        console.log('Unsubscribe')
        this.subscription.unsubscribe()
    }
}

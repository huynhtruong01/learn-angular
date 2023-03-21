import { Component, OnDestroy, OnInit } from '@angular/core'
import {
    combineLatest,
    concatMap,
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
import { throwError } from 'rxjs/internal/observable/throwError'
import { catchError } from 'rxjs/internal/operators/catchError'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
    subscription: Subscription
    constructor() {}

    ngOnInit(): void {
        of(1, 2, 3, 4)
            .pipe(concatMap((x) => of([x, x * 2, x * 4])))
            .subscribe({
                next: (data) => {
                    console.log(data)
                },
                error: (err) => {
                    console.log(err)
                },
            })
    }

    ngOnDestroy(): void {
        console.log('Unsubscribe')
        this.subscription.unsubscribe()
    }
}

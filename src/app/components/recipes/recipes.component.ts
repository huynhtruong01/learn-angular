import { Component, OnDestroy, OnInit } from '@angular/core'
import { from, Observable, Subject, Subscription } from 'rxjs'
import { filter, map } from 'rxjs/operators'
import { of } from 'rxjs'
import { CommonService } from 'src/app/services/common.service'

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit, OnDestroy {
    private firstSubscription: Subscription
    private activatedSubscription: Subscription
    count: number
    isActivated: boolean = false
    time: Date = new Date()
    text: string =
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    subscriptions: Subscription[] = []

    constructor(private commonService: CommonService) {}

    ngOnInit(): void {
        const customObservable = new Observable((observer) => {
            let count: number = 0
            setInterval(() => {
                observer.next(count)
                count++
            }, 1000)
        })

        this.firstSubscription = customObservable
            .pipe(
                map((data: any) => {
                    return data + 1
                })
            )
            .subscribe({
                next: (count) => {
                    this.count = count
                },
                error: (err) => {
                    console.log(err.message)
                },
            })

        this.activatedSubscription = this.commonService.activatedEmitter.subscribe({
            next: (activated) => {
                console.log(activated)
                this.isActivated = activated
            },
            complete: () => {
                console.log('Activated successfully')
            },
        })

        const numbers = from([1, 2, 3])

        this.subscriptions.push(
            numbers.pipe(filter((x) => x === 2)).subscribe({
                next: (n) => console.log(n),
            })
        )
    }

    handleActivated(): void {
        const isActivated: boolean = !this.isActivated
        this.commonService.activatedEmitter.next(isActivated)
        // this.commonService.activatedEmitter.complete()
    }

    ngOnDestroy(): void {
        this.firstSubscription.unsubscribe()
        this.activatedSubscription.unsubscribe()
        this.subscriptions.forEach((subscription: Subscription) => {
            subscription.unsubscribe()
        })
    }
}

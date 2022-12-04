import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { Subscription } from 'rxjs'

@Component({
    selector: 'app-shopping-item',
    templateUrl: './shopping-item.component.html',
    styleUrls: ['./shopping-item.component.css'],
})
export class ShoppingItemComponent implements OnInit, OnDestroy {
    id: number
    paramSubscription: Subscription

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        console.log(this.route.snapshot.queryParams)
        console.log(this.route.snapshot.fragment)
        this.id = Number.parseInt(this.route.snapshot.params['id'])
        this.paramSubscription = this.route.params.subscribe((param: Params) => {
            this.id = Number.parseInt(param['id'])
        })
    }

    ngOnDestroy(): void {
        this.paramSubscription.unsubscribe()
    }
}

import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'

@Component({
    selector: 'app-server-item',
    templateUrl: './server-item.component.html',
    styleUrls: ['./server-item.component.css'],
})
export class ServerItemComponent implements OnInit {
    name: string

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.name = this.route.snapshot.params['name']
        this.route.params.subscribe((params: Params) => {
            this.name = params['name']
        })
    }
}

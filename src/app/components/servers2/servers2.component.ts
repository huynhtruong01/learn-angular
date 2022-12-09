import { Component, OnInit } from '@angular/core'
import { Server } from 'src/app/models/Server'

@Component({
    selector: 'app-servers2',
    templateUrl: './servers2.component.html',
    styleUrls: ['./servers2.component.css'],
})
export class Servers2Component implements OnInit {
    appStatus: Promise<string> = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('status')
        }, 2000)
    })

    serverList: Server[] = [
        {
            instanceType: 'small',
            name: 'Product',
            status: 'stable',
            started: new Date(15, 8, 2021),
        },
        {
            instanceType: 'small',
            name: 'Developer server',
            status: 'offline',
            started: new Date(2, 2, 2022),
        },
        {
            instanceType: 'small',
            name: 'User database',
            status: 'stable',
            started: new Date(4, 8, 2022),
        },
    ]

    filter: string = ''
    search: string = ''
    addVal: string = ''
    propName: string = 'status'

    constructor() {}

    ngOnInit(): void {}

    handleFilterChange(e: Event): void {
        this.filter = (e.target as HTMLInputElement).value
        this.propName = 'status'
    }

    handleSearchChange(e: Event): void {
        this.search = (e.target as HTMLInputElement).value
        this.propName = 'name'
    }

    handleAddServer2Change(e: Event): void {
        this.addVal = (e.target as HTMLInputElement).value
    }

    handleAddNewServer(): void {
        if (!this.addVal) return
        const newServer: Server = {
            instanceType: 'small',
            name: this.addVal,
            status: 'offline',
            started: new Date(),
        }

        this.serverList.push(newServer)
        this.addVal = ''
    }
}

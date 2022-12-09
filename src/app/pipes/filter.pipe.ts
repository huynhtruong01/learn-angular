import { Pipe, PipeTransform } from '@angular/core'
import { Server } from '../models/Server'

@Pipe({
    name: 'filter',
    // pure: false,
})
export class FilterPipe implements PipeTransform {
    transform(
        serverList: any,
        filterValue: string,
        searchValue: string,
        propName: string
    ): Server[] {
        if (serverList.length === 0) return serverList
        if (searchValue === '' && filterValue === '') return serverList

        const newServerList: Server[] = []

        for (const server of serverList) {
            if (
                (server['status'].toLowerCase() === filterValue.toLowerCase() ||
                    filterValue === '') &&
                server['name'].toLowerCase().includes(searchValue.toLowerCase())
            ) {
                newServerList.push(server)
            }
        }

        return newServerList
    }
}

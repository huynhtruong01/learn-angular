import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'formatDate',
})
export class FormatDatePipe implements PipeTransform {
    transform(time: Date): string {
        const date = `0${new Date(time).getDate()}`.slice(-2)
        const month = `0${new Date(time).getMonth()}`.slice(-2)
        const year = new Date(time).getFullYear()

        return `${date}/${month}/${year}`
    }
}

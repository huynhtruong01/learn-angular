import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
    transform(text: string, maxWord: number, isUppercase: boolean = false): string {
        const newText: string = `${text.split(' ').slice(0, maxWord).join(' ')}...`
        if (isUppercase) return newText.toUpperCase()
        return newText
    }
}

import { Injectable } from '@angular/core'
import { BehaviorSubject, Subject } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class CommonService {
    activatedEmitter = new Subject<boolean>()
    public isLoading = new BehaviorSubject<boolean>(false)

    setLoading(isLoading: boolean): void {
        this.isLoading.next(isLoading)
    }
}

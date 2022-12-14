import {
    HttpEventType,
    HttpHandler,
    HttpHeaders,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map } from 'rxjs/operators'

@Injectable({
    providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            Auth: 'xyz',
        })
        req = req.clone({
            headers,
        })

        return next.handle(req).pipe(
            map((res) => {
                if (res.type === HttpEventType.Response) {
                    console.log(res, HttpEventType)
                }

                return res
            })
        )
    }

    constructor() {}
}

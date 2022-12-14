import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { User2 } from '../models'

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    constructor(private http: HttpClient) {}

    getAllUser(): Observable<User2[]> {
        return this.http.get<User2[]>('https://6383058d1ada9475c8f69427.mockapi.io/users')
    }
}

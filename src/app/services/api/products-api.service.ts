import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from './../../../environments/environment'
import { DataProduct } from './../../models/products'

@Injectable({
    providedIn: 'root',
})
export class ProductsApiService {
    constructor(private http: HttpClient) {}

    getAllProducts(): Observable<DataProduct[]> {
        return this.http.get<DataProduct[]>(`${environment.BASE_URL}/products`)
    }

    getProduct(id: number): Observable<DataProduct> {
        return this.http.get<DataProduct>(`${environment.BASE_URL}/products/${id}`)
    }
}

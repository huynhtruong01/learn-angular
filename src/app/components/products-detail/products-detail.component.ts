import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { CommonService } from 'src/app/services/common.service'
import { DataProduct } from './../../models/products'
import { ProductsApiService } from './../../services/api/products-api.service'

@Component({
    selector: 'app-products-detail',
    templateUrl: './products-detail.component.html',
    styleUrls: ['./products-detail.component.css'],
})
export class ProductsDetailComponent implements OnInit {
    product: DataProduct
    isLoading: boolean

    constructor(
        private route: ActivatedRoute,
        private productsApiService: ProductsApiService,
        private commonService: CommonService
    ) {}

    ngOnInit(): void {
        this.commonService.isLoading.subscribe((data) => (this.isLoading = data))
        const id = this.route.snapshot.params['id']
        this.commonService.setLoading(true)
        this.productsApiService.getProduct(id).subscribe({
            next: (res) => {
                this.product = res
            },
            complete: () => {
                this.commonService.setLoading(false)
            },
        })

        this.route.params.subscribe({
            next: (params: Params) => {
                const id: number = Number.parseInt(params['id'])
                this.commonService.setLoading(true)
                this.productsApiService.getProduct(id).subscribe({
                    next: (res) => {
                        this.product = res
                    },
                    complete: () => {
                        this.commonService.setLoading(false)
                    },
                })
            },
        })
    }
}

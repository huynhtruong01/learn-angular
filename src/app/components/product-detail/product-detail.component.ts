import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { Product } from 'src/app/models'
import { ProductService } from 'src/app/services/product.service'

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
    id: number
    product: Product
    constructor(private productService: ProductService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.id = Number.parseInt(this.route.snapshot.params['id'])
        this.product = this.productService.getProductById(this.id) || ({} as Product)

        this.route.params.subscribe((param: Params) => {
            this.product =
                this.productService.getProductById(Number.parseInt(param['id'])) ||
                ({} as Product)
        })
    }
}

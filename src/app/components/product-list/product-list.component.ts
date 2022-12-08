import { Component, OnInit } from '@angular/core'
import { ProductService } from 'src/app/services/product.service'
import { Product } from './../../models/Product'

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
    productList: Product[]

    constructor(private productService: ProductService) {}

    ngOnInit(): void {
        this.productList = this.productService.products
    }
}

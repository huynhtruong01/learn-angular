import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { Router, RouterModule } from '@angular/router'
import { HighlightTextDirective } from 'src/app/directives/highlight-text.directive'
import { DataProduct } from './../../models/products'
import { ProductsApiService } from './../../services/api/products-api.service'

@Component({
    standalone: true,
    imports: [CommonModule, RouterModule, HighlightTextDirective], // add module, directive
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css'],
    providers: [], // add services
})
export class ProductsComponent implements OnInit {
    products: DataProduct[]
    constructor(private productsApiService: ProductsApiService, private router: Router) {}

    ngOnInit(): void {
        this.productsApiService.getAllProducts().subscribe({
            next: (res) => {
                this.products = res
            },
        })
    }
}

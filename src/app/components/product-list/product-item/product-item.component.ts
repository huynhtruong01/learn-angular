import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Product } from 'src/app/models'
import { ProductService } from 'src/app/services/product.service'

@Component({
    selector: 'app-product-item',
    templateUrl: './product-item.component.html',
    styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
    @Input() product: Product

    constructor(private productService: ProductService, private router: Router) {}

    ngOnInit(): void {}

    handleDelete(): void {
        this.productService.deleteProduct(this.product.id)
    }

    handleNavigateEdit(): void {}

    handleScrollTop() {
        window.scrollTo(0, 0)
    }
}

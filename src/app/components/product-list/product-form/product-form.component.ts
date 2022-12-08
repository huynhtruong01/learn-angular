import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { Product } from 'src/app/models'
import { ProductService } from 'src/app/services/product.service'

@Component({
    selector: 'app-product-form',
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
    id: number | undefined
    product: Product
    valsForm: FormGroup
    constructor(
        private fb: FormBuilder,
        private productService: ProductService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.valsForm = this.fb.group({
            name: ['', Validators.compose([Validators.required])],
            description: ['', Validators.compose([Validators.required])],
            img: ['', Validators.compose([Validators.required])],
            price: [0, Validators.compose([Validators.required, Validators.min(50)])],
        })
        const id = this.route.snapshot.params['id']
        if (id) {
            this.id = Number.parseInt(id)
            this.product = this.productService.getProductById(this.id) || ({} as Product)
            this.setValueForm(this.product)
        }

        this.route.params.subscribe((params: Params) => {
            const newId = params['id']
            if (newId) {
                this.id = Number.parseInt(newId)
                this.product =
                    this.productService.getProductById(this.id) || ({} as Product)
                this.setValueForm(this.product)
            }
        })
    }

    setValueForm(data: Product): void {
        this.valsForm.setValue({
            name: data.name,
            description: data.description,
            img: data.img,
            price: data.price,
        })
    }

    get name() {
        return this.valsForm.get('name')
    }
    get description() {
        return this.valsForm.get('description')
    }
    get img() {
        return this.valsForm.get('img')
    }
    get price() {
        return this.valsForm.get('price')
    }

    getProduct(id?: number): Product {
        const values = this.valsForm.value

        return {
            id: id || Date.now(),
            name: values.name,
            description: values.description,
            img: values.img,
            price: values.price,
        }
    }

    handleAdd(): void {
        this.productService.addProduct(this.getProduct())
    }

    handleEdit(): void {
        this.productService.updateProduct(this.getProduct(this.product.id))
    }

    handleSubmit(e: Event): void {
        e.preventDefault()

        if (this.valsForm.invalid) return

        if (this.id) {
            this.handleEdit()
        } else {
            this.handleAdd()
        }
        this.router.navigate(['/products'])
    }
}

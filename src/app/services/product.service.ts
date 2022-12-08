import { Injectable } from '@angular/core'
import { Product } from '../models'

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    constructor() {}

    getDataLocalStorage(key: string) {
        return JSON.parse(localStorage.getItem(key) || '[]')
    }

    setDataLocalStorage(key: string, data: any) {
        localStorage.setItem(key, JSON.stringify(data))
    }

    products: Product[] = this.getDataLocalStorage('products')

    addProduct(newProduct: Product): void {
        this.products.push(newProduct)
        this.setDataLocalStorage('products', this.products)
    }

    updateProduct(data: Product): void {
        const index = this.products.findIndex((p: Product) => p.id === data.id)
        if (index < 0) return

        this.products[index] = { ...data }
        this.setDataLocalStorage('products', this.products)
    }

    deleteProduct(id: number): void {
        const index = this.products.findIndex((p: Product) => p.id === id)
        if (index < 0) return

        this.products.splice(index, 1)
        this.setDataLocalStorage('products', this.products)
    }

    getProductById(id: number): Product | undefined {
        const product: Product | undefined = this.products.find(
            (p: Product) => p.id === id
        )
        if (!product) return
        return product
    }
}

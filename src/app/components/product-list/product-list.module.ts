import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ProductAddComponent } from './product-add/product-add.component'
import { ProductEditComponent } from './product-edit/product-edit.component'
import { ProductFormComponent } from './product-form/product-form.component'
import { ProductItemComponent } from './product-item/product-item.component'
import { ProductListRoutingModule } from './product-list-routing.module'
import { ProductListComponent } from './product-list.component'

@NgModule({
    declarations: [
        ProductAddComponent,
        ProductEditComponent,
        ProductItemComponent,
        ProductFormComponent,
        ProductListComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ProductListRoutingModule,
    ],
})
export class ProductListModule {}

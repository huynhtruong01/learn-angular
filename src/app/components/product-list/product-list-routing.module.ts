import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ProductDetailComponent } from './../product-detail/product-detail.component'
import { ProductAddComponent } from './product-add/product-add.component'
import { ProductEditComponent } from './product-edit/product-edit.component'
import { ProductListComponent } from './product-list.component'

const routes: Routes = [
    {
        path: '',
        component: ProductListComponent,
        pathMatch: 'full',
    },
    {
        path: 'add',
        component: ProductAddComponent,
        pathMatch: 'full',
    },
    {
        path: ':id/edit',
        component: ProductEditComponent,
        pathMatch: 'full',
    },
    {
        path: ':id',
        component: ProductDetailComponent,
        pathMatch: 'full',
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProductListRoutingModule {}

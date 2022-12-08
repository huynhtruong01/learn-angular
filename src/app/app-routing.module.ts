import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AccountDetailComponent } from './components/account-detail/account-detail.component'
import { AccountListComponent } from './components/account-list/account-list.component'
import { NotFoundComponent } from './components/not-found/not-found.component'
import { ProductDetailComponent } from './components/product-detail/product-detail.component'
import { ProductAddComponent } from './components/product-list/product-add/product-add.component'
import { ProductEditComponent } from './components/product-list/product-edit/product-edit.component'
import { ProductListComponent } from './components/product-list/product-list.component'
import { RecipesComponent } from './components/recipes/recipes.component'
import { ServerItemComponent } from './components/servers/server-item/server-item.component'
import { ServersComponent } from './components/servers/servers.component'
import { ShoppingItemComponent } from './components/shopping-list/shopping-item/shopping-item.component'
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component'
import { HomeComponent } from './features/home/home.component'

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'recipes',
        component: RecipesComponent,
    },
    {
        path: 'shoppings',
        children: [
            {
                path: '',
                component: ShoppingListComponent,
            },
            {
                path: ':id',
                component: ShoppingItemComponent,
            },
            {
                path: ':id/edit',
                component: ShoppingItemComponent,
            },
        ],
    },
    {
        path: 'accounts',
        children: [
            {
                path: '',
                component: AccountListComponent,
            },
            {
                path: ':id',
                component: AccountDetailComponent,
            },
        ],
    },
    {
        path: 'servers',
        component: ServersComponent,
        children: [
            {
                path: ':name',
                component: ServerItemComponent,
            },
        ],
    },
    {
        path: 'products',
        children: [
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
                path: '',
                component: ProductListComponent,
                children: [
                    {
                        path: ':id',
                        component: ProductDetailComponent,
                        pathMatch: 'full',
                    },
                ],
            },
        ],
    },
    { path: '**', component: NotFoundComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

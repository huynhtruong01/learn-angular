import { Blog2Component } from './components/blog2/blog2.component'
import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'
import { AccountDetailComponent } from './components/account-detail/account-detail.component'
import { AccountListComponent } from './components/account-list/account-list.component'
import { LoginComponent } from './components/auth/login/login.component'
import { BlogComponent } from './components/blog/blog.component'
import { HomeComponent } from './components/home/home.component'
import { NotFoundComponent } from './components/not-found/not-found.component'
import { ProductsDetailComponent } from './components/products-detail/products-detail.component'
import { RecipesComponent } from './components/recipes/recipes.component'
import { ServerItemComponent } from './components/servers/server-item/server-item.component'
import { ServersComponent } from './components/servers/servers.component'
import { Servers2Component } from './components/servers2/servers2.component'
import { ShoppingItemComponent } from './components/shopping-list/shopping-item/shopping-item.component'
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component'
import { AuthGuardService } from './services/auth-guard.service'
import { BlogListComponent } from './components/blog-list/blog-list.component'

const routes: Routes = [
    {
        path: '',
        canActivate: [AuthGuardService],
        component: HomeComponent,
    },
    {
        path: 'recipes',
        component: RecipesComponent,
    },
    {
        path: 'shoppings',
        loadChildren: () =>
            import('./components/shopping-list/shopping-list.module').then(
                (mod) => mod.ShoppingListModule
            ),
    },
    {
        path: 'accounts',
        component: AccountListComponent,
        children: [
            {
                path: ':id',
                component: AccountDetailComponent,
            },
        ],
    },
    {
        path: 'blogs',
        component: BlogComponent,
    },
    {
        path: 'blogs2',
        component: Blog2Component,
    },
    {
        path: 'blogs-list',
        component: BlogListComponent,
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
        canActivate: [AuthGuardService],
        loadChildren: () =>
            import('./components/product-list/product-list.module').then(
                (mod) => mod.ProductListModule
            ),
    },
    {
        path: 'products2',
        loadComponent: () =>
            import('./components/products/products.component').then(
                (mod) => mod.ProductsComponent
            ),
        pathMatch: 'full',
    },
    {
        path: 'products2/:id',
        component: ProductsDetailComponent,
        pathMatch: 'full',
    },
    {
        path: 'servers2',
        component: Servers2Component,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    { path: '**', component: NotFoundComponent },
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules,
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}

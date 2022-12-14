import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ShoppingItemComponent } from './shopping-item/shopping-item.component'
import { ShoppingListComponent } from './shopping-list.component'

const routes: Routes = [
    {
        path: '',
        component: ShoppingListComponent,
    },
    {
        path: ':id',
        component: ShoppingItemComponent,
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ShoppingListRouting {}

import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AccountDetailComponent } from './components/account-detail/account-detail.component'
import { AccountFormComponent } from './components/account-form/account-form.component'
import { AccountItemComponent } from './components/account-list/account-item/account-item.component'
import { AccountListComponent } from './components/account-list/account-list.component'
import { ActiveUsersComponent } from './components/active-users/active-users.component'
import { HeaderComponent } from './components/header/header.component'
import { InactiveUsersComponent } from './components/inactive-users/inactive-users.component'
import { ModalDeleteComponent } from './components/modals/modal-delete/modal-delete.component'
import { NotFoundComponent } from './components/not-found/not-found.component'
import { ProductDetailComponent } from './components/product-detail/product-detail.component'
import { ProductAddComponent } from './components/product-list/product-add/product-add.component'
import { ProductEditComponent } from './components/product-list/product-edit/product-edit.component'
import { ProductFormComponent } from './components/product-list/product-form/product-form.component'
import { ProductItemComponent } from './components/product-list/product-item/product-item.component'
import { ProductListComponent } from './components/product-list/product-list.component'
import { RecipesComponent } from './components/recipes/recipes.component'
import { ServerItemComponent } from './components/servers/server-item/server-item.component'
import { ServersComponent } from './components/servers/servers.component'
import { ShoppingItemComponent } from './components/shopping-list/shopping-item/shopping-item.component'
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component'
import { HomeComponent } from './features/home/home.component'
import { FormatDatePipe } from './pipes/format-date.pipe'
import { TruncatePipe } from './pipes/truncate.pipe'
import { UserService } from './services/user.service';
import { Servers2Component } from './components/servers2/servers2.component';
import { FilterPipe } from './pipes/filter.pipe';
import { LoginComponent } from './components/auth/login/login.component'

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        AccountFormComponent,
        AccountListComponent,
        AccountItemComponent,
        ActiveUsersComponent,
        InactiveUsersComponent,
        HomeComponent,
        ShoppingListComponent,
        ShoppingItemComponent,
        RecipesComponent,
        AccountDetailComponent,
        ServersComponent,
        ServerItemComponent,
        NotFoundComponent,
        ProductListComponent,
        ProductItemComponent,
        ProductDetailComponent,
        ProductAddComponent,
        ProductFormComponent,
        ModalDeleteComponent,
        ProductEditComponent,
        FormatDatePipe,
        TruncatePipe,
        Servers2Component,
        FilterPipe,
        LoginComponent,
    ],
    imports: [BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule],
    providers: [UserService],
    bootstrap: [AppComponent],
})
export class AppModule {}

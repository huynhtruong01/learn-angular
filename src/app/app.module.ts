import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AccountFormComponent } from './components/account-form/account-form.component'
import { AccountItemComponent } from './components/account-list/account-item/account-item.component'
import { AccountListComponent } from './components/account-list/account-list.component'
import { ActiveUsersComponent } from './components/active-users/active-users.component'
import { HeaderComponent } from './components/header/header.component'
import { InactiveUsersComponent } from './components/inactive-users/inactive-users.component'
import { RecipesComponent } from './components/recipes/recipes.component'
import { ShoppingItemComponent } from './components/shopping-list/shopping-item/shopping-item.component'
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component'
import { HomeComponent } from './features/home/home.component'
import { UserService } from './services/user.service';
import { AccountDetailComponent } from './components/account-detail/account-detail.component';
import { ServersComponent } from './components/servers/servers.component';
import { ServerItemComponent } from './components/servers/server-item/server-item.component';
import { NotFoundComponent } from './components/not-found/not-found.component'

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
    ],
    imports: [BrowserModule, FormsModule, AppRoutingModule],
    providers: [UserService],
    bootstrap: [AppComponent],
})
export class AppModule {}

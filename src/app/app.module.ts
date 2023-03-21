import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AccountDetailComponent } from './components/account-detail/account-detail.component'
import { AccountFormComponent } from './components/account-form/account-form.component'
import { AccountItemComponent } from './components/account-list/account-item/account-item.component'
import { AccountListComponent } from './components/account-list/account-list.component'
import { ActiveUsersComponent } from './components/active-users/active-users.component'
import { LoginComponent } from './components/auth/login/login.component'
import { HeaderComponent } from './components/header/header.component'
import { InactiveUsersComponent } from './components/inactive-users/inactive-users.component'
import { ModalDeleteComponent } from './components/modals/modal-delete/modal-delete.component'
import { NotFoundComponent } from './components/not-found/not-found.component'
import { ProductsDetailComponent } from './components/products-detail/products-detail.component'
import { ProductsComponent } from './components/products/products.component'
import { RecipesComponent } from './components/recipes/recipes.component'
import { ServerItemComponent } from './components/servers/server-item/server-item.component'
import { ServersComponent } from './components/servers/servers.component'
import { Servers2Component } from './components/servers2/servers2.component'
import { HomeComponent } from './features/home/home.component'
import { AuthInterceptorService } from './interceptors/auth-interceptor.service'
import { LoginInterceptorService } from './interceptors/login-interceptor.service'
import { FilterPipe } from './pipes/filter.pipe'
import { FormatDatePipe } from './pipes/format-date.pipe'
import { TruncatePipe } from './pipes/truncate.pipe'
import { UserService } from './services/user.service';
import { BlogComponent } from './components/blog/blog.component';
import { Blog2Component } from './components/blog2/blog2.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { ContentComponent } from './components/content/content.component'

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
        RecipesComponent,
        AccountDetailComponent,
        ServersComponent,
        ServerItemComponent,
        NotFoundComponent,
        ModalDeleteComponent,
        FormatDatePipe,
        TruncatePipe,
        Servers2Component,
        FilterPipe,
        LoginComponent,
        ProductsDetailComponent,
        BlogComponent,
        Blog2Component,
        BlogListComponent,
        ContentComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        ProductsComponent,
        RouterModule,
    ],
    providers: [
        UserService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptorService,
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoginInterceptorService,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}

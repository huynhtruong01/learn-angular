import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AboutComponent } from './features/about/about.component'
import { BooksComponent } from './features/books/books.component'
import { ContactComponent } from './features/contact/contact.component'
import { HomeComponent } from './features/home/home.component'

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: 'books',
        component: BooksComponent,
    },
    {
        path: 'contact',
        component: ContactComponent,
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

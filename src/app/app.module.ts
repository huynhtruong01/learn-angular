import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AboutComponent } from './features/about/about.component'
import { BookItemComponent } from './features/book-item/book-item.component'
import { BooksComponent } from './features/books/books.component'
import { ContactComponent } from './features/contact/contact.component'
import { HeaderComponent } from './features/header/header.component'
import { HomeComponent } from './features/home/home.component'
import { MainComponent } from './features/main/main.component'
import { TestComponent } from './test/test.component'

@NgModule({
    declarations: [
        AppComponent,
        BooksComponent,
        BookItemComponent,
        HeaderComponent,
        MainComponent,
        TestComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent,
    ],
    imports: [BrowserModule, FormsModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

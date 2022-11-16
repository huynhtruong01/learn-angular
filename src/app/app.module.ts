import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { BooksComponent } from './features/books/books.component';
import { BookItemComponent } from './features/book-item/book-item.component';
import { HeaderComponent } from './features/header/header.component';
import { MainComponent } from './features/main/main.component';
import { TestComponent } from './test/test.component'

@NgModule({
    declarations: [AppComponent, BooksComponent, BookItemComponent, HeaderComponent, MainComponent, TestComponent],
    imports: [BrowserModule, FormsModule],
    bootstrap: [AppComponent],
})
export class AppModule {}

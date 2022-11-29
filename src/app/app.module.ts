import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { RecipeDetailComponent } from './features/recipes/recipe-detail/recipe-detail.component'
import { RecipeListComponent } from './features/recipes/recipe-list/recipe-list.component'
import { RecipesComponent } from './features/recipes/recipes.component'
import { ShoppingEditComponent } from './features/shopping-list/shopping-edit/shopping-edit.component'
import { ShoppingListComponent } from './features/shopping-list/shopping-list.component';
import { RecipeItemComponent } from './features/recipes/recipe-list/recipe-item/recipe-item.component'

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ShoppingListComponent,
        RecipesComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        ShoppingEditComponent,
        RecipeItemComponent,
    ],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

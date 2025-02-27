import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeListComponent } from './component/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './component/recipe-detail/recipe-detail.component';
import { RecipeFormComponent } from './component/recipe-form/recipe-form.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   FormsModule,
    // RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

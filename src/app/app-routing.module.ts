import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailComponent } from './component/recipe-detail/recipe-detail.component';
import { RecipeFormComponent } from './component/recipe-form/recipe-form.component';
import { RecipeListComponent } from './component/recipe-list/recipe-list.component';
// import { FormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';


const routes:Routes=[
  {path:"",redirectTo:"/recipes",pathMatch:"full"},
  {path:"/recipes",component:RecipeListComponent},
  {path:"recipes/:id",component:RecipeDetailComponent},
  {path:"add-recipe",component:RecipeFormComponent},
  {path:"edit-recipe/:id",component:RecipeFormComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from 'src/app/model/recipe.model';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent  {
  name:string="";
  cuisine:string="";
  description:string="";

  constructor(private route:ActivatedRoute,private router:Router,private recipeService:RecipeService){}

  addRecipe(){
    const newRecipe={
      id:Math.random(),
      name:this.name,
      cuisine:this.cuisine,
      description:this.description
    };
    this.recipeService.addRecipes(newRecipe);
    alert("Recipe Added Successfully");
  }
}


  // recipes:Recipe[]=[{id:0,name:"",cuisine:"",description:""}];
  // isEditMode=false;


  // ngOnInit(): void {
  //   const id=this.route.snapshot.params['id'];
  //   if(id){
  //     this.isEditMode=true;
  //     this.recipes=this.recipeService.getRecipeById(id);
  //   }
  // }


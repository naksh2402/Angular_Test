import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from 'src/app/model/recipe.model';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit  {

  recipe:Recipe={id:0,name:"",cuisine:"",description:""};
  isEditMode=false;

  // name:string="";
  // cuisine:string="";
  // description:string="";

  constructor(private route:ActivatedRoute,private router:Router,private recipeService:RecipeService){}
  ngOnInit(): void {
   const id=this.route.snapshot.params['id'];
   if(id){ 
     this.isEditMode=true;
     this.recipe=this.recipeService.getRecipeById(+id)|| this.recipe;
   }   
  }
  saveRecipe(){
    if(!this.recipe.name || !this.recipe.cuisine || !this.recipe.description){
      alert("Please fill all the fields");
      return;
    }
    if(this.isEditMode){
      this.recipeService.updateRecipe(this.recipe);
      alert("Recipe upDated Successfully");
    }else{
      this.recipeService.addRecipes(this.recipe);
      alert("Recipe Added Successfully");
    }
    this.router.navigate(['/recipes']);
   
  }
}
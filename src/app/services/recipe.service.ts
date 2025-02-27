import { Injectable } from '@angular/core';
import {Recipe} from "../model/recipe.model";


export class RecipeService {
  private recipes:Recipe[]=[
    {id:1,name:"Shahi Paneer",cuisine:"Indian",description:"Delicious Shahi Paneer"},
    {id:2,name:"Chicken Biryani",cuisine:"Indian",description:"Soft and Tender Chicken Biryani"},
    {id:3,name:"Pasta",cuisine:"Italian",description:"Delicious Pasta"}
  ];
  constructor() { }

  getRecipe(){
    return this.recipes;
  }

  getRecipeById(id:number){
  return this.recipes.find((item)=>item.id===id);
  }

   addRecipes(recipe:Recipe){
    recipe.id=this.recipes.length+1;
    this.recipes.push(recipe);
  }

  updateRecipe(updatedRecipe:Recipe){
    let index=this.recipes.findIndex((item)=>item.id===updatedRecipe.id);
    if(index!==-1){
      this.recipes[index]=updatedRecipe;
    }
  }
}

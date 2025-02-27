import { Injectable } from '@angular/core';
import {Recipe} from "../model/recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes:Recipe[]=[
    {id:1,name:"Shahi Paneer",cuisine:"Indian",description:`Soak cashew nuts in hot water for 15-20 minutes. 

2) Warm up the heavy cream in the microwave for a few seconds. Take few saffron strands, crush and add to the warm cream. Mix and keep it aside. Over time saffron releases its flavor and color into the cream.

3) Now take onion, ginger, garlic, green chili, cloves, cinnamon and cardamoms in a saucepan. Also, add ⅓ cup of water and turn the heat on medium. Let it cook for 8-10 minutes or until the onions become soft. Let it cool down.

4) Now make three kinds of purees in the following order: First, make cashew paste. Then grind cooked onion into a fine paste and then grind roughly chopped tomatoes into a puree.`},
   
    {id:2,name:"Chicken Biryani",cuisine:"Indian",description:`Soak cashew nuts in hot water for 15-20 minutes. 

2) Warm up the heavy cream in the microwave for a few seconds. Take few saffron strands, crush and add to the warm cream. Mix and keep it aside. Over time saffron releases its flavor and color into the cream.

3) Now take onion, ginger, garlic, green chili, cloves, cinnamon and cardamoms in a saucepan. Also, add ⅓ cup of water and turn the heat on medium. Let it cook for 8-10 minutes or until the onions become soft. Let it cool down.

4) Now make three kinds of purees in the following order: First, make cashew paste. Then grind cooked onion into a fine paste and then grind roughly chopped tomatoes into a puree.`},
    {id:3,name:"Pasta",cuisine:"Italian",description:`Soak cashew nuts in hot water for 15-20 minutes. 

2) Warm up the heavy cream in the microwave for a few seconds. Take few saffron strands, crush and add to the warm cream. Mix and keep it aside. Over time saffron releases its flavor and color into the cream.

3) Now take onion, ginger, garlic, green chili, cloves, cinnamon and cardamoms in a saucepan. Also, add ⅓ cup of water and turn the heat on medium. Let it cook for 8-10 minutes or until the onions become soft. Let it cool down.

4) Now make three kinds of purees in the following order: First, make cashew paste. Then grind cooked onion into a fine paste and then grind roughly chopped tomatoes into a puree.`}
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

  updateRecipe(updatedRecipe:any){
    let index=this.recipes.findIndex((item)=>item.id===updatedRecipe.id);
    if(index!==-1){
      this.recipes[index]=updatedRecipe;
    }
  }
}

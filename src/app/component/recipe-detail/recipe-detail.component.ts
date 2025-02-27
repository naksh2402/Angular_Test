import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/model/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe:Recipe|undefined;

  constructor(private route:ActivatedRoute,private recipeService:RecipeService){}

  ngOnInit(): void {
    const id=this.route.snapshot.params['id'];
    this.recipe=this.recipeService.getRecipeById(id);
  }
}

import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit{

  // recipes is type of Recipe
  recipes: Recipe[] =[
    new Recipe('A Test Recipe','This is simply a test','https://pixabay.com/photos/food-meat-recipe-power-pork-1459693/')
  ];

  constructor(){}

  ngOnInit(): void {
    
  }

}

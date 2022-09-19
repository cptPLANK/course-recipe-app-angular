import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This ist simply a test',
      'https://as1.ftcdn.net/v2/jpg/05/19/56/82/1000_F_519568205_d6RLzbCq4INee6Akf1t0FqsOEqGpGxIH.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This ist simply a test',
      'https://as1.ftcdn.net/v2/jpg/05/19/56/82/1000_F_519568205_d6RLzbCq4INee6Akf1t0FqsOEqGpGxIH.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}

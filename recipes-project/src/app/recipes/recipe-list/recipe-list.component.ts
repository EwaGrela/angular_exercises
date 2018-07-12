import { Component, OnInit } from '@angular/core';
import {Recipe } from '../recipe.model';
import { RecursiveTemplateAstVisitor } from '@angular/compiler';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('Test Recipe', 'A recipe added just for testing',
    'https://akademiasmaku.pl/upload/recipes/2287/big/pierogi-z-karpia-2287.jpg'),
    new Recipe('Test Recipe', 'A recipe added just for testing',
    'https://akademiasmaku.pl/upload/recipes/2287/big/pierogi-z-karpia-2287.jpg'),
    new Recipe('Test Recipe', 'A recipe added just for testing',
    'https://akademiasmaku.pl/upload/recipes/2287/big/pierogi-z-karpia-2287.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}

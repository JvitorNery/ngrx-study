import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import * as fromRecipe from './../store/recipe.reducers';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipeState: Observable<fromRecipe.State>;
  subscription: Subscription;

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute,
              private store: Store<fromRecipe.FeatureState>) {
  }

  ngOnInit() {
    this.recipeState = this.store.select('recipes');
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}

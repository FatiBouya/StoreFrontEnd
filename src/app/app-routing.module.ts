import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { CardFoodComponent } from './shared/card-food/card-food.component';

const routes: Routes = [
  {
    path:  '', component:HomeComponent
  },
  {
    path:  'search/:searchName', component:HomeComponent
  },
  {
    path:  'foods/:id', component:CardFoodComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

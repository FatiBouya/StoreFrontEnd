import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../services/food.service';
import { ActivatedRoute } from '@angular/router';
import { Food } from '../models/Food';

@Component({
  selector: 'app-card-food',
  templateUrl: './card-food.component.html',
  styleUrl: './card-food.component.css'
})
export class CardFoodComponent implements OnInit {

  food!:Food;
  constructor(private foodService: FoodService, activatedRoute: ActivatedRoute){

  activatedRoute.params.subscribe((params)=>{
    if(params.id)
  {
    this.food=this.foodService.getFoodsById(params.id)
  }

})
}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}

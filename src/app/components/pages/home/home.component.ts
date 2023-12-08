import { Component , OnInit} from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  layout: string = "list";


  foods :Food[]=[];
  constructor(private foodService: FoodService, activatedRoute: ActivatedRoute){
    activatedRoute.params.subscribe((params)=>{
      if(params.searchName)
    {
      this.foods=this.foodService.getSearchFoodsByname(params.searchName)
    }
  else{
    this.foods= foodService.getAll();

  }})
    
  }

  getSeverity(food: Food) {
    switch (food.inventoryStatus) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
};

  ngOnInit():void{

  }

}

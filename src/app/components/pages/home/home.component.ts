import { Component , OnInit} from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  layout: string = "list";


  foods :Food[]=[];
  constructor(private foodService: FoodService){
    this.foods= foodService.getAll();
    console.log(this.foods)
  }
  name: 'success' | 'info' | 'warning' | 'error' | undefined

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

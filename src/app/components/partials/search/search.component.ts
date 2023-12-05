import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{
  
  searchName='';
  constructor(activatedRoute:ActivatedRoute,private router:Router){
    activatedRoute.params.subscribe((params)=>{
      if(params.searchName)
    {
      this.searchName=params.searchName
    }
  })
  }

  search(term:string){
    if(term){
      this.router.navigateByUrl('/search/'+term)
    }
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}

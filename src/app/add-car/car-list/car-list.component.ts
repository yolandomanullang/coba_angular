import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  addCar(){
    this.router.navigate(['add-car'])
  }

}

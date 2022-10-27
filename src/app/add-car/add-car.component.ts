import { Component, OnInit } from '@angular/core';
import { Car } from '../models/car';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  car = new Car()

  constructor() { }

  ngOnInit(): void {
  }
  
  save(){
    return console.log(this.car);
  }

}

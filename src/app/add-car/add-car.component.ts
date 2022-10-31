import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Car } from '../models/car';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  titlePage : String = "Add New Car"
  car = new Car()

  constructor(private carService: CarService, private router: Router) { }

  ngOnInit(): void {
    if (history.state) {
      const s = history.state;
      if (s.data != undefined) {
        this.car = s.data
        this.titlePage = "Edit Data Car"
      }

    }
  }

  save() {
    if (this.car.carName == undefined) {
      alert("Car Name wajib diisi")
    } else if (this.car.number == undefined) {
      alert("Car number wajib diisi")
    } else if (this.car.color == undefined) {
      alert("Car color wajib diisi")
    } else if (this.car.type == undefined) {
      alert("Car Type wajib diisi")
    } else {
      this.carService.addNewCar(this.car).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['car-list'])
        }
      ), (error: any) => {
        console.log(error)

      }
    }
  }

  goBack() {
    this.router.navigate(['car-list'])
  }
}

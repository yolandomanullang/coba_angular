import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Car } from '../models/car';
import { CarService } from '../services/car.service';
import { CommonAlert } from '../shared/common-alert';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  titlePage: string = "Add New Car"
  car = new Car()

  constructor(private carService: CarService, private router: Router, private commonAlert:CommonAlert) { }

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
      this.commonAlert.showWarningAlert("Car Name wajib diisi")
    } else if (this.car.number == undefined) {
      this.commonAlert.showWarningAlert("Car number wajib diisi")
    } else if (this.car.color == undefined) {
      this.commonAlert.showWarningAlert("Car color wajib diisi")
    } else if (this.car.type == undefined) {
      this.commonAlert.showWarningAlert("Car Type wajib diisi")
    } else {
      this.carService.addNewCar(this.car).subscribe(
        data => {
          console.log(data)
          this.commonAlert.showSuksesAlert(this.titlePage,'car-list')
        }, error => {
          console.log("Error => " + error)
          this.commonAlert.showErrorAlert(error.message)
        }
      )
    }
  }

  goBack() {
    this.router.navigate(['car-list'])
  }
}

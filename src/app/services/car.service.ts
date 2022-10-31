import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient:HttpClient) { }

  addNewCar(car: Car){
    return this.httpClient.post("/api/api/car/addNewCar",car)
  }
}

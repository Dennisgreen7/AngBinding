import { Component, OnInit } from '@angular/core';
import { Car } from '../interfaces/car';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  isValid: boolean = false;
  showCar: boolean = false;
  chosenCar: Car = {carName:'',img:''};
  cars: Car []= [
    {carName:'Ferrari',img:'dist/assets/images/Ferrar.jpg'},
    {carName:'Lamborghini',img:'dist/assets/images/Lamborghini.jpg'},
    {carName:'Mercedes-Benz',img:'dist/assets/images/MercedesBenz.jpg'}
  ];
  getCar(car: string) {
    if (car === "Select") {
      this.isValid = true;
      this.showCar = false;
      return;
    }
    else {
      this.isValid = false;
    }
    this.chosenCar = this.cars[parseInt(car)];
    this.showCar = true;
  }
}

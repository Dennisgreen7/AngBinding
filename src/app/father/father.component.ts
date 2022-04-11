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
    {carName:'Ferrari',img:'https://upload.wikimedia.org/wikipedia/commons/4/4e/Red_2019_Ferrari_SF90_Stradale_%2848264238897%29.jpg'},
    {carName:'Lamborghini',img:'docs/assets/images/Lamborghini.jpg'},
    {carName:'Mercedes-Benz',img:'docs/assets/images/MercedesBenz.jpg'}
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

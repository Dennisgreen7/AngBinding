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
    {carName:'Lamborghini',img:'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/gateway/ownership/over/gate_ownership_over_01_m.jpg'},
    {carName:'Mercedes-Benz',img:'https://www.forbes.com/wheels/wp-content/uploads/2022/01/Mercedes-Benz-Vision-EQXX-1200.jpg'}
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

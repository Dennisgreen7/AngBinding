import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../interfaces/car';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  @Input() item:Car = {carName:"",img:''}
  ngOnInit(): void {
  }
}

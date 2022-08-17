import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // creating a array of objects for sample data
  salesPersonList: SalesPerson [] = [
    new SalesPerson("Maurice", "Jackson", "maurice.jackson@gmail.com", 50000),
    new SalesPerson("Sam", "Williams", "sam.williams@gmail.com", 70000),
    new SalesPerson("Tina", "Trackson", "tina.trackson@gmail.com", 90000),
    new SalesPerson("Larry", "Jackson", "larry.jackson@gmail.com", 30000),
    new SalesPerson("Ray", "Reid", "ray.reid@gmail.com", 10000)
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

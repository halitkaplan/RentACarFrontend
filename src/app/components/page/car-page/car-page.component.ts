import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.css']
})
export class CarPageComponent implements OnInit {
  carFilterText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  receiveCarFilterText($event: any) {
    this.carFilterText = $event;
  }
}

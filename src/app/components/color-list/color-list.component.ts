import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css']
})
export class ColorListComponent implements OnInit {

  

  colors:Color[]=[];
  currentColor:Color;

  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.getColors();
  }
  getColors(){
    this.colorService.getColors().subscribe(response => {
      this.colors = response.data;
    })
  }

  getCurrentColorClass(color:Color) {
    if (color==this.currentColor) {
      return "item";
    }
    else{
      return "item"
    }
    
  }

  setCurrentColor(color:Color){
    this.currentColor=color;
  }

  getAllColorClass(){
    if (!this.currentColor) {
      return "item"
      
    }
    else{
      return "item"
    }
  }

  getAllCars(){
    this.getAllCars();
  }
}

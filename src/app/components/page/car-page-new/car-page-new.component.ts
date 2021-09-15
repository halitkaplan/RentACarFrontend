
import { Component, OnInit } from '@angular/core';
import { Brand } from "src/app/models/brand";
import { BrandService } from "src/app/services/brand.service";

@Component({
  selector: 'app-car-page-new',
  templateUrl: './car-page-new.component.html',
  styleUrls: ['./car-page-new.component.css']
})
export class CarPageNewComponent implements OnInit {
  brands:Brand[]=[];
  currentBrand : Brand;
  

  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrands();
    }
  
    getBrands(){
      this.brandService.getBrands().subscribe((response) => {
        this.brands = response.data;
      });
    }
  
    getCurrentBrandClass(brand:Brand){
      if (brand==this.currentBrand) {
        return "item"
      }
      else{
        return "item"
      }
    }
  
    setCurrentBrand(brand:Brand){
      this.currentBrand=brand;
    }
  
    getAllBrandClass(){
      if (!this.currentBrand) { 
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

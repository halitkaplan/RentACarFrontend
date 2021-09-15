import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ListResponseModel } from "../models/listResponseModel";
import { Car } from '../models/car';
import { Brand } from '../models/brand';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl= 'https://localhost:44323/api/';
 
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>> {
    let newPath =this.apiUrl + 'car/getall';
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrandId(brandId:number) : Observable<ListResponseModel<Car>>{
    let newPath= this.apiUrl +'car/getbybrandid?id=' + brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
    
    
  }

}




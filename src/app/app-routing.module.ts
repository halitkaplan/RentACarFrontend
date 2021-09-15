import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CarPageComponent } from './components/page/car-page/car-page.component';
import { HomepageComponent } from "./components/page/homepage/homepage.component";
import { CarPageNewComponent } from "./components/page/car-page-new/car-page-new.component";

const routes: Routes = [
  {path: "", component:HomepageComponent},
  {path: 'cars', component:CarPageComponent},

  {path: 'homepage', component:HomepageComponent},
  {path: "car/brand/:brandId", component:CarComponent},
  {path: "car/color/:colorId", component:CarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

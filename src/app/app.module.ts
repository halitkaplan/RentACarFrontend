import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ModalComponent } from './components/modal/modal.component';
import { SearchComponent } from './components/search/search.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CardComponent } from './components/page/card/card/card.component';
import { CarPageComponent } from './components/page/car-page/car-page.component';

import { Routes, RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './components/page/homepage/homepage.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrandListComponent } from './components/brand-list/brand-list.component';
import { CarPageNewComponent } from './components/page/car-page-new/car-page-new.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { ColorComponent } from './components/color/color.component';

const appRoutes: Routes=[
  {path: 'cars', component:CarComponent},
  {path: 'homepage',component:HomepageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BrandComponent,    
    NavbarComponent, CarouselComponent, ModalComponent, SearchComponent, CommentsComponent, CardComponent, CarPageComponent, HomepageComponent, FooterComponent, BrandListComponent, CarPageNewComponent, ColorListComponent, ColorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

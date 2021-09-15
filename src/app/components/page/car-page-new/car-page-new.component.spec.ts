import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarPageNewComponent } from './car-page-new.component';

describe('CarPageNewComponent', () => {
  let component: CarPageNewComponent;
  let fixture: ComponentFixture<CarPageNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarPageNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarPageNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelBookingSearchComponent } from './hotel-booking-search.component';

describe('HotelBookingSearchComponent', () => {
  let component: HotelBookingSearchComponent;
  let fixture: ComponentFixture<HotelBookingSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelBookingSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelBookingSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-rooms',
  templateUrl: './hotel-rooms.component.html',
  styleUrls: ['./hotel-rooms.component.scss']
})
export class HotelRoomsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  rooms = [
    {
      name: 'Double Room',
      price: '$75.9'
    },
    {
      name: 'Luxury Room',
      price: '$64.9'
    },
    {
      name: 'Premium Room',
      price: '$53.9'
    },
    {
      name: 'Classic Room',
      price: '$60.5'
    },
    {
      name: 'Budget Room',
      price: '$49.5'
    },
    {
      name: 'Single Room',
      price: '$64.9'
    },
  ]
}

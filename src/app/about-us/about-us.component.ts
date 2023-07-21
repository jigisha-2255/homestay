import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  aboutReason=[
    {
      icon:'fa-solid fa-seedling',
      name:'LIVE AMIDST NATURE',
      details:'Feel and experience nature in its fullest glory to refresh yourself.',
    },
    {
      icon:'fa-solid fa-house',
      name:'HERITAGE HOMESTAY',
      details:'Experience the charm of Kerala heritage that have been preserved throughout the ages.',
    },
    {
      icon:'fa-solid fa-hands',
      name:'FAMILY FRIENDLY',
      details:'The calm and comfortable environment will make your family feel at home.',
    },
]
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  aboutUs=[
    {
      name:'Things To Do',
      link:''
    },
    {
      name:'Services',
      link:''
    },
    {
      name:'Meet Our Team',
      link:''
    },
    {
      name:'Contact Us',
      link:''
    }
  ]

  quickLinks=[
    {
      name:'Ammenities',
      link:''
    },
    {
      name:'Pricing',
      link:''
    },
    {
      name:'Testimonials',
      link:''
    },
    {
      name:'Blog',
      link:''
    }
  ]

  footerInfo=[{
    address:'7882 Longbranch Rd Wooster, New York',
    contact:'+(84) 4130 0555'
  }]

}

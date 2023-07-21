import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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


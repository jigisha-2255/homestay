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

  facilities = [
    {
      icons:'fa fa-shield',
      name:'24/7 SECURITY',
      details:'We take safety seriously through our dedicated team that stands watch.'
    },
    {
      icons:'fa fa-wifi',
      name:'FREE WIFI',
      details:'All rooms have good high speed Wi-Fi connectivity. watch. 24/7.'
    },
    {
      icons:'fa fa-droplet',
      name:'WASHER DRYER',
      details:"With three workout facilities, it's easy to stay active all year.watch. 24/7."
    },
    {
      icons:'fa fa-paw',
      name:'ANIMAL & PET CARE',
      details:'Everyday chores made easier equals more time for living.watch. 24/7.'
    },
  ]

  thingsToDo=[
    {
      image:'assets/h1-banner03.jpg',
      name:'OUTDOOR BBQ',
      details:'Ami Homestay outdoor BBQ tour is a truly unique & interactive experience.'
    },
    {
      image:'assets/h1-banner04.jpg',
      name:'NATURE WALK',
      details:'Stroll around and fill your lungs with pure oxygen.'
    },
    {
      image:'assets/h1-banner05.jpg',
      name:'LAKE SWIMMING',
      details:'The water is very clean, fresh and safe, best for your health.'
    },
  ]

  accommodations=[
    {
      image:"assets/room-01.jpg",
      name:'PREMIUM ROOM',
      price:'$75.9'
    },
    {
      image:'assets/room-02.jpg',
      name:'DOUBLE ROOM',
      price:'$64.9'
    }
  ]
  footerInfo=[{
    address:'7882 Longbranch Rd Wooster, New York',
    contact:'+(84) 4130 0555'
  }]

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-places-to-visit',
  templateUrl: './places-to-visit.component.html',
  styleUrls: ['./places-to-visit.component.scss']
})
export class PlacesToVisitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  entertainments=[
    {
      image:'assets/place03.jpg',
      distance:'15',
      name:'LUMBINI GARDENS',
      details:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      image:'assets/place04.jpg',
      distance:'11',
      name:'FUN WORLD',
      details:'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit'
    },
    {
      image:'assets/place05.jpg',
      distance:'9',
      name:'COMMERCIAL STREET',
      details:'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat'
    }
  ]

  places=[
    {
      image:'assets/place06.jpg',
      distance:'15',
      name:'BANERGTA WATERFALL',
      details:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      image:'assets/place07.jpg',
      distance:'9',
      name:'CUBBON FARM',
      details:'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit'
    },
    {
      image:'assets/place08.jpg',
      distance:'11',
      name:'MUSICAL FOUNTAIN',
      details:'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat'
    }
  ]
  landmarks=[
    {
      image:'assets/place09.jpg',
      distance:'15',
      name:'SHIVOHAM TEMPLE',
      details:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      image:'assets/place10.jpg',
      distance:'9',
      name:'SUMMER PALACE',
      details:'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit'
    },
    {
      image:'assets/place11.jpg',
      distance:'11',
      name:'FREEDOM PARK',
      details:'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat'
    }
  ]
}

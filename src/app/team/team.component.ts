import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  awesomePeople=[
    {
      image:'assets/ourteam03.jpg',
      name:'Alicia Hilton',
      designation:'Ami Homestay Owner',
      details:"We offer spacious and luxurious rooms that are designed to fit anyone's budget and taste."
    },
    {
      image:'assets/ourteam04.jpg',
      name:'Emma Hilton',
      designation:'Ami Homestay Owner',
      details:"We would be providing homely food in our dining area, your taste buds are sure to dance with delight any time"
    },
    {
      image:'assets/ourteam05.jpg',
      name:'Green Hilton',
      designation:'Ami Homestay Owner',
      details:"If relaxing is more your style, be sure to spend your afternoon unwinding and relaxing in pure bliss"
    }
  ]

}

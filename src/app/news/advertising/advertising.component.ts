import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advertising',
  templateUrl: './advertising.component.html',
  styleUrls: ['./advertising.component.scss']
})
export class AdvertisingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  advertising=[
    {
      image:'assets/blog-1.jpg',
      category:'FOODS,  HOTEL',
      date:'August 6, 2019',
      heading:'Best Summer Experiences in New York',
      details:'What this means is that mobile users can now be served smaller file sizes, which in turn speeds up the delivery of the content. Also over time this can save quite a bit of bandwidth, which in turn can save you money.'
    },
  ]

}

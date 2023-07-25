import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  blogs=[
    {
      image:'assets/blog-1.jpg',
      category:'FOODS,  HOTEL',
      date:'August 6, 2019',
      heading:'6 Safe Caving Vacations & Spelunking Trips | Explore SE Asia',
      details:'What this means is that mobile users can now be served smaller file sizes, which in turn speeds up the delivery of the content. Also over time this can save quite a bit of bandwidth, which in turn can save you money.'
    },
    {
      image:'assets/blog-2.jpg',
      category:'HOTEL,  ORIENTAL SPA',
      date:'August 6, 2019',
      heading:'7 Amazing Hotels with Infinity Pools | Rooftop Swimming Pools',
      details:'What this means is that mobile users can now be served smaller file sizes, which in turn speeds up the delivery of the content. Also over time this can save quite a bit of bandwidth, which in turn can save you money.'
    },
    {
      image:'assets/blog-3.jpg',
      category:'FOODS,  RESTAURANT',
      date:'August 6, 2019',
      heading:'7 Wilderness Hotels & Resorts Enticing Guests to Stay in the Jungle',
      details:'What this means is that mobile users can now be served smaller file sizes, which in turn speeds up the delivery of the content. Also over time this can save quite a bit of bandwidth, which in turn can save you money.'
    },
    {
      image:'assets/blog-4.jpg',
      category:'RESTAURANT,  SHOPPING',
      date:'August 6, 2019',
      heading:'Pride Month 2019 | World’s Biggest Gay Parades & LGBTQ Marches',
      details:'What this means is that mobile users can now be served smaller file sizes, which in turn speeds up the delivery of the content. Also over time this can save quite a bit of bandwidth, which in turn can save you money.'
    },
    {
      image:'assets/blog-5.jpg',
      category:'RESTAURANT,  SHOPPING',
      date:'August 6, 2019',
      heading:'Bicycle Tours in Europe | 6 Bike-Friendly Cities & Fun Summer Vacays',
      details:'What this means is that mobile users can now be served smaller file sizes, which in turn speeds up the delivery of the content. Also over time this can save quite a bit of bandwidth, which in turn can save you money.'
    },
    {
      image:'assets/blog-6.jpg',
      category:'FOODS,  SHOPPING',
      date:'August 6, 2019',
      heading:'5 Quiet Hotels that Guarantee Good Sleep & Dreamy Holidays',
      details:'What this means is that mobile users can now be served smaller file sizes, which in turn speeds up the delivery of the content. Also over time this can save quite a bit of bandwidth, which in turn can save you money.'
    },
    {
      image:'assets/blog-7.jpg',
      category:'FOODS,  SHOPPING',
      date:'August 6, 2019',
      heading:'10 Asia Hotels with Hot Tubs, Jacuzzis & Open-Air Bathtubs',
      details:'What this means is that mobile users can now be served smaller file sizes, which in turn speeds up the delivery of the content. Also over time this can save quite a bit of bandwidth, which in turn can save you money.'
    },
    {
      image:'assets/blog-8.jpg',
      category:'HOTEL,  ORIENTAL SPA',
      date:'August 6, 2019',
      heading:'Helicopter Tours: Bird’s-Eye Views of UNESCO Sites & World Wonders',
      details:'What this means is that mobile users can now be served smaller file sizes, which in turn speeds up the delivery of the content. Also over time this can save quite a bit of bandwidth, which in turn can save you money.'
    },
    {
      image:'assets/blog-9.jpg',
      category:'FOODS,  HOTEL',
      date:'August 6, 2019',
      heading:'‘Tis the Season for Trekking the Himalayas | 5 Dreamy Hikes in Asia',
      details:'What this means is that mobile users can now be served smaller file sizes, which in turn speeds up the delivery of the content. Also over time this can save quite a bit of bandwidth, which in turn can save you money.'
    },
    {
      image:'assets/blog-10.jpg',
      category:'RESTAURANT,  SHOPPING',
      date:'August 6, 2019',
      heading:'6 Best Road Trips in the World | Driving Plans & Can’t-Miss Stops',
      details:'What this means is that mobile users can now be served smaller file sizes, which in turn speeds up the delivery of the content. Also over time this can save quite a bit of bandwidth, which in turn can save you money.'
    },
  ]
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  blogCategories=[
    {
      name:'Foods'
    },
    {
      name:'Hotel'
    },
    {
      name:'Oriental Spa'
    },
    {
      name:'Restaurant'
    },
    {
      name:'Shopping'
    },
  ]

  recentPosts=[
    {
      image:'assets/blog-1.jpg',
      heading:'6 SAFE CAVING VACATIONS &...',
      date:'August 6, 2019'
    },
    {
      image:'assets/blog-2.jpg',
      heading:'7 Amazing Hotels with Infinity Pools...',
      date:'August 6, 2019'
    },
    {
      image:'assets/blog-3.jpg',
      heading:'7 Wilderness Hotels & Resorts Enticing...',
      date:'August 6, 2019'
    },
    {
      image:'assets/blog-4.jpg',
      heading:'Pride Month 2019 | World’s Biggest Gay...',
      date:'August 6, 2019'
    },
    {
      image:'assets/blog-5.jpg',
      heading:'Bicycle Tours in Europe | 6 Bike-...',
      date:'August 6, 2019'
    },
  ]

  tags=[
    {
      name:'Advertising',
      link:'advertising'
    },
    {
      name:'Business',
      link:'business'
    },
    {
      name:'Camera',
      link:'camera'
    },
    {
      name:'Psd Template',
      link:'psdTemplate'
    },
    {
      name:'Responsive',
      link:'responsive'
    },
    {
      name:'Wordpress',
      link:'wordpress'
    }
  ]

}

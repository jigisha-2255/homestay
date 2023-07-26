import { Component, OnInit } from '@angular/core';
import { TabItem, Tabs, TabsInterface, TabsOptions } from 'flowbite';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  allTabs=[
    {
      image:'assets/gallery_01.jpg'
    },
    {
      image:'assets/gallery_02.jpg'
    },
    {
      image:'assets/gallery_03.jpg'
    },
    {
      image:'assets/gallery_04.jpg'
    },
    {
      image:'assets/gallery_05.jpg'
    },
    {
      image:'assets/gallery_06.jpg'
    },
    {
      image:'assets/gallery_07.jpg'
    },
    {
      image:'assets/gallery_08.jpg'
    }
  ]
  amenitiesTabs=[
    {
      image:'assets/gallery_01.jpg'
    },
    {
      image:'assets/gallery_02.jpg'
    }
  ]
  listTabs=[
    {
      image:'assets/gallery_03.jpg'
    },
    {
      image:'assets/gallery_04.jpg'
    }
  ]
  viewsTabs=[
    {
      image:'assets/gallery_05.jpg'
    },
    {
      image:'assets/gallery_06.jpg'
    }
  ]
  diningTabs=[
    {
      image:'assets/gallery_07.jpg'
    },
    {
      image:'assets/gallery_08.jpg'
    }
  ]
}

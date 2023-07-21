import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amenities',
  templateUrl: './amenities.component.html',
  styleUrls: ['./amenities.component.scss']
})
export class AmenitiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  amenities1=[
    {
      icon:'fa-solid fa-wifi',
      name:'FREE HIGH SPEED WIFI',
      details:'All rooms have good high speed Wi-Fi connectivity'
    },
    {
      icon:'fa-solid fa-utensils',
      name:'WELL EQUIPPED KITCHEN',
      details:'Fall in love with the neighborhood, a hub for culture, entertainment'
    },
    {
      icon:'fa-solid fa-wifi',
      name:'OUTDOOR BBQ AREA',
      details:'Ami Homestay does not serve alcoholic beverages.'
    },
    {
      icon:'fa-solid fa-couch',
      name:'FURNISHED ROOMS',
      details:"With three workout facilities, it's easy to stay active all year."
    }
  ]
  amenities2=[
    {
      icon:'fa-solid fa-person-swimming',
      name:'SWIMMING POOL',
      details:'Everyday chores made easier equals more time for living.'
    },
    {
      icon:'fa-solid fa-square-parking',
      name:'PARKING',
      details:'Enjoy our urban oasis filled with green lawns, tree-lined paths, athletic.'
    },
    {
      icon:'fa-solid fa-mug-saucer',
      name:'FREE BREAKFAST',
      details:'Tea and coffee making facilities are available in each room.'
    },
    {
      icon:'fa-solid fa-shield-halved',
      name:'24/7 SECURITY',
      details:'We take safety seriously through our dedicated team.'
    },
  ]
  benifits=[
    {
      index:1,
      name:'01. Unique & Scenic Setting',
      details:'Located at the foothills of the beautiful Kemmanagundi mountains and surrounded by rolling farmlands, our entire campus is filled with hundreds of species of ferns, fruits, flowers, plants & trees. We recreated a lush tropical garden so that you and your loved ones can relax & refresh in the midst of pristine nature & birdsongs.'
    },
    {
      index:2,
      name:'02. Best Amenities At The Best Price',
      details:'Located at the foothills of the beautiful Kemmanagundi mountains and surrounded by rolling farmlands, our entire campus is filled with hundreds of species of ferns, fruits, flowers, plants & trees. We recreated a lush tropical garden so that you and your loved ones can relax & refresh in the midst of pristine nature & birdsongs.'
    },
    {
      index:3,
      name:'03. Quick Access to Tourist Attractions',
      details:'Located at the foothills of the beautiful Kemmanagundi mountains and surrounded by rolling farmlands, our entire campus is filled with hundreds of species of ferns, fruits, flowers, plants & trees. We recreated a lush tropical garden so that you and your loved ones can relax & refresh in the midst of pristine nature & birdsongs.'
    },
    {
      index:4,
      name:'04. Campfire & Nature Walks',
      details:'Located at the foothills of the beautiful Kemmanagundi mountains and surrounded by rolling farmlands, our entire campus is filled with hundreds of species of ferns, fruits, flowers, plants & trees. We recreated a lush tropical garden so that you and your loved ones can relax & refresh in the midst of pristine nature & birdsongs.'
    },
    {
      index:5,
      name:'05. Independent Cottages',
      details:'Located at the foothills of the beautiful Kemmanagundi mountains and surrounded by rolling farmlands, our entire campus is filled with hundreds of species of ferns, fruits, flowers, plants & trees. We recreated a lush tropical garden so that you and your loved ones can relax & refresh in the midst of pristine nature & birdsongs.'
    },
    {
      index:6,
      name:'06. Major press and social media coverage',
      details:'Located at the foothills of the beautiful Kemmanagundi mountains and surrounded by rolling farmlands, our entire campus is filled with hundreds of species of ferns, fruits, flowers, plants & trees. We recreated a lush tropical garden so that you and your loved ones can relax & refresh in the midst of pristine nature & birdsongs.'
    },
    {
      index:7,
      name:'07. On-line availability and booking system',
      details:'Located at the foothills of the beautiful Kemmanagundi mountains and surrounded by rolling farmlands, our entire campus is filled with hundreds of species of ferns, fruits, flowers, plants & trees. We recreated a lush tropical garden so that you and your loved ones can relax & refresh in the midst of pristine nature & birdsongs.'
    },
]

}

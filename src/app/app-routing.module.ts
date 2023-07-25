import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { TeamComponent } from './team/team.component';
import { FaqComponent } from './faq/faq.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Home2Component } from './home2/home2.component';
import { Home3Component } from './home3/home3.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AmenitiesComponent } from './amenities/amenities.component';
import { PlacesToVisitComponent } from './places-to-visit/places-to-visit.component';
import { ThingsToDoComponent } from './things-to-do/things-to-do.component';
import { HotelBookingSearchComponent } from './hotel-booking-search/hotel-booking-search.component';
import { SingleRoomComponent } from './single-room/single-room.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NewsModule } from './news/news.module';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'home2',
    component:Home2Component
  },
  {
    path:'home3',
    component:Home3Component
  },
  {
    path:'aboutUs',
    component:AboutUsComponent
  },
  {
    path:'amenities',
    component:AmenitiesComponent
  },
  {
    path:'placesToVisit',
    component:PlacesToVisitComponent
  },
  {
    path:'thingsToDo',
    component:ThingsToDoComponent
  },
  {
    path:'hotelBookingSearch',
    component:HotelBookingSearchComponent
  },
  {
    path:'singleRoom',
    component:SingleRoomComponent
  },
  {
    path:'gallery',
    component:GalleryComponent
  },
  {
    path:'news',
    loadChildren: () => import('./news/news.module').then((m) => m.NewsModule),
  },
  {
    path:'team',
    component:TeamComponent
  },
  {
    path:'faq',
    component:FaqComponent
  },
  {
    path:'404',
    component:NotFoundComponent
  },
  {
    path:'contact',
    component:ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

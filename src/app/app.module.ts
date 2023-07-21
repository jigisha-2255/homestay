import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { TeamComponent } from './team/team.component';
import { FaqComponent } from './faq/faq.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HotelBookingSearchComponent } from './hotel-booking-search/hotel-booking-search.component';
import { SingleRoomComponent } from './single-room/single-room.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AmenitiesComponent } from './amenities/amenities.component';
import { PlacesToVisitComponent } from './places-to-visit/places-to-visit.component';
import { ThingsToDoComponent } from './things-to-do/things-to-do.component';
import { Home2Component } from './home2/home2.component';
import { Home3Component } from './home3/home3.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    TeamComponent,
    FaqComponent,
    NotFoundComponent,
    HotelBookingSearchComponent,
    SingleRoomComponent,
    AboutUsComponent,
    AmenitiesComponent,
    PlacesToVisitComponent,
    ThingsToDoComponent,
    Home2Component,
    Home3Component,
    GalleryComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

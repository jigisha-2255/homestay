import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { BlogComponent } from './blog/blog.component';
import { AdvertisingComponent } from './advertising/advertising.component';
import { BusinessComponent } from './business/business.component';
import { CameraComponent } from './camera/camera.component';
import { TemplateComponent } from './template/template.component';
import { ResponsiveComponent } from './responsive/responsive.component';
import { WordpressComponent } from './wordpress/wordpress.component';
import { ReadMoreComponent } from './read-more/read-more.component';
import { HotelRoomsComponent } from './hotel-rooms/hotel-rooms.component';


@NgModule({
  declarations: [
    BlogComponent,
    AdvertisingComponent,
    BusinessComponent,
    CameraComponent,
    TemplateComponent,
    ResponsiveComponent,
    WordpressComponent,
    ReadMoreComponent,
    HotelRoomsComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule
  ]
})
export class NewsModule { }

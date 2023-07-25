import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news.component';
import { BlogComponent } from './blog/blog.component';
import { AdvertisingComponent } from './advertising/advertising.component';
import { BusinessComponent } from './business/business.component';
import { CameraComponent } from './camera/camera.component';
import { TemplateComponent } from './template/template.component';
import { ResponsiveComponent } from './responsive/responsive.component';
import { WordpressComponent } from './wordpress/wordpress.component';
import { ReadMoreComponent } from './read-more/read-more.component';

const routes: Routes = [
    {
      path:'',
      component:NewsComponent,
      children:[
        {
          path:'',
          component:BlogComponent
        },
        {
          path:'advertising',
          component:AdvertisingComponent
        },
        {
          path:'business',
          component:BusinessComponent
        },
        {
          path:'camera',
          component:CameraComponent
        },
        {
          path:'psdTemplate',
          component:TemplateComponent
        },
        {
          path:'responsive',
          component:ResponsiveComponent
        },
        {
          path:'wordpress',
          component:WordpressComponent
        },
        {
          path:'readMore',
          component:ReadMoreComponent
        },
      ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }

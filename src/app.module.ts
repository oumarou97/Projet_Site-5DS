import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultingComponent } from './app/consulting/consulting.component';
import { AppRoutingModule } from './app/app.routes';
import { AboutComponent } from './app/about/about.component';
import { ContactComponent } from './app/contact/contact.component';
import { PageServiceComponent } from './app/page-service/page-service.component';
import { BlogsComponent } from './app/blogs/blogs.component';



@NgModule({
  declarations: [] ,
  imports: [
    CommonModule, 
    AppRoutingModule, 
    AboutComponent,
    ContactComponent,
    PageServiceComponent,
    BlogsComponent
  ]
})
export class AppModule { }

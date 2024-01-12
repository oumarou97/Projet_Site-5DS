import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultingComponent } from './consulting/consulting.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { ContactsComponent } from './contacts/contacts.component';
import { BlogsComponent } from './blogs/blogs.component';
import { OffersComponent } from './offers/offers.component';
import { ValuesComponent } from './values/values.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultingComponent,
    AboutComponent,
    HomeComponent,
    OurservicesComponent,
    ContactsComponent,
    BlogsComponent,
    OffersComponent,
    ValuesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

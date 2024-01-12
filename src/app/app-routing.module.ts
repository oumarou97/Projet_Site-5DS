import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultingComponent } from './consulting/consulting.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ValuesComponent } from './values/values.component';
import { OffersComponent } from './offers/offers.component';
import { BlogsComponent } from './blogs/blogs.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: ConsultingComponent},
{ path: 'about', component: AboutComponent },
{ path: 'home', component: HomeComponent },
{ path: 'contacts', component: ContactsComponent },
{ path: 'blogs', component: BlogsComponent},
{ path: 'offers', component: OffersComponent },
{ path: 'values', component: ValuesComponent },
{ path: 'contacts', component: ContactsComponent },
{ path: 'ourservices', component: OurservicesComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

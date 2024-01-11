import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultingComponent } from './consulting/consulting.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageServiceComponent } from './page-service/page-service.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
const routes: Routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: '/index', component: ConsultingComponent },
    { path: '/service', component: PageServiceComponent },
    { path: '/blog', component: BlogsComponent },
    { path: '/contact', component: ContactComponent },
    { path: '/about', component: AboutComponent },
    { path: '**', redirectTo: '/index', pathMatch: 'full' },
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  
  export class AppRoutingModule { }
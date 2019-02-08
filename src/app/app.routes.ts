import { ClinicComponent } from './clinic/clinic.component';
import {Routes} from '@angular/router';
import { ClinicDetailComponent } from './clinic/clinic-detail/clinic-detail.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';



export const ROUTES: Routes = [
  {path: '', loadChildren: './home/home.module#HomeModule'},
  {path: 'sobre', loadChildren: './about/about.module#AboutModule'},
  {path:'clinicas', component: ClinicComponent},
  {path:'detalhes/:id', component: ClinicDetailComponent},
  {path: 'registro', component: RegisterComponent},
  {path:'**', component: NotFoundComponent}
];

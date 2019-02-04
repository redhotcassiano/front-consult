import { ClinicComponent } from './clinic/clinic.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import {Routes} from '@angular/router';
import { ClinicDetailComponent } from './clinic/clinic-detail/clinic-detail.component';


export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sobre', component: AboutComponent},
  {path:'clinicas', component: ClinicComponent},
  {path:'detalhes', component: ClinicDetailComponent}
];

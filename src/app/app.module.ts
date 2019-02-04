import { ClinicsService } from './clinic/services/clinic.service';
import { ROUTES } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { ClinicComponent } from './clinic/clinic.component';
import { ClinicInfoComponent } from './clinic/clinic-info/clinic-info.component';
import { HttpModule } from '@angular/http';
import { ClinicDetailComponent } from './clinic/clinic-detail/clinic-detail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ClinicComponent,
    ClinicInfoComponent,
    ClinicDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpModule,
    FontAwesomeModule
  ],
  providers: [ClinicsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

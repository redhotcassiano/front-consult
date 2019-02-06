import { ClinicsService } from './clinic/services/clinic.service';
import { ROUTES } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ClinicComponent } from './clinic/clinic.component';
import { ClinicInfoComponent } from './clinic/clinic-info/clinic-info.component';
import { HttpModule } from '@angular/http';
import { ClinicDetailComponent } from './clinic/clinic-detail/clinic-detail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AgendarConsultaComponent } from './clinic/modals/agendar-consulta/agendar-consulta.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { InputComponent } from './shared/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ClinicComponent,
    ClinicInfoComponent,
    ClinicDetailComponent,
    AgendarConsultaComponent,
    RegisterComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpModule,
    FontAwesomeModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ClinicsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

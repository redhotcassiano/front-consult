import { ClinicsService } from './clinic/services/clinic.service';
import { ROUTES } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, PreloadAllModules } from '@angular/router';
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

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './not-found/not-found.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClinicComponent,
    ClinicInfoComponent,
    ClinicDetailComponent,
    AgendarConsultaComponent,
    RegisterComponent,
    InputComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules}),
    HttpModule,
    FontAwesomeModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [ClinicsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

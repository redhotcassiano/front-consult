import { ClinicsService } from './services/clinic.service';
import { Clinic } from './models/clinic.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.sass']
})
export class ClinicComponent implements OnInit {

  clinics: Clinic[]

  constructor(private clinicsService: ClinicsService) { }

  ngOnInit() {
     this.clinicsService.clinics()
      .subscribe(clinics => this.clinics = clinics)
  }

}

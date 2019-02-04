import { Clinic } from './../models/clinic.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clinic-info',
  templateUrl: './clinic-info.component.html',
  styleUrls: ['./clinic-info.component.sass']
})
export class ClinicInfoComponent implements OnInit {

  @Input() clinic: Clinic;

  constructor() { }

  ngOnInit() {
  }

}

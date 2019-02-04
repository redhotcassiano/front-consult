import { Component, OnInit } from '@angular/core';
import { faHotel } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-clinic-detail',
  templateUrl: './clinic-detail.component.html',
  styleUrls: ['./clinic-detail.component.sass']
})
export class ClinicDetailComponent implements OnInit {
  faHotel = faHotel;

  constructor() { }

  ngOnInit() {
  }

}

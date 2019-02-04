import { map } from 'rxjs/operators';
import { API } from './../../../../app.api';
import { Clinic } from './../models/clinic.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';


@Injectable()

export class ClinicsService {

  constructor(private http: Http) {}

  clinics(): Observable<Clinic[]> {
    return this.http.get(`${API}/clinics`).pipe(
      map(response => response.json())
    )
  }
}

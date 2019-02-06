import { ErrorHandler } from './../../app.error-handler';
import { map } from 'rxjs/operators';
import { API } from './../../../../app.api';
import { Clinic } from './../models/clinic.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable()

export class ClinicsService {

  constructor(private http: Http) {}

  clinics(): Observable<Clinic[]> {
    return this.http.get(`${API}/clinics`).pipe(
      map(response => response.json()),
      catchError(ErrorHandler.HandleError)
    )
  }

  clinicById(id:string): Observable<Clinic> {
    return this.http.get(`${API}/clinics/${id}`).pipe(
      map(response => response.json()),
      catchError(ErrorHandler.HandleError)
    )
  }

}

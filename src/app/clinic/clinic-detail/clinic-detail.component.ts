import { Clinic } from './../models/clinic.model';
import { Component, OnInit } from '@angular/core';
import { faHotel } from '@fortawesome/free-solid-svg-icons';
import { ClinicsService } from '../services/clinic.service';
import { ActivatedRoute } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-clinic-detail',
  templateUrl: './clinic-detail.component.html',
  styleUrls: ['./clinic-detail.component.sass']
})
export class ClinicDetailComponent implements OnInit {
  clinic: Clinic
  closeResult: string
  faHotel = faHotel
  people = [
    {
      "name":"João Paulo"
    }
  ]
  selected: any
  selected2: any

  constructor(private clinicsService: ClinicsService, private route: ActivatedRoute, private modalService: NgbModal) { }

  ngOnInit() {
    this.clinicsService.clinicById(this.route.snapshot.params['id'])
      .subscribe(clinic => this.clinic = clinic)
  }

  agendarConsulta(id:string) {
    console.log('consulta para: ', id)
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  reciverFeedback(event:any) {
    this.modalService.dismissAll()
    console.log('Evento: ', event)
  }

}

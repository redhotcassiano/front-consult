import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-agendar-consulta',
  templateUrl: './agendar-consulta.component.html',
  styleUrls: ['./agendar-consulta.component.sass']
})
export class AgendarConsultaComponent implements OnInit {

  @Input() people = []
  selected: any
  selected2: any

  @Output() outputAgenda = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  enviarAgendamento(form){
    this.outputAgenda.emit({"selecionado": form.value});
  }

}

import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-input-container',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass']
})
export class InputComponent implements OnInit, AfterContentInit {
  input: any
  @Input() errorMessage: string

  @ContentChild(NgModel) model: NgModel

  constructor() { }

  ngOnInit() {
    this.input = this.model
  }

  ngAfterContentInit(){

    if(this.input === undefined){
      throw new Error('Esse Componente deve ser usado com uma NgModel.')
    }
  }

}

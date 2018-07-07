import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel } from '@angular/forms'

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {

	@Input() label: string
	@Input() errorMessage: string
	
	input: any

	@ContentChild(NgModel) model: NgModel

  constructor() { }

  ngOnInit() {
  }

  // deve ser criada de acordo com a interface, nao aceitando Arrow Function
  ngAfterContentInit(){
  	this.input = this.model

  	if (this.input === undefined){
  		throw new Error("Esse componente precisa ser usado com uma diretiva ngModel")
  	}
  }

  hasSuccess = () : boolean =>
  	this.input.valid && (this.input.dirty || this.input.touched)

  hasError = () : boolean =>
  	this.input.invalid && (this.input.dirty || this.input.touched)



}

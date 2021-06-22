import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.text.component.html',
  styleUrls: ['./input.text.component.scss']
})
export class InputTextComponent implements OnInit, OnChanges {

  // basic input 
  @Input() placeholder: string = 'Default Placeholder';
  @Input() required: boolean = false;
  @Input() type: string = 'text';
  @Input() error: boolean = false;

  // input for form 
  @Input() set control(control : FormControl) {
    if (this.formControl !== control) {
      this.formControl = control;
    }
  }

  // scss input 
  @Input() width: string;
  @Input() display: string;
  
  constructor() {}

  widthClassName: string;
  displayClassName: string;
  errorClassName!: string;

  formControl: FormControl;

  ngOnChanges(): void {
    this.setClassName();
  }

  ngOnInit(): void {
    this.setClassName();
  }

  setClassName(): void {
    this.displayClassName = this.display ? ('input-display-'+ this.display) : 'input-display-block';
    this.widthClassName = this.width ? ('input-width-' + this.width) : 'input-width-default';
    this.errorClassName = this.error ? 'error' : '';
  }
}
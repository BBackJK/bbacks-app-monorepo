import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl: './input.radio.component.html',
  styleUrls: ['./input.radio.component.scss'],
})
export class InputRadioComponent implements OnInit, OnChanges {

  @Input() label: string;
  @Input() value: any;

  // radio grouping
  @Input() groupName: string;

  @Input() set control(control: FormControl) {
    if (this.formControl !== control) {
      this.formControl = control;
    }
  }
  
  // scss input
  @Input() display: string;

  displayClassName: string;
  formControl: FormControl;

  constructor() {}

  ngOnChanges(): void {
    this.setClassName();
  }
  ngOnInit(): void {
    this.setClassName();
  }

  setClassName(): void {
    this.displayClassName = this.display ? ('display-' + this.display) : 'display-inline-flex';
  }
}

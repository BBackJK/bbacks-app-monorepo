import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './input.checkbox.component.html',
  styleUrls: ['./input.checkbox.component.scss']
})
export class InputCheckboxComponent implements OnInit {

  // basic input
  @Input() label: string = 'Default Label';
  @Input() value: any;

  // checkbox for form input
  @Input() formGroup: FormGroup;
  @Input() formName: string;

  // checkbox standalone for form input
  @Input() set control(control: FormControl) {
    if (this.formControl !== control) {
      this.formControl = control;
    }
  }

  // no form just for testing
  @Input() groupName: string;

  // scss input
  @Input() display: string;

  displayClassName: string;
  formControl: FormControl;

  constructor() {}

  ngOnInit(): void {
    this.setClassName();
  }

  setClassName(): void {
    this.displayClassName = this.display ? ('display-' + this.display) : 'display-inline-flex';
  }

  onChecked(e): void {
    const formArray: FormArray = this.formGroup.get(this.formName) as FormArray;
  
    if (e.target.checked) {
      formArray.push(new FormControl(e.target.value));
    } else {
      const idx = formArray.controls.findIndex((fc: FormControl) => fc.value === e.target.value);
      formArray.removeAt(idx);
    }
  }
}
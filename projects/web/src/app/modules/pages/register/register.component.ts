import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  constructor(
    private _location: Location
  ) {}

  ngOnInit(): void {

  }

  goBack(): void {
    this._location.back();
  }
}

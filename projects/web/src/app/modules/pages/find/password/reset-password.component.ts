import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  constructor(
    private _location: Location
  ) {}

  ngOnInit(): void {

  }

  goBack(): void {
    this._location.back();
  }
}

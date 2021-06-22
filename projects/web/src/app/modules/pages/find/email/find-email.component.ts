import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  templateUrl: './find-email.component.html',
  styleUrls: ['./find-email.component.scss']
})
export class FindEmailComponent implements OnInit {

  constructor(
    private _location: Location
  ) {}

  ngOnInit(): void {

  }

  goBack(): void {
    this._location.back();
  }
}

import { Component, Input, OnInit } from '@angular/core';

import { slideInOut } from '@shared/utils';

@Component({
  selector: 'app-shadow-cover',
  templateUrl: './shadow.cover.component.html',
  styleUrls: ['./shadow.cover.component.scss'],
  animations: [
    slideInOut
  ]
})
export class ShadowCoverComponent implements OnInit {

  @Input() display: string;

  displayClassName: string;

  constructor() {}

  ngOnInit(): void {
    this.setClassName();
  }

  setClassName(): void {
    this.displayClassName = this.display ? 'display-' + this.display : '';
  }
}

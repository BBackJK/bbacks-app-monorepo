import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flex-container',
  templateUrl: './flex.container.component.html',
  styleUrls: ['./flex.container.component.scss']
})
export class FlexContainerComponent implements OnInit {

  @Input() isCentered: boolean = true;

  constructor() {}

  ngOnInit(): void {

  }
}

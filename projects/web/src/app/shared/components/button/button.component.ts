import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() type: string = 'button';
  @Input() isDisabled: boolean = false;

  @Input() size: string;
  @Input() display: string;
  @Input() color: string = 'default';

  @Output() event = new EventEmitter();

  sizeClassName: string;
  colorClassName: string;
  displayClassName: string;

  constructor() {}

  ngOnInit(): void {
    this.setClassName();
  }

  setClassName(): void {
    this.sizeClassName = this.size ? ('btn-size-' + this.size) : 'btn-size-md';
    this.colorClassName = this.color ? ('btn-color-' + this.color) : 'btn-color-default';
    this.displayClassName = this.display ? ('btn-display-' + this.display) : 'btn-display-flat';
  }

  onClick(): void {
    this.event.emit();
  }
}
import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit, OnChanges {

  @Input() type: string = 'inline';
  @Input() textSize: string;
  @Input() textColor: string;

  textSizeClassName: string;
  textColorClassName: string;
  displayClassName: string;
  
  constructor() {}

  ngOnChanges(): void {
    this.setClassName();
  }
  ngOnInit(): void {
    this.setClassName();
  }

  setClassName(): void {
    this.textSizeClassName = this.textSize ? 'text-size-' + this.textSize : 'text-size-md';
    this.textColorClassName = this.textColor ? 'text-color-' + this.textColor : 'text-color-dark';
    this.displayClassName = this.type ? 'text-display-' + this.type : 'text-display-inline';
  }
}

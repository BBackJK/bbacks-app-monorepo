import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';

import { addZeroString, fadeInOut } from '@shared/utils';
@Component({
  selector: 'app-calendar-detail',
  templateUrl: './calendar.detail.component.html',
  styleUrls: ['./calendar.detail.component.scss'],
  animations: [
    fadeInOut
  ]
})
export class CalendarDetailComponent implements OnInit {

  @Input() selectDate: number;
  @Input() selectMonth: number;
  @Input() selectYear: number;

  @Output() event = new EventEmitter();

  date: string | number;
  month: string | number;
  year: string | number;
  
  changeFlag: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.setInitDate();
  }

  setInitDate(): void {
    this.date = addZeroString(this.selectDate);
    this.month = addZeroString(this.selectMonth);
    this.year = this.selectYear;
  }

  changeAddPage(): void {
    this.changeFlag = !this.changeFlag;
  }

  closeDetail(): void {
    this.event.emit();
  }
}
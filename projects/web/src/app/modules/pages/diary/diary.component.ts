import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diary',
  templateUrl: 'diary.component.html',
  styleUrls: ['./diary.component.scss']
})
export class DiaryComponent implements OnInit {

  today: Date = new Date();

  year: number = this.today.getFullYear();
  month: number = this.today.getMonth() + 1;
  date: number = this.today.getDate();

  constructor() {}

  ngOnInit(): void {}
}

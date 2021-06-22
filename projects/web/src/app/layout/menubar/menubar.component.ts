import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu-bar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {

  currentUrl: string = '/';

  readonly MENU_CALENDAR: string = 'calendar';
  readonly MENU_DIARY: string = 'diary';

  constructor(
    private _router: Router,
  ) {
    _router.events.subscribe((url) => {
      this.currentUrl = this._router.url;
    })
  }

  ngOnInit(): void {

  }
}
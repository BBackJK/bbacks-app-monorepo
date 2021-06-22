import { Component, HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  _pageYOffset: number = 0;
  openBox: string = '';

  @HostListener('window:scroll', ['$event']) onScroll(event) {
    this._pageYOffset = window.pageYOffset;
  }

  constructor(
    private viewPortScroller: ViewportScroller
  ) {}

  closeSidebar(event): void {
    this.openBox = '';
  }

  openSidebar(event): void {
    this.openBox = 'sidebar';
  }

  openSearch(event): void {
    this.openBox = 'search';
  }

  closeSearch(event): void {
    this.openBox = '';
  }

  onClickScrollToTop(): void {
    this.viewPortScroller.scrollToPosition([0, 0]);
  }
}

import { Component, OnInit, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // @Output() openSidebar = new EventEmitter();
  @Output() openSearch = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }

  // onOpenSidebar(): void {
  //   this.openSidebar.emit();
  // }

  onOpenSearch(): void {
    this.openSearch.emit();
  }  
}
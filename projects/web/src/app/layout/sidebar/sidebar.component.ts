import { Component, OnInit, Output, EventEmitter, DoCheck } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, DoCheck {

  @Output() closeSidebar = new EventEmitter();

  searchValue = new FormControl('', Validators.required);
  searchError: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    if (this.searchValue.valid) {
      this.searchError = false;
    }
  }

  onSubmitSearch(): void {
    if (this.searchValue.errors) {
      this.searchError = true;
      return;
    }
    console.log(this.searchValue.value);
  }

  onCloseSidebar(): void {
    this.closeSidebar.emit();
  }
}

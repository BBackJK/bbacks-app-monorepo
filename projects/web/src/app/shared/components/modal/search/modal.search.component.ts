import { Component, DoCheck } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-search',
  templateUrl: './modal.search.component.html',
  styleUrls: ['./modal.search.component.scss']
})
export class ModalSearchComponent implements DoCheck {

  searchValue = new FormControl('', Validators.required);
  searchError: boolean = false;

  constructor() {};

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
}

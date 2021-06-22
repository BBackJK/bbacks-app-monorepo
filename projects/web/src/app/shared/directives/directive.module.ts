import { NgModule } from '@angular/core';

import { ClickOutSideDirective } from './clickOutSide.directive';

import { SwingTopDirective } from './animations';

@NgModule({
  imports: [],
  exports: [
    ClickOutSideDirective
    , SwingTopDirective
  ],
  declarations: [
    ClickOutSideDirective
    , SwingTopDirective
  ]
})
export class DirectivesModule {}

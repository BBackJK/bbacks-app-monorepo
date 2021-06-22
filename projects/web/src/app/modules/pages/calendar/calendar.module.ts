import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule, DirectivesModule } from '@shared/index';

import { CalendarComponent } from './calendar.component';
import { CalendarDetailComponent } from './detail/calendar.detail.component';
import { CalendarAddComponent } from './add/calendar.add.component';


@NgModule({
  imports: [ 
    CommonModule
    , ComponentsModule
    , DirectivesModule
  ],
  exports: [ 
    CalendarComponent
    , CalendarDetailComponent
    , CalendarAddComponent 
  ],
  declarations: [ 
    CalendarComponent
    , CalendarDetailComponent
    , CalendarAddComponent 
  ]
}) 
export class CalendarModule {}

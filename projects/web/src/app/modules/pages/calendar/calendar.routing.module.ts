import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalendarComponent } from './calendar.component';
// import { CalendarDetailComponent } from './detail/calendar.detail.component';

const routes: Routes = [
  { path: '', component: CalendarComponent },
  // { path: 'detail', component: CalendarDetailComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule {}

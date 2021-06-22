import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindEmailComponent } from './find-email.component';

const routes: Routes = [
  { path: '', component: FindEmailComponent }
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class FindEmailRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '@modules/app-routing.module';
import { HomeComponent } from './home.component';
import { ComponentsModule, DirectivesModule } from '@shared/index';

@NgModule({
  imports: [ ComponentsModule, DirectivesModule, CommonModule, AppRoutingModule ],
  exports: [ HomeComponent ],
  declarations: [ HomeComponent ]
})
export class HomeModule {} 

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '@modules/app-routing.module';
import { ComponentsModule } from '@shared/components/components.module';

import { LoginComponent } from './login.component';

@NgModule({
  imports: [ 
    CommonModule
    , ComponentsModule
    , AppRoutingModule
  ],
  exports: [ LoginComponent ],
  declarations: [ LoginComponent ]
})
export class LoginModule {}

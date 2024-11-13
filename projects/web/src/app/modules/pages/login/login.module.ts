import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from '@modules/app-routing.module';
import { ComponentsModule } from '@shared/components/components.module';

import { LoginComponent } from './login.component';

@NgModule({
  imports: [ 
    CommonModule
    , ComponentsModule
    , AppRoutingModule
    , HttpClientModule
  ],
  exports: [ LoginComponent ],
  declarations: [ LoginComponent ]
})
export class LoginModule {}

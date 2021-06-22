import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '@shared/components/components.module';

import { RegisterComponent } from './register.component';

@NgModule({
  imports: [ CommonModule, ComponentsModule ],
  exports: [ RegisterComponent ],
  declarations: [ RegisterComponent ]
})
export class RegisterModule {}

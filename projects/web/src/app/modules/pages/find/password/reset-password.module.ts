import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '@shared/components/components.module';
import { ResetPasswordComponent } from './reset-password.component';

@NgModule({
  imports: [ CommonModule, ComponentsModule ],
  exports: [ ResetPasswordComponent ],
  declarations: [ ResetPasswordComponent ]
})
export class ResetPasswordModule {}

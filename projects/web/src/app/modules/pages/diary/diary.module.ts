import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiaryComponent } from './diary.component';
import { ComponentsModule } from '@shared/index';

@NgModule({
  imports: [ ComponentsModule, CommonModule ],
  exports: [ DiaryComponent ],
  declarations: [ DiaryComponent ] 
})
export class DiaryModule {}

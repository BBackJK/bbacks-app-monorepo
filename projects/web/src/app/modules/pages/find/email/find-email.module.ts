import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '@shared/components/components.module';
import { FindEmailComponent } from './find-email.component';

@NgModule({
  imports: [ CommonModule, ComponentsModule ],
  exports: [ FindEmailComponent ],
  declarations: [ FindEmailComponent ]
})
export class FindEmailModule {}

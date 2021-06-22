import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '@shared/components/components.module';
import { AppRoutingModule } from '@modules/app-routing.module';

import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenubarComponent } from './menubar/menubar.component';

@NgModule({
  imports: [ 
    AppRoutingModule
    , ComponentsModule
    , CommonModule
  ],
  exports: [ 
    ContentComponent
    , HeaderComponent
    , SidebarComponent
    , MenubarComponent  
  ],
  declarations: [ 
    ContentComponent
    , HeaderComponent
    , SidebarComponent
    , MenubarComponent 
  ],
})
export class LayoutModule {} 

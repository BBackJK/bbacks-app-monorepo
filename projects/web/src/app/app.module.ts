import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

import { AppComponent } from './app.component';
import { AppRoutingModule } from '@modules/app-routing.module';
import { environment } from '@env';

import { LayoutModule } from '@layout/layout.module';
import { ComponentsModule, DirectivesModule } from '@shared/index';
import { PagesModule } from '@modules/pages/pages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule
    , BrowserModule
    , BrowserAnimationsModule
    , NgxsModule.forRoot([
      // in your states
    ], { developmentMode: !environment.production })
    , NgxsLoggerPluginModule.forRoot()
    , NgxsReduxDevtoolsPluginModule.forRoot()
    , LayoutModule
    , PagesModule
    , ComponentsModule
    , DirectivesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

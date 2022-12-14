import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { View2Component } from './view2/view2.component';
import { NavComponent } from './nav/nav.component';
import { View1Component } from './view1/view1.component';

@NgModule({
  declarations: [AppComponent, View2Component, NavComponent, View1Component],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

@NgModule({})
export class App1SharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: AppModule,
      providers: [],
    };
  }
}

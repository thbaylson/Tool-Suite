import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { Home } from './home/home';
import { TileGrid } from './tile-grid/tile-grid';

@NgModule({
  declarations: [
    App,
    Home,
    TileGrid
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatGridListModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }

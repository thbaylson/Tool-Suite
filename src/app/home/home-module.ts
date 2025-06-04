import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';

import { HomeRoutingModule } from './home-routing-module';
import { Home } from './home';
import { TileGrid } from '../tile-grid/tile-grid';


@NgModule({
  declarations: [
    Home,
    TileGrid,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatIconModule,
    MatGridListModule,
    RouterModule,
  ]
})
export class HomeModule { }

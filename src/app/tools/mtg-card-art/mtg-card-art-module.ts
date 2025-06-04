import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MtgCardArtRoutingModule } from './mtg-card-art-routing-module';
import { MtgCardArt } from './mtg-card-art';


@NgModule({
  declarations: [
    MtgCardArt
  ],
  imports: [
    CommonModule,
    MtgCardArtRoutingModule
  ]
})
export class MtgCardArtModule { }

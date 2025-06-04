import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MtgCardArt } from './mtg-card-art';

const routes: Routes = [{ path: '', component: MtgCardArt }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MtgCardArtRoutingModule { }

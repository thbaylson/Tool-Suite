import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home-module').then(m => m.HomeModule) },
  { path: 'tools/mtg-card-art', loadChildren: () => import('./tools/mtg-card-art/mtg-card-art-module').then(m => m.MtgCardArtModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

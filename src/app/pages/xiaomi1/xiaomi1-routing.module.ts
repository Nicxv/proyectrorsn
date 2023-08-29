import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Xiaomi1Page } from './xiaomi1.page';

const routes: Routes = [
  {
    path: '',
    component: Xiaomi1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Xiaomi1PageRoutingModule {}

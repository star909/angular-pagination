import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParentDataComponent } from './modules/parent-data/parent-data.component';


const routes: Routes = [
  { path: '', component:ParentDataComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

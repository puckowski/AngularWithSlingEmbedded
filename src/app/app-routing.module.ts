import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootContentComponent } from './components/root-content/root-content.component';

const routes: Routes = [
  { path: '', component: RootContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

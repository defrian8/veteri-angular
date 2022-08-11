import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VeterComponent } from './components/veter/veter.component';

const routes: Routes = [
  { path: 'veter', component: VeterComponent },
  { path: '', redirectTo: 'veter', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

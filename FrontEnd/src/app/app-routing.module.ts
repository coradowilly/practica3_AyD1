import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PagoComponent} from './components/pago/pago.component';

const routes: Routes = [
  { path: "pago", component: PagoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

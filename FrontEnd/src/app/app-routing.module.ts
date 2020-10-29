import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InventarioComponent} from './components/inventario/inventario.component';

const routes: Routes = [
  { path: "inventario", component: InventarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

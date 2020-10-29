import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CatalogoComponent} from './components/catalogo/catalogo.component';
import {HistorialComponent} from './components/historial/historial.component';
import {PagoComponent} from './components/pago/pago.component';
import {InventarioComponent} from './components/inventario/inventario.component';

const routes: Routes = [
  { path: "catalogo", component: CatalogoComponent },
  { path: "historial", component: HistorialComponent },
  { path: "pago", component: PagoComponent },
  { path: "inventario", component: InventarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

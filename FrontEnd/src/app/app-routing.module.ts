import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CatalogoComponent} from './components/catalogo/catalogo.component';
import {HistorialComponent} from './components/historial/historial.component';

const routes: Routes = [
  { path: "catalogo", component: CatalogoComponent },
  { path: "historial", component: HistorialComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

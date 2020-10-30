import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {CatalogoComponent} from './components/catalogo/catalogo.component';
import {HistorialComponent} from './components/historial/historial.component';
import {PagoComponent} from './components/pago/pago.component';
import {InventarioComponent} from './components/inventario/inventario.component';
import { PerfilComponent } from './components/perfil/perfil.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: "catalogo", component: CatalogoComponent },
  { path: "historial", component: HistorialComponent },
  { path: "pago", component: PagoComponent },
  { path: "inventario", component: InventarioComponent },
  { path:"profile", component:PerfilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

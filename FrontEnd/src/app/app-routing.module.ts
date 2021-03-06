import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {CatalogoComponent} from './components/catalogo/catalogo.component';
import {HistorialComponent} from './components/historial/historial.component';
import {PagoComponent} from './components/pago/pago.component';
import {InventarioComponent} from './components/inventario/inventario.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: "catalogo", component: CatalogoComponent },
  { path: "historial", component: HistorialComponent },
  { path: "pago", component: PagoComponent },
  { path: "inventario", component: InventarioComponent },
  { path:"profile", component:PerfilComponent },
  { path:"signup", component:RegistroComponent },
  { path: "admin", component:AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

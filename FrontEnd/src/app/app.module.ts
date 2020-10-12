import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { PagoComponent } from './components/pago/pago.component';
import { HistorialComponent } from './components/historial/historial.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { PerfilComponent } from './components/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    CatalogoComponent,
    PagoComponent,
    HistorialComponent,
    InventarioComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

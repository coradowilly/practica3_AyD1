import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
=======

>>>>>>> f/registro
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { PagoComponent } from './components/pago/pago.component';
import { HistorialComponent } from './components/historial/historial.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { PerfilComponent } from './components/perfil/perfil.component';
<<<<<<< HEAD
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoginService } from './services/login.service';
import { RegaloComponent } from './components/regalo/regalo.component';
=======
>>>>>>> f/registro
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    CatalogoComponent,
    PagoComponent,
    HistorialComponent,
    InventarioComponent,
    PerfilComponent,
    NavigationComponent,
    RegaloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
<<<<<<< HEAD
  ],
  providers: [
    LoginService
=======
>>>>>>> f/registro
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

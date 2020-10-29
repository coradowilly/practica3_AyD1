import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CatalogoComponent} from './components/catalogo/catalogo.component';

const routes: Routes = [
  { path: "catalogo", component: CatalogoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

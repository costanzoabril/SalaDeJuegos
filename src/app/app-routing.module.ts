import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './Vistas/bienvenido/bienvenido.component';
import { ErrorComponent } from './Vistas/error/error.component';
import { JuegoComponent } from './Vistas/juego/juego.component';
import { LoginComponent } from './Vistas/login/login.component';
import { QuienSoyComponent } from './Vistas/quien-soy/quien-soy.component';
import { RegistroComponent } from './Vistas/registro/registro.component';

const routes: Routes = [
  {path:'', component: BienvenidoComponent},
  {path:'bienvenido', component: BienvenidoComponent},
  {path:'quien-soy', component: QuienSoyComponent},
  {path:'juego', component: JuegoComponent},
  {path:'login', component: LoginComponent},
  {path:'registro', component: RegistroComponent},
  {path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

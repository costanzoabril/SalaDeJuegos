import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './Vistas/bienvenido/bienvenido.component';
import { LoginComponent } from './Vistas/login/login.component';
import { ErrorComponent } from './Vistas/error/error.component';
import { QuienSoyComponent } from './Vistas/quien-soy/quien-soy.component';
import { JuegoComponent } from './Vistas/juego/juego.component';
import { RegistroComponent } from './Vistas/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    LoginComponent,
    ErrorComponent,
    QuienSoyComponent,
    JuegoComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    ToastrModule.forRoot()
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

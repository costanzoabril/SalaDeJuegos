import { ElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router, UrlSerializer } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegistroComponent } from '../registro/registro.component';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {

  logueado: boolean = false;
  
  emailShowed: string | null = '';

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.afAuth.currentUser.then(user => {
      if(user){
        this.logueado = true;
        this.emailShowed = user.email;
      }
      else if(user == null){
        this.logueado = false;
        this.emailShowed = null;
      }
    })
  }

  logOut(){
    this.logueado = false;
    this.emailShowed = null;
    this.afAuth.signOut().then(() => this.router.navigate(['/login']));
  }
}

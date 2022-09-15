import { Component, OnInit } from '@angular/core';
import { appCheckInstance$ } from '@angular/fire/app-check';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppComponent } from 'src/app/app.component';
import { ErroresService } from 'src/app/services/errores.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUsuario: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private afAuth: AngularFireAuth, 
    private toastr: ToastrService,
    private router: Router,
    private firebaseError: ErroresService
  ) {
    this.loginUsuario = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
   }

  loginRapido(){
    this.loginUsuario.value.email = 'invitado@gmail.com';
    this.loginUsuario.value.password = 'invitado';
  }

  ngOnInit(): void {
  }

  login(){
    const email = this.loginUsuario.value.email;
    const password = this.loginUsuario.value.password;

    this.afAuth.signInWithEmailAndPassword(email, password).then(() => {
      this.router.navigate(['/bienvenido']);
    }).catch((error) => {
      this.toastr.error(this.firebaseError.codeError(error.code), 'Error');
    })
  }

}

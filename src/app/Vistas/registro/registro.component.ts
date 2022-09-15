import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseError } from 'firebase/app';
import { ToastrService } from 'ngx-toastr';
import { ErroresService } from 'src/app/services/errores.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registrarUsuario: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private afAuth: AngularFireAuth, 
    private toastr: ToastrService,
    private router: Router,
    private firebaseError: ErroresService) { 
    this.registrarUsuario = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      repetirPassword: ['', Validators.required],
    })
   }

  ngOnInit(): void {
  }

  registrar(){
    const email = this.registrarUsuario.value.email;
    const password = this.registrarUsuario.value.password;
    const repetirPassword = this.registrarUsuario.value.repetirPassword;

    if(password !== repetirPassword){
      this.toastr.error('Las contraseñas ingresadas deben ser iguales.', 'Error');
      return;
    }
    
    this.afAuth.createUserWithEmailAndPassword(email, password).then(() => {
      this.toastr.success('El usuario fue registrado con exito!', 'Usuario registrado')
      this.router.navigate(['/bienvenido']);
    }).catch((error) => {
      this.toastr.error(this.firebaseError.codeError(error.code), 'Error');
    })
  }


}

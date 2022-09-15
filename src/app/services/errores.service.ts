import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErroresService {

  constructor() { }

  codeError(code: string){
    switch(code){

      case 'auth/email-already-in-use':
        return 'El usuario ya existe.'
      case 'auth/weak-password':
        return 'La contraseña es muy debil.'
      case 'auth/invalid-email':
        return 'El email es invalido.'
      case 'auth/wrong-password':
        return 'Contraseña incorrecta.'
      case 'auth/user-not-found':
        return 'El email no está registrado.'
      default:
        return 'Error desconocido.'
    }
  }
}

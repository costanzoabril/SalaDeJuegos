import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'salaJuegos';

  constructor(){

  }

  edadUno:number=0;
    edadDos:number=0;
    resultadoPromedio:number=0;
    resultadoSuma:number=0;
  
    calcular(){
        this.sumar();
        this.sacarPromedio();
    }
    sumar(){
      this.resultadoSuma = this.edadUno + this.edadDos;
    }
  
    sacarPromedio(){
      this.resultadoPromedio = (this.edadUno + this.edadDos) / 2;
    }
}



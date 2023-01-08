import { Component } from '@angular/core';

interface Personaje {
  nombre:string,
  poder:number
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  personajes: Personaje [] = [
    {
      nombre: 'Goku',
      poder: 34000
    },
    {
      nombre: 'Vegeta',
      poder: 32000
    }
  ];

  cambiarNombre(event:any){
    console.log(event.target.value);
  }

  agregar(){
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    }
    console.log(this.nuevo);
  }
}

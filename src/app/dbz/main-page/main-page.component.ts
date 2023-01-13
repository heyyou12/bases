import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

 
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

  nuevo: Personaje = {
    nombre: 'Maestro Rochi',
    poder:2500
  }
  cambiarNombre(event:any){
    console.log(event.target.value);
  }

}

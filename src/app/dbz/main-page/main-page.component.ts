import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


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

}

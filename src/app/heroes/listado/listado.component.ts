import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[]= ['Superman','Spiderman','Ironman','Thor','Goku','Hulk','Vegeta'];
  heroeBorrado: string|undefined = "";

  eliminarHeroe(){
    this.heroeBorrado = this.heroes.shift(); 
  } 
  
}

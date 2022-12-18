import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[]= ['Superman','Spiderman','Ironman','Thor','Goku','Hulk','Vegeta'];

  eliminarHeroe(){
    this.heroes.splice(1,1)
    console.log('Elimando...')
  } 
  
}

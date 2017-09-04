import { Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {HeroesService} from '../../services/heroes.service'
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent{

  heroe:any = {};

  constructor(private _activeRoute:ActivatedRoute, private _heroesService: HeroesService) {
    
    this._activeRoute.params.subscribe( params => {
      this.heroe = this._heroesService.getHeroe(params['id']);
      console.log(this.heroe);
    });
   }
  imgCasa(data:string){
    let imagen;
    if (data === 'DC'){
      imagen = 'assets/img/dc.jpg';
    }else if(data === 'Marvel'){
      imagen = 'assets/img/marvel.png';
    }else{
      imagen = 'assets/img/marvel.png';
    }
    return imagen;
  }
}
import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html'
})
export class ResultadoComponent implements OnInit {

  result:Heroe[] = [];
  txt:string;
  constructor(private _activeRoute:ActivatedRoute, private _heroesService: HeroesService) {  }

  ngOnInit() {
    this._activeRoute.params.subscribe( params => {
      this.result = this._heroesService.buscarHeroes(params['txt']);
      this.txt = params['txt'];
    });
  }

}

import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { HeroesService } from '../../servicios/heroes.service';


@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  heroes: any[] = [];
  termino: string;

  constructor(private _heroesService: HeroesService, private activatedRoute: ActivatedRoute)
   {
     
   }

  ngOnInit() {

     this.activatedRoute.params.subscribe( params => {
        this.termino = params['termino'];
        this.heroes = this._heroesService.burcarHeroes(params['termino']);
        console.log(this.heroes);
      });

  }

}

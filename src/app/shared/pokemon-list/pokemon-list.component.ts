import { PokeAPIService } from './../../services/poke-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit{

  constructor( private pokeAPIService:PokeAPIService) {}

  public pokemonList:any;

  ngOnInit():void {
    this.pokeAPIService.ListPokemons.subscribe(
      res => {
        this.pokemonList = res.results;
      },
    )
  }
}

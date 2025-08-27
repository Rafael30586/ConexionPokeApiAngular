import { Component, DoCheck, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PokeApiService } from '../services/poke-api.service';
import { IPokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-pokemon-container',
  templateUrl: './pokemon-container.component.html',
  styleUrls: ['./pokemon-container.component.css']
})
export class PokemonContainerComponent implements DoCheck, OnChanges{

  @Input() theme?: number
  @Input() mainPokemonId: number = 151

  mainPokemon?: IPokemon
  leftPokemon?: IPokemon
  rightPokemon?: IPokemon

  typesLength?: number 
  
  constructor(private _pokeApiService: PokeApiService){}

  ngOnChanges(changes: SimpleChanges): void {
    this._pokeApiService.getPokemonById(this.mainPokemonId).subscribe({
      next: (data: IPokemon) => {
        this.mainPokemon = data
        this.typesLength = this.mainPokemon.types.length
      }
    })
    this._pokeApiService.getLeftPokemon(this.mainPokemonId).subscribe({
      next: (data: IPokemon) => {
        this.leftPokemon = data
      }
    })
    this._pokeApiService.getRightPokemon(this.mainPokemonId).subscribe({
      next: (data: IPokemon) => {
        this.rightPokemon = data
      }
    })
    
  }

  ngDoCheck(): void {
    //console.log(`PokemonContainer, Theme: ${this.theme}`)
    //console.log('Types: ',this.typesLength)
  }

}

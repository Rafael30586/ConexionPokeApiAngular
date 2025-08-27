import { Component, DoCheck, Inject, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck, OnInit{
  title = 'conexionPokeApi';

  /*private themeService: ThemeService = @Inject(ThemeService) */

  
  theme?: number
  mainPokemonId: number = 81
  pokemonCount?: number

  constructor(private _themeService: ThemeService){}

  receivePokemonId(pokemonId: number){
    this.mainPokemonId = pokemonId
  }

  receiveMinusOne(backwards: number){
    this.mainPokemonId += backwards
  }

  receiveNumberOne(forward: number){
    this.mainPokemonId += forward
  }

  receivePokemonCount(pokemonCount: number){
    this.pokemonCount = pokemonCount
  }

  ngOnInit(): void {
    this.theme = this._themeService.getTheme()
  }

  ngDoCheck(): void {
    this.theme = this._themeService.getTheme()
    //console.log('AppComponent', `theme: ${this.theme}`)
    //console.log('Pokemon Id: ',this.mainPokemonId)
    console.log("Output: ", this.pokemonCount)
  }

}

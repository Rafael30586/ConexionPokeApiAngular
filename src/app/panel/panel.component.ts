import { AfterContentInit, Component, DoCheck, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { PokeApiService } from '../services/poke-api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AllPokemon, IPokemon } from '../models/pokemon.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit, OnChanges, AfterContentInit{
  
  @Input() theme?: number
  @Output() messageEvent = new EventEmitter<number>()
  @Output() messageEvent2 = new EventEmitter<number>()
  pokemonId?: number
  pokemonCount?: number

  sendPokemonId(){
    this.messageEvent.emit(this.pokemonId)
  }

  sendPokemonCount(){
    this.messageEvent2.emit(this.pokemonCount)
  }

  porkemonIdForm: FormGroup

  constructor(private _themeService: ThemeService, 
              private _pokeApiService: PokeApiService,
              private fb: FormBuilder){
  this.porkemonIdForm = this.fb.group({
    id: [151, Validators.required]
  })
              }
    
  changeTheme(){
    this._themeService.changeTheme()
  }

  onSubmit(e: Event){
    e.preventDefault()
    /*
    console.log("Form submitted programatically")
    console.log(this.porkemonIdForm)*/
    this._pokeApiService.getPokemonById(this.porkemonIdForm.value.id).subscribe({
      next: (data:IPokemon) => {
        console.log(data)
      }
    })
    this.sendPokemonId()
  }

  countPokemon(){
    this._pokeApiService.getPokemon().subscribe({
      next: (data: AllPokemon) =>{
        this.pokemonCount = data.count
      }
    })
  }

  ngOnInit(): void {
    this.sendPokemonCount()
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.countPokemon()
    console.log('Pokemon count:', this.pokemonCount)
  }

  ngDoCheck(): void {
    //console.log(`Panel, Theme: ${this.theme}`)
    if(this.pokemonCount == undefined){
      this.countPokemon()
      console.log('Pokemon count:', this.pokemonCount)
    }
    
  }

  ngAfterContentInit(): void {
    this.countPokemon()
    console.log('Pokemon count:', this.pokemonCount)
  }
  

}

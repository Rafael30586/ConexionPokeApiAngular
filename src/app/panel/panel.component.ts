import { Component, DoCheck, Input } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { PokeApiService } from '../services/poke-api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements DoCheck{
  
  @Input() theme?: number

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
    console.log("Form submitted programatically")
    console.log(this.porkemonIdForm)
    this._pokeApiService.getPokemonById(this.porkemonIdForm.value.id).subscribe({
      next: (data:IPokemon) => {
        console.log(data)
      }
    })
  }

  ngDoCheck(): void {
    //console.log(`Panel, Theme: ${this.theme}`)
  }

}

import { Component, DoCheck, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-container',
  templateUrl: './pokemon-container.component.html',
  styleUrls: ['./pokemon-container.component.css']
})
export class PokemonContainerComponent implements DoCheck{

  @Input() theme?: number


  ngDoCheck(): void {
    console.log(`PokemonContainer, Theme: ${this.theme}`)
  }

}

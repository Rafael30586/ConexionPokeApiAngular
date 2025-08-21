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

  constructor(private _themeService: ThemeService){}

  ngOnInit(): void {
    this.theme = this._themeService.getTheme()
  }

  ngDoCheck(): void {
    this.theme = this._themeService.getTheme()
    console.log('AppComponent', `theme: ${this.theme}`)
  }

}

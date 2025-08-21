import { Component, DoCheck, Input } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements DoCheck{
  
  @Input() theme?: number

  constructor(private _themeService: ThemeService){}
  
  changeTheme(){
    this._themeService.changeTheme()
  }

  ngDoCheck(): void {
    console.log(`Panel, Theme: ${this.theme}`)
  }

}

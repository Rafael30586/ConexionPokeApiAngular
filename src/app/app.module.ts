import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { PokemonContainerComponent } from './pokemon-container/pokemon-container.component';
import { PanelComponent } from './panel/panel.component';
import { LeftArrowButtonComponent } from './left-arrow-button/left-arrow-button.component';
import { RightArrowButtonComponent } from './right-arrow-button/right-arrow-button.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonContainerComponent,
    PanelComponent,
    LeftArrowButtonComponent,
    RightArrowButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'


import { AppComponent } from './app.component';


import { PokemonContainerComponent } from './pokemon-container/pokemon-container.component';
import { PanelComponent } from './panel/panel.component';
import { LeftArrowButtonComponent } from './left-arrow-button/left-arrow-button.component';
import { RightArrowButtonComponent } from './right-arrow-button/right-arrow-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PokemonContainerComponent,
    PanelComponent,
    LeftArrowButtonComponent,
    RightArrowButtonComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

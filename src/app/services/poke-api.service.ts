import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AllPokemon, IPokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private baseUrl = 'https://pokeapi.co/api/v2/pokemon'
  //idMainPokemon?: number
   

  constructor(private _httpClient: HttpClient) { }

  public getPokemonById(id: number): Observable<IPokemon>{
    return this._httpClient.get<IPokemon>(`${this.baseUrl}/${id}`)
  }

  public getLeftPokemon(id: number): Observable<IPokemon>{
    return this._httpClient.get<IPokemon>(`${this.baseUrl}/${(id - 1)}`)
  }

  public getRightPokemon(id: number): Observable<IPokemon>{
    return this._httpClient.get<IPokemon>(`${this.baseUrl}/${(id + 1)}`)
  }

  public getPokemon(): Observable<AllPokemon>{
    return this._httpClient.get<AllPokemon>(`${this.baseUrl}`)
  }
}

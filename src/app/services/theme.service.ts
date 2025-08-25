import { Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService{

  private theme: number = 1

  constructor() { }
  
  changeTheme(){
    if(this.theme === undefined) this.theme = 1
    else if(this.theme < 7) this.theme++
    else this.theme = 1
  }

  getTheme(){
    return this.theme
  }


}

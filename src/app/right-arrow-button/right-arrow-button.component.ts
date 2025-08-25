import { Component, DoCheck, Input } from '@angular/core';

@Component({
  selector: 'app-right-arrow-button',
  templateUrl: './right-arrow-button.component.html',
  styleUrls: ['./right-arrow-button.component.css']
})
export class RightArrowButtonComponent implements DoCheck{

  @Input() theme?: number

  ngDoCheck(): void {
    //console.log(`RightArrow, Theme: ${this.theme}`)
  }

}

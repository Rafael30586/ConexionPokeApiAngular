import { Component, DoCheck, Input } from '@angular/core';

@Component({
  selector: 'app-left-arrow-button',
  templateUrl: './left-arrow-button.component.html',
  styleUrls: ['./left-arrow-button.component.css']
})
export class LeftArrowButtonComponent implements DoCheck{

  @Input() theme?: number

  ngDoCheck(): void {
    console.log(`LeftArrow, Theme: ${this.theme}`)
  }

}

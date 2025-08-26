import { Component, DoCheck, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-right-arrow-button',
  templateUrl: './right-arrow-button.component.html',
  styleUrls: ['./right-arrow-button.component.css']
})
export class RightArrowButtonComponent implements DoCheck{

  @Input() theme?: number
  @Output() messageEvent = new EventEmitter<number>()
  forward: number = 1

  sendNumberOne(){
    this.messageEvent.emit(this.forward)
  }

  ngDoCheck(): void {
    //console.log(`RightArrow, Theme: ${this.theme}`)
  }

}

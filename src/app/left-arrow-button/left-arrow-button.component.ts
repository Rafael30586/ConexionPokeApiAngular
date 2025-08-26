import { Component, DoCheck, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-left-arrow-button',
  templateUrl: './left-arrow-button.component.html',
  styleUrls: ['./left-arrow-button.component.css']
})
export class LeftArrowButtonComponent implements DoCheck{

  @Input() theme?: number
  @Output() messageEvent = new EventEmitter<number>()
  backwards: number = -1

  sendNegativeOne(){
    this.messageEvent.emit(this.backwards)
  }

  ngDoCheck(): void {
    //console.log(`LeftArrow, Theme: ${this.theme}`)
  }

}

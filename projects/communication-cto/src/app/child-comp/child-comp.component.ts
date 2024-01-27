import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrl: './child-comp.component.css'
})
export class ChildCompComponent {
  @Output() myEvent = new EventEmitter();
  inp='';
  fun(){
    const message ="Hello Everyone";
    console.log("Button Clicked");
    this.myEvent.emit(message);
  }
}

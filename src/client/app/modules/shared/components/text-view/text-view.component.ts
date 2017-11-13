import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'TextView',
  templateUrl: 'text-view.component.html',
  styleUrls: ['text-view.component.css']
})
export class TextViewComponent {
  @Input() text: string;
   @Input() hint: string;
   @Output() value = new EventEmitter(); 
   change(newValue) {
   	this.value.emit(newValue); 
   }
}

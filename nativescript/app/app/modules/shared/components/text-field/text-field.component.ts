import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'TextField',
  templateUrl: 'text-field.component.html',
  styleUrls: ['text-field.component.css']
})
export class TextFieldComponent {
  @Input() text: string;
  @Input() hint: string;
}

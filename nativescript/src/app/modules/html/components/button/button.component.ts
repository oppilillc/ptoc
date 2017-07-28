import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'Button',
  templateUrl: 'button.component.html',
  styleUrls: ['button.component.css']
})
export class ButtonComponent {
  @Input() text: string;
}

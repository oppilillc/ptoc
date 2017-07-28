import { Component, Input } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'ListView',
  templateUrl: 'list-view.component.html',
  styleUrls: ['list-view.component.css']
})
export class ListViewComponent  {
	@Input() items: string[];
}


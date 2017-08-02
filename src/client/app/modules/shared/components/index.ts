import { NavbarComponent } from './navbar/navbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {ActionBarComponent} from './action-bar/action-bar.component';
import {ActionItemComponent} from './action-item/action-item.component';
import {ButtonComponent} from './button/button.component';
import {LabelComponent} from './label/label.component';
import {ImageComponent} from './image/image.component';
import {ListViewComponent} from './list-view/list-view.component';
import {TextViewComponent} from './text-view/text-view.component';
import {TextFieldComponent} from './text-field/text-field.component';
import {StackLayoutComponent} from './layout-containers/stack-layout/stack-layout.component';
import {GridLayoutComponent} from './layout-containers/grid-layout/grid-layout.component';
import {SharedService} from '../shared/index';


export const SHARED_COMPONENTS: any[] = [
  NavbarComponent,
  ToolbarComponent
  ];
let components: any[] = []; 

if (!SharedService.IS_NATIVESCRIPT()) {
components = [
   	ActionBarComponent,
    	ActionItemComponent,
    	ButtonComponent,
    	LabelComponent,
    	ImageComponent,
    	ListViewComponent,
    	StackLayoutComponent,
    	GridLayoutComponent,
    	TextViewComponent,
    	TextFieldComponent
];
  }
export const NS_COMPONENTS: any[] = components;
  /*
export * from './navbar/navbar.component';
export * from './toolbar/toolbar.component';
export * from './action-bar/action-bar.component';
export * from './action-item/action-item.component';
export * from './button/button.component';
export * from './image/image.component';
export * from './label/label.component';
export * from './layout-containers/stack-layout/stack-layout.component';
export * from './list-view/list-view.component';
export * from './text-view/text-view.component';
export * from './text-field/text-field.component';

*/

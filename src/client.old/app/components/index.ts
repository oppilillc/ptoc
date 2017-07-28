import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import {LabelComponent} from './label/label.component';
import {ButtonComponent} from './button/button.component';
import {TextViewComponent} from './text-view/text-view.component';
import {StackLayoutComponent} from './layout-containers/stack-layout/stack-layout.component';
import {GridLayoutComponent} from './layout-containers/grid-layout/grid-layout.component';
import {SharedService} from '../shared/index';

export const APP_COMPONENTS: any[] = [
  AppComponent,
  AboutComponent,
  HomeComponent
];

export * from './app.component';
export * from './about/about.component';
export * from './home/home.component';
let components: any[] = [];

if (!SharedService.IS_NATIVESCRIPT()) {
  // only setup on the web
  components = [
  /*
    ActionBarComponent,
    ActionItemComponent,
    ButtonComponent,
    ImageComponent,
    ListViewComponent,
    */
    LabelComponent,
    TextViewComponent,
    GridLayoutComponent,
    StackLayoutComponent
  ];
}

export const NATIVESCRIPT_WEB_COMPONENTS: any[] = components;

import { NgModule } from '@angular/core';
import { CoreLibComponent } from './core-lib.component';
import { NgDropDownComponent } from './ng-drop-down/ng-drop-down.component';
import {NgSelectModule} from '@ng-select/ng-select';

@NgModule({
  declarations: [CoreLibComponent, NgDropDownComponent],
  imports: [
    NgSelectModule
  ],
  exports: [CoreLibComponent, NgDropDownComponent]
})
export class CoreLibModule { }

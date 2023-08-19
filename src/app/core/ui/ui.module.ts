import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToastItemComponent} from './toast-item/toast-item.component';
import {BlockPageComponent} from "@app/core/ui/block-page/block-page.component";
import {ToastComponent} from "@app/core/ui/toast/toast.component";
import {ToolbarComponent} from './toolbar/toolbar.component';


@NgModule({
  declarations: [
    ToastItemComponent,
    BlockPageComponent,
    ToastComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToastItemComponent,
    BlockPageComponent,
    ToastComponent,
    ToolbarComponent
  ]
})
export class UiModule {
}

import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ExplorerComponent} from './explorer.component';
import {ExplorerRoutingModule} from "@app/modules/explorer/explorer-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {UiModule} from "@app/core/ui/ui.module";
import {HttpClientModule} from "@angular/common/http";
import {ToastService} from "@app/core/ui/services/toast/toast.service";
import {ExplorerService} from "@app/core/services/explorer/explorer.service";


@NgModule({
  declarations: [
    ExplorerComponent
  ],
  imports: [
    CommonModule,
    ExplorerRoutingModule,
    ReactiveFormsModule,
    UiModule,
    HttpClientModule,
    NgOptimizedImage
  ],
  providers: [
    ToastService,
    ExplorerService
  ]
})
export class ExplorerModule {
}

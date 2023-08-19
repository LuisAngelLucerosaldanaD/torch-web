import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExplorerComponent} from "@app/modules/explorer/explorer.component";

const routes: Routes = [
  {
    path: '',
    component: ExplorerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExplorerRoutingModule {
}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/explorer',
    pathMatch: 'full'
  },
  {
    path: 'explorer',
    loadChildren: () => import('./modules/explorer/explorer.module').then(m => m.ExplorerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

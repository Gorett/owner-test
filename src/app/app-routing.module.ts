import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepoViewComponent } from './repo-history/component/repo-view/repo-view.component';

const routes: Routes = [
  { path: 'repo', component: RepoViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

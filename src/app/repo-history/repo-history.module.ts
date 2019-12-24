import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommitsListComponent } from './component/commits-list/commits-list.component';
import { CommitViewComponent } from './component/commit-view/commit-view.component';
import { RepoViewComponent } from './component/repo-view/repo-view.component';

import { RepoHistoryService } from './services/repo-history.service';

@NgModule({
  declarations: [
    CommitsListComponent,
    CommitViewComponent,
    RepoViewComponent,
  ],
  imports: [
    CommonModule
  ],
  providers: [RepoHistoryService],
})
export class RepoHistoryModule { }

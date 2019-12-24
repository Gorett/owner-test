import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepoViewComponent } from './component/repo-view/repo-view.component';

import { RepoHistoryService } from './services/repo-history.service';

@NgModule({
  declarations: [
    RepoViewComponent,
  ],
  imports: [
    CommonModule
  ],
  providers: [RepoHistoryService],
})
export class RepoHistoryModule { }

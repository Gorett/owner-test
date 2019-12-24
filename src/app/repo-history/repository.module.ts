import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

import { CommitsListComponent } from './components/commits-list/commits-list.component';
import { CommitViewComponent } from './components/commit-view/commit-view.component';
import { RepoViewComponent } from './components/repo-view/repo-view.component';

import { RepositoryService } from './services/repository.service';



@NgModule({
  declarations: [
    CommitsListComponent,
    CommitViewComponent,
    RepoViewComponent,
  ],
  imports: [
    CommonModule,
    MatListModule,
  ],
  providers: [RepositoryService],
})
export class RepositoryModule { }

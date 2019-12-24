import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

import { CommitCardComponent } from './components/commit-card/commit-card.component';
import { CommitsListComponent } from './components/commits-list/commits-list.component';
import { CommitViewComponent } from './components/commit-view/commit-view.component';
import { RepoViewComponent } from './components/repo-view/repo-view.component';

import { RepositoryService } from './services/repository.service';

@NgModule({
  declarations: [
    CommitCardComponent,
    CommitsListComponent,
    CommitViewComponent,
    RepoViewComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
  ],
  providers: [RepositoryService],
})
export class RepositoryModule { }

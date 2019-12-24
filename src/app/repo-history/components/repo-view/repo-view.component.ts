import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Commit } from '../../interfaces';
import { RepositoryService } from '../../services/repository.service';

@Component({
  selector: 'app-repo-view',
  templateUrl: './repo-view.component.html',
  styleUrls: ['./repo-view.component.less'],
  providers: [RepositoryService]
})
export class RepoViewComponent implements OnInit {
  public commits: Observable<Commit[]>;

  constructor(private repoHistoryService: RepositoryService) {
  }

  handleError(err) {
    console.warn(err);
    // TODO show error message
  }

  ngOnInit() {
    this.commits = this.repoHistoryService.getCommits()
      .pipe(
        catchError((err: any) => {
          this.handleError(err);
          return of(err);
        }
      ));
  }
}

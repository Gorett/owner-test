import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

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

  ngOnInit() {
    this.commits = this.repoHistoryService.getCommits();
  }
}

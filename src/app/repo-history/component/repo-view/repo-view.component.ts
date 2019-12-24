import { Component, OnInit } from '@angular/core';

import { RepoHistoryService } from '../../services/repo-history.service';

@Component({
  selector: 'app-repo-view',
  templateUrl: './repo-view.component.html',
  styleUrls: ['./repo-view.component.less'],
  providers: [RepoHistoryService]
})
export class RepoViewComponent implements OnInit {

  constructor(private repoHistoryService: RepoHistoryService) {
  }

  ngOnInit() {
    this.repoHistoryService.getHistory();
  }
}

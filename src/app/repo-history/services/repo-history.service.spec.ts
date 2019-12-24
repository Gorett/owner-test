import { TestBed } from '@angular/core/testing';

import { RepoHistoryService } from './repo-history.service';

describe('RepoHistoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepoHistoryService = TestBed.get(RepoHistoryService);
    expect(service).toBeTruthy();
  });
});

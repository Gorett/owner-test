import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { RepoViewComponent } from './repo-view.component';
import {RepositoryService} from '../../services/repository.service';

describe('RepoViewComponent', () => {
  let component: RepoViewComponent;
  let fixture: ComponentFixture<RepoViewComponent>;
  let mockRepoHistoryService;

  beforeEach(async(() => {
    mockRepoHistoryService = jasmine.createSpyObj(['getCommits']);

    TestBed.configureTestingModule({
      declarations: [ RepoViewComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
    })
    .overrideProvider(RepositoryService, { useValue: mockRepoHistoryService })
    .compileComponents();
  }));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoViewComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

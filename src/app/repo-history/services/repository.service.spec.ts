import { of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

import { RepositoryService } from './repository.service';
import Commit from '../interfaces';
import { testCommit } from '../../test-data';

const expectedCommits: Commit[] = [testCommit];

describe('RepoHistoryService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: RepositoryService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new RepositoryService(httpClientSpy as any);
  });

  it('should return expected commits (HttpClient called once)', () => {
    httpClientSpy.get.and.returnValue(of(expectedCommits));

    service.getCommits().subscribe(
      commits => expect(commits).toEqual(expectedCommits, 'expected commits'),
      fail
    );

    expect(httpClientSpy.get.calls.count()).toBe(1, 'should be called only once');
  });

  it('should return an error when the server returns a 404', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404,
      statusText: 'Not Found'
    });

    httpClientSpy.get.and.returnValue(throwError(errorResponse));

    service.getCommits().subscribe(
      commits => fail('expected an error'),
      error  => expect(error.statusText).toBe('Not Found')
    );
  });
});

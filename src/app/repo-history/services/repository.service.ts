import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  private url = 'https://api.github.com/repos/AChuyan/dynasty-owner-test/commits';

  constructor(private http: HttpClient) {}

  public getCommits(): Observable<any> {
    return this.http.get(this.url);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { REPOSITORY_AUTHOR, REPOSITORY_NAME } from '../../config';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  private url = `https://api.github.com/repos/${REPOSITORY_AUTHOR}/${REPOSITORY_NAME}/commits`;

  constructor(private http: HttpClient) {}

  public getCommits(): Observable<any> {
    return this.http.get(this.url);
  }
}

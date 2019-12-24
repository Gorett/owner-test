import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepoHistoryService {
  private url = 'https://api.github.com/repos/AChuyan/dynasty-owner-test/commits';


  constructor(private http: HttpClient) {}

  public getHistory() {
    this.http.get(this.url).subscribe((data: any) => {
      console.log(data);
    });
  }
}

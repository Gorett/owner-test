import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { Commit } from '../../interfaces';

@Component({
  selector: 'app-commits-list',
  templateUrl: './commits-list.component.html',
  styleUrls: ['./commits-list.component.less']
})
export class CommitsListComponent {
  @Input() commits: Observable<Commit[]>;
}

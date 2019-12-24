import { Component, Input } from '@angular/core';
import { Commit } from '../../interfaces';

@Component({
  selector: 'app-commit-card',
  templateUrl: './commit-card.component.html',
  styleUrls: ['./commit-card.component.less']
})
export class CommitCardComponent {
  @Input() commit: Commit;
}

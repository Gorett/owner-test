import { Component } from '@angular/core';
import { REPOSITORY_NAME } from './config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  public title = `${REPOSITORY_NAME} project`;
}

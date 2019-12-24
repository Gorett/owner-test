import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';

import { CommitCardComponent } from './commit-card.component';

describe('CommitCardComponent', () => {
  let component: CommitCardComponent;
  let fixture: ComponentFixture<CommitCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommitCardComponent],
      imports: [MatCardModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';

import { CommitCardComponent } from './commit-card.component';
import { testCommit, testUrl } from '../../../test-data';

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
    component.commit = testCommit;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render card title', () => {
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('mat-card-title').textContent).toContain(testCommit.commit.message);
  });

  it('should render card subtitle', () => {
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('mat-card-subtitle').textContent).toContain(testCommit.commit.committer.name);
  });

  describe('link button', () => {
    it('should render correct link href', () => {
      const compiled = fixture.debugElement.nativeElement;

      expect(compiled.querySelector('a').href).toContain(testUrl);
    });

    it('should opens in a new tab', () => {
      const compiled = fixture.debugElement.nativeElement;

      expect(compiled.querySelector('a').target).toBe('_blank');
    });

    it('should have required attribute rel', () => {
      const compiled = fixture.debugElement.nativeElement;

      expect(compiled.querySelector('a').rel).toBe('noopener noreferrer');
    });
  });
});

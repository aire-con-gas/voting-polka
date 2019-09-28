import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingStageComponent } from './voting-stage.component';

describe('VotingStageComponent', () => {
  let component: VotingStageComponent;
  let fixture: ComponentFixture<VotingStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotingStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotingStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

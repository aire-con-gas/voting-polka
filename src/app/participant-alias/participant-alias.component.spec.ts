import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantAliasComponent } from './participant-alias.component';

describe('ParticipantAliasComponent', () => {
  let component: ParticipantAliasComponent;
  let fixture: ComponentFixture<ParticipantAliasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipantAliasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantAliasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

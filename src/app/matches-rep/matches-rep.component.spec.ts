import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesRepComponent } from './matches-rep.component';

describe('MatchesRepComponent', () => {
  let component: MatchesRepComponent;
  let fixture: ComponentFixture<MatchesRepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchesRepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchesRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

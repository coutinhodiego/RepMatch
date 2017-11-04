import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrarRepComponent } from './entrar-rep.component';

describe('EntrarRepComponent', () => {
  let component: EntrarRepComponent;
  let fixture: ComponentFixture<EntrarRepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrarRepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrarRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
